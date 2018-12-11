/* eslint-disable react/prop-types, no-unused-vars, no-console */

import React from 'react'
// moleculeSelectListSizes

import {countries} from './data'

import MoleculeSelect, {
  moleculeSelectDropdownListSizes
} from '../../../../components/molecule/select/src'

import {iconCloseTag, iconArrowDown, iconArrowUp} from './Icons'

import {withStateValue} from '@s-ui/hoc'
import './index.scss'

const MoleculeSelectWithState = withStateValue(MoleculeSelect)

const BASE_CLASS_DEMO = 'DemoMoleculeSelect'
const CLASS_DEMO_SECTION = `${BASE_CLASS_DEMO}-section`
const CLASS_DEMO_LIST = `${BASE_CLASS_DEMO}-list`

const Demo = () => (
  <div className={BASE_CLASS_DEMO}>
    <h1>
      <code>MoleculeSelect</code>
    </h1>
    <h2>Dynamic</h2>
    <div className={CLASS_DEMO_SECTION}>
      <h3>Single selection</h3>
      <MoleculeSelectWithState
        options={countries}
        onChange={(_, {value}) => console.log(value)}
        closeTagIcon={iconCloseTag}
        iconArrowDown={iconArrowDown}
        iconArrowUp={iconArrowUp}
        closeOnSelect
      />
    </div>

    <h2>Static</h2>
    <div className={CLASS_DEMO_SECTION}>
      <h3>
        Basic (default <code>size → SMALL</code>)
      </h3>
      <div className={CLASS_DEMO_LIST} />
    </div>
  </div>
)

export default Demo
