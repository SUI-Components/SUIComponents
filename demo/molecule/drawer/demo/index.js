import {useState, useRef} from 'react'
import MoleculeDrawer, {
  moleculeDrawerSizes,
  moleculeDrawerPlacements
} from '../../../../components/molecule/drawer/src'

import {
  H1,
  H2,
  Box,
  Paragraph,
  Article,
  RadioButtonGroup,
  RadioButton,
  Grid,
  Cell
} from '@s-ui/documentation-library'

import DemoDrawer from './DemoDrawer'
import {LayoutGridAlignContent} from '../../../../components/layout/grid/src'
import DemoSizes from './DemoSizes'
import DemoPlacements from './DemoPlacements'

const BASE_CLASS_DEMO = `DemoMoleculeDrawer`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const Demo = () => {
  const [openedDrawers, setOpenedDrawers] = useState([])
  const ref = useRef()

  return (
    <div className="sui-StudioPreview">
      <H1>MoleculeDrawer</H1>
      <Paragraph>
        Drawers can toggle open or closed. Closed by default, the drawer opens
        above all other content. The Drawer can be cancelled by clicking the
        overlay or pressing the Esc key.
      </Paragraph>
      <DemoPlacements className={CLASS_SECTION} />
      <br />
      <DemoSizes className={CLASS_SECTION} />
    </div>
  )
}

export default Demo
