import {useState, useRef} from 'react'
import {
  Article,
  H2,
  Paragraph,
  RadioButton,
  RadioButtonGroup
} from '@s-ui/documentation-library'
import {moleculeDrawerSizes} from '../../../../components/molecule/drawer/src'
import {moleculeDrawerPlacements} from '../../../../components/molecule/drawer'
import DemoDrawer from './DemoDrawer'

const DemoSizes = ({className}) => {
  const [size, setSize] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()
  return (
    <Article className={className} ref={ref} style={{minHeight: 600}}>
      <H2>Size</H2>
      <Paragraph>
        A client can configure the size of the drawer (
        {Object.values(moleculeDrawerSizes).join(', ')}).
      </Paragraph>
      <RadioButtonGroup
        value={size}
        fullWidth
        onChange={(event, value) => {
          setSize(value)
          value && setIsOpen(true)
        }}
      >
        {Object.values(moleculeDrawerSizes).map(sizeValue => (
          <RadioButton
            key={sizeValue}
            value={sizeValue.toString()}
            label={sizeValue}
            checked={sizeValue === size}
          />
        ))}
      </RadioButtonGroup>
      {Object.values(moleculeDrawerSizes).map((value, index) => {
        return (
          <DemoDrawer
            key={index}
            initialPlacement={'top'}
            isOpen={size === value && isOpen}
            onClose={() => {
              setSize(undefined)
            }}
            size={size}
            targetRef={ref}
          />
        )
      })}
    </Article>
  )
}

export default DemoSizes
