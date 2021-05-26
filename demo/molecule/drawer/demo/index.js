import {useState} from 'react'
import MoleculeDrawer from '../../../../components/molecule/drawer/src'

import {
  H1,
  H2,
  Box,
  Paragraph,
  Article,
  Button,
  ButtonGroup,
  Grid,
  Cell
} from '@s-ui/documentation-library'

const BASE_CLASS_DEMO = `DemoMoleculeDrawer`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const Demo = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [placement, setPlacement] = useState('left')

  return (
    <div className="sui-StudioPreview">
      <H1>MoleculeDrawer</H1>
      <Paragraph>
        Drawers can toggle open or closed. Closed by default, the drawer opens
        above all other content. The Drawer can be cancelled by clicking the
        overlay or pressing the Esc key.
      </Paragraph>
      <Article className={CLASS_SECTION}>
        <H2>Placement</H2>
        <Paragraph>
          A client can configure where the drawer will be placed in the screen
          (left, bottom, right, top).
        </Paragraph>
        <Box>
          <Grid align="center">
            <Cell>
              <ButtonGroup
                onChange={value => {
                  setPlacement(value)
                }}
              >
                {['left', 'right', 'bottom', 'top'].map(placementOption => (
                  <Button
                    key={placementOption}
                    onClick={() => {
                      setPlacement(placementOption)
                    }}
                  >
                    {placementOption}
                  </Button>
                ))}
              </ButtonGroup>
            </Cell>
            <Cell>
              <Button
                onClick={() => {
                  setIsOpen(true)
                }}
              >
                OPEN
              </Button>
            </Cell>
          </Grid>
        </Box>
        <MoleculeDrawer
          isOpen={isOpen}
          placement={placement}
          onClose={() => setIsOpen(false)}
        >
          <H2>MoleculeDrawer</H2>
          <Paragraph>This is the content of the drawer</Paragraph>
          <Button onClick={() => alert('button inside drawer clicked')}>
            Click me
          </Button>
        </MoleculeDrawer>
      </Article>
    </div>
  )
}

export default Demo
