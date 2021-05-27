import {Button, H2, Paragraph} from '@s-ui/documentation-library'
import MoleculeDrawer from '../../../../components/molecule/drawer/src'

const DemoDrawer = ({initialPlacement, isOpen, onClose, size, targetRef}) => {
  return (
    <MoleculeDrawer
      isOpen={isOpen}
      initialPlacement={initialPlacement}
      onClose={onClose}
      size={size}
      targetRef={targetRef}
    >
      <H2>MoleculeDrawer</H2>
      <Paragraph>This is the content of the drawer</Paragraph>
      <Button onClick={() => alert('button inside drawer clicked')}>
        Click me
      </Button>
      <br />
      <br />
      <Button onClick={onClose}>Close me</Button>
    </MoleculeDrawer>
  )
}

export default DemoDrawer
