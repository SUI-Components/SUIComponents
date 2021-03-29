#!/usr/bin/env node

/* eslint-disable no-console */

const path = require('path')
const fse = require('fs-extra')
const walker = require('walker')
const globby = require('globby')
const {getSpawnPromise} = require('@s-ui/helpers/cli')

const themesPkgs = [
  '@adv-ui/adv-theme',
  '@adv-ui/cf-theme',
  '@adv-ui/ep-theme',
  '@adv-ui/fc-theme',
  '@adv-ui/hab-theme',
  '@adv-ui/ij-theme',
  '@adv-ui/ma-theme',
  '@adv-ui/mt-theme'
]

const writeFile = (path, body) =>
  fse
    .outputFile(path, body)
    .then(() => {
      console.log(`Modified ${path}`)
    })
    .catch(err => {
      console.error(`Fail modifying ${path}`)
      throw err
    })

const checkFileExists = path => fse.pathExists(path)

const getThemesList = () => {
  const themes = []
  return new Promise(resolve => {
    walker(path.join(__dirname, '..', 'themes'))
      .on('file', theme => themes.push(theme))
      .on('end', () => {
        resolve(
          themes
            .map(theme => path.parse(theme).name)
            .filter(name => !name.match(/^_/))
        )
      })
  })
}

const installThemesPkgs = () =>
  getSpawnPromise(
    'npm',
    themesPkgs.reduce((acc, pkg) => [...acc, pkg], [
      'i',
      '--silent',
      '--no-optional',
      '--no-save',
      '--no-audit',
      '--no-fund',
      '--no-package-lock'
    ]),
    {cwd: process.cwd()}
  )

const writeThemesInDemoFolders = async themes => {
  await getSpawnPromise('rm', ['-Rf', './components/**/**/demo/themes'], {
    cwd: process.cwd()
  })
  const paths = await globby(
    [
      path.join(process.cwd(), 'components', '**', '**', 'demo'),
      '!**/node_modules/**'
    ],
    {onlyDirectories: true, cwd: process.cwd()}
  )
  paths
    .filter(p => p.match(/\/components\/(\w+)\/(\w+)\/demo/))
    .forEach(async demo => {
      try {
        const [demoRoute, category, component] = demo.match(
          /\/components\/(\w+)\/(\w+)\/demo/
        )
        const hasDemoStyles = await checkFileExists(`.${demoRoute}/index.scss`)
        await Promise.all(
          themes.map(theme =>
            writeFile(
              `.${demoRoute}/themes/${theme}.scss`,
              `
            @import '../../../../../themes/${theme}';
${hasDemoStyles ? `@import '../index.scss';` : ''}
@import '../../src/index.scss';`.trim()
            )
          )
        )
      } catch (e) {
        console.log('Err:', e)
      }
    })
}

;(async () => {
  const themes = await getThemesList()
  await installThemesPkgs()
  await writeThemesInDemoFolders(themes)
})()
