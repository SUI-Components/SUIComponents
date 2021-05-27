import {useState, useRef} from 'react'
import {
  Article,
  Box,
  Cell,
  Grid,
  H2,
  Paragraph,
  RadioButton,
  Code
} from '@s-ui/documentation-library'
import {moleculeDrawerSizes} from '../../../../components/molecule/drawer/src'
import {moleculeDrawerPlacements} from '../../../../components/molecule/drawer'
import DemoDrawer from './DemoDrawer'

const flexCenteredStyle = {
  display: 'flex',
  justifyContent: 'center',
  wrap: 'nowrap',
  alignItems: 'center',
  alignContent: 'center'
}

const onClickPlacement = (placement, state, setter) => (ev, value) => {
  if (state.includes(placement)) {
    setter(state.filter(value => value !== placement))
  } else {
    setter([...state, placement])
  }
}

const DemoPlacements = ({className}) => {
  const [openedDrawers, setOpenedDrawers] = useState([])
  const ref = useRef()
  return (
    <Article className={className} ref={ref} style={{minHeight: 600}}>
      <H2>Placement</H2>
      <Paragraph>
        A client can configure where the drawer will be placed in the screen
        using <Code>initialPlacement</Code> prop. (
        {Object.values(moleculeDrawerPlacements).join(', ')}).
      </Paragraph>
      <Paragraph>
        This prop is configured when the component as an initial setup and the component will not change its placement although the prop change its value.
      </Paragraph>
      <Box style={flexCenteredStyle}>
        <Grid align="center" cols={3} gutter={[8, 8]} style={{width: 300}}>
          <Cell />
          <Cell>
            <RadioButton
              label="↓"
              value={moleculeDrawerPlacements.TOP}
              checked={openedDrawers.includes(moleculeDrawerPlacements.TOP)}
              onClick={onClickPlacement(
                moleculeDrawerPlacements.TOP,
                openedDrawers,
                setOpenedDrawers
              )}
            />
          </Cell>
          <Cell />
          <Cell>
            <RadioButton
              label="→"
              value={moleculeDrawerPlacements.LEFT}
              checked={openedDrawers.includes(moleculeDrawerPlacements.LEFT)}
              onClick={onClickPlacement(
                moleculeDrawerPlacements.LEFT,
                openedDrawers,
                setOpenedDrawers
              )}
            />
          </Cell>
          <Cell>
            <RadioButton
              label="·"
              value="all"
              checked={
                openedDrawers.length ===
                Object.keys(moleculeDrawerPlacements).length
              }
              onClick={() =>
                setOpenedDrawers(Object.values(moleculeDrawerPlacements))
              }
            />
          </Cell>
          <Cell>
            <RadioButton
              label="←"
              value={moleculeDrawerPlacements.RIGHT}
              checked={openedDrawers.includes(moleculeDrawerPlacements.RIGHT)}
              onClick={onClickPlacement(
                moleculeDrawerPlacements.RIGHT,
                openedDrawers,
                setOpenedDrawers
              )}
            />
          </Cell>
          <Cell />
          <Cell>
            <RadioButton
              label="↑"
              value={moleculeDrawerPlacements.BOTTOM}
              checked={openedDrawers.includes(moleculeDrawerPlacements.BOTTOM)}
              onClick={onClickPlacement(
                moleculeDrawerPlacements.BOTTOM,
                openedDrawers,
                setOpenedDrawers
              )}
            />
          </Cell>
        </Grid>
      </Box>
      {Object.values(moleculeDrawerPlacements).map((placement, index) => {
        return (
          <DemoDrawer
            key={index}
            initialPlacement={placement}
            isOpen={openedDrawers.includes(placement)}
            onClose={() => {
              setOpenedDrawers([])
            }}
            size={moleculeDrawerSizes.AUTO}
            targetRef={ref}
          />
        )
      })}
    </Article>
  )
}

export default DemoPlacements
