import React, {useRef} from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'

import MoleculeProgressStep, {STATUSES} from './components/MoleculeProgressStep'

const BASE_CLASS = `sui-MoleculeProgressSteps`

const CLASS_STEPS = `${BASE_CLASS}-path`
const CLASS_CONTENT = `${BASE_CLASS}-content`
const CLASS_COMPRESSED_INFO = `${BASE_CLASS}-compressedInfo`

const CLASS_VERTICAL = `${BASE_CLASS}--vertical`
const CLASS_COMPRESSED = `${BASE_CLASS}--compressed`
const MoleculeProgressSteps = ({
  vertical,
  children,
  iconStepDone,
  compressed,
  isInline = false
}) => {
  const activeStepContent = useRef()

  const className = cx(BASE_CLASS, {
    [CLASS_VERTICAL]: vertical,
    [CLASS_COMPRESSED]: compressed
  })

  const getCompressedInfoSteps = () => {
    const childrenNodes = React.Children.toArray(children)
    const totalSteps = childrenNodes.length

    const numActiveStep =
      childrenNodes.findIndex(child => child.status === STATUSES.ACTIVE) + 1
    const activeLabel = childrenNodes[numActiveStep].props.label
    const stepPositionInfo = `${numActiveStep}/${totalSteps}`
    return `${stepPositionInfo}: ${activeLabel}`
  }

  const extendedChildren = React.Children.toArray(children)
    .filter(Boolean)
    .map((child, index, children) => {
      const {
        icon: iconChild,
        iconActive,
        status,
        children: childrenChild
      } = child.props

      const totalChildren = children.length
      const numStep = index + 1
      const lastStep = index >= totalChildren - 1

      const isVisited = status === STATUSES.VISITED
      const isActive = status === STATUSES.ACTIVE
      let icon = iconChild
      if (isVisited) icon = iconStepDone
      if (isActive) {
        icon = iconActive || iconChild
        activeStepContent.current = childrenChild
      }

      return React.cloneElement(child, {
        numStep,
        lastStep,
        icon,
        compressed,
        vertical,
        isActive,
        isInline
      })
    })

  return (
    <div className={className}>
      {compressed && (
        <p className={CLASS_COMPRESSED_INFO}>{getCompressedInfoSteps()}</p>
      )}
      <div className={CLASS_STEPS}>{extendedChildren}</div>
      {!isInline && (
        <div className={CLASS_CONTENT}>{activeStepContent.current}</div>
      )}
    </div>
  )
}

MoleculeProgressSteps.displayName = 'MoleculeProgressSteps'

MoleculeProgressSteps.propTypes = {
  /** children */
  children: PropTypes.any,

  /** Icon to display when status VISITED */
  iconStepDone: PropTypes.node.isRequired,

  /** Compressed mode (mobile) */
  compressed: PropTypes.bool,

  /** Vertical mode */
  vertical: PropTypes.bool,

  /** show content inline with label */
  isInline: PropTypes.bool
}

export default MoleculeProgressSteps
export {MoleculeProgressStep, STATUSES}
