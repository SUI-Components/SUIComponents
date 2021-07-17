import {Article, Cell, Grid, H2} from '@s-ui/documentation-library'
import PropTypes from 'prop-types'
import ColorDemoTimeout from './ColorDemoTimeout'
import Color from './Color'

const brandArray = ['gray']
const variationsArray = [
  'light-5',
  'light-4',
  'light-3',
  'light-2',
  'light-1',
  'default',
  'dark-1',
  'dark-2',
  'dark-3',
  'dark-4'
]

const ArticleBasicColors = ({className}) => {
  return (
    <Article className={className}>
      <H2>Basic Colors</H2>
      <ColorDemoTimeout>
        <Grid cols={2} gutter={[16, 0]}>
          {['white', 'black'].map((value, key) => (
            <Cell key={key}>
              <Color
                className={`color-basic--${value}`}
                tokenName={`$c-${value}`}
              />
            </Cell>
          ))}
        </Grid>
        <Grid cols={1} gutter={[16, 0]}>
          {brandArray.map((brandToken, key) => (
            <Cell key={key}>
              <Grid cols={1} gutter={[0, 0]}>
                <Cell>
                  <Color
                    className={`color-basic--${brandToken}`}
                    tokenName={`$c-${brandToken}`}
                  />
                </Cell>
                <Cell>
                  <Grid
                    cols={variationsArray.length}
                    className={`color-basic--${brandToken}--variation`}
                  >
                    {variationsArray.map((variationToken, key) => (
                      <Cell key={key}>
                        <Color
                          className={`color-basic--${brandToken}--variation-${variationToken}`}
                          tokenName={`$c-${brandToken}${
                            variationToken !== 'default'
                              ? `-${variationToken}`
                              : ''
                          }`}
                        />
                      </Cell>
                    ))}
                  </Grid>
                </Cell>
              </Grid>
            </Cell>
          ))}
        </Grid>
      </ColorDemoTimeout>
    </Article>
  )
}

ArticleBasicColors.propTypes = {
  className: PropTypes.string
}

export default ArticleBasicColors
