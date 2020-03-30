import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import AtomValidationText, {
  AtomValidationTextTypes
} from '@s-ui/react-atom-validation-text'
import AtomLabel, {AtomLabelTypes} from '@s-ui/react-atom-label'
import AtomHelpText from '@s-ui/react-atom-help-text'

const BASE_CLASS = 'sui-MoleculeField'
const CLASS_INLINE = `${BASE_CLASS}--inline`
const CLASS_AUTOHIDE = `${BASE_CLASS}--autohide`
const CLASS_INLINE_REVERSE = `${CLASS_INLINE}-reverse`
const CLASS_NODE_LABEL_CONTAINER = `${BASE_CLASS}-nodeLabelContainer`
const CLASS_INPUT_CONTAINER = `${BASE_CLASS}-inputContainer`
const CLASS_LABEL_CONTAINER = `${BASE_CLASS}-labelContainer`
const CLASS_LABEL_DESCRIPTION_CONTAINER = `${BASE_CLASS}-labelDescriptionContainer`

const MoleculeLabel = ({
  label,
  nodeLabel,
  type: typeValidationLabel,
  name,
  onClickLabel,
  children
}) => {
  let response = null
  if (label) {
    response = (
      <>
        <AtomLabel
          type={typeValidationLabel}
          name={name}
          text={label}
          onClick={onClickLabel}
        />
        {children}
      </>
    )
  } else if (nodeLabel) {
    response = <div className={CLASS_NODE_LABEL_CONTAINER}>{nodeLabel}</div>
  }
  return response
}

const MoleculeField = ({
  inline,
  reverse,
  errorText,
  successText,
  alertText,
  label,
  nodeLabel,
  useContrastLabel,
  helpText,
  name,
  onClickLabel,
  onChange: onChangeFromProps,
  children,
  labelDescriptionNode,
  autoHideHelpText
}) => {
  const className = cx(
    BASE_CLASS,
    inline && CLASS_INLINE,
    inline && reverse && CLASS_INLINE_REVERSE,
    autoHideHelpText && CLASS_AUTOHIDE
  )

  let statusValidationText, typeValidationLabel, typeValidationText
  const extendedChildren = React.Children.toArray(children)
    .filter(Boolean)
    .map((child, index) => {
      return React.cloneElement(child, {
        onChange: onChangeFromProps
      })
    })

  if (useContrastLabel) {
    typeValidationLabel = AtomLabelTypes.CONTRAST
  }

  if (errorText) {
    statusValidationText = errorText
    typeValidationLabel = AtomLabelTypes.ERROR
    typeValidationText = AtomValidationTextTypes.ERROR
  }

  if (successText) {
    statusValidationText = successText
    typeValidationLabel = AtomLabelTypes.SUCCESS
    typeValidationText = AtomValidationTextTypes.SUCCESS
  }

  if (alertText) {
    statusValidationText = alertText
    typeValidationLabel = AtomLabelTypes.ALERT
    typeValidationText = AtomValidationTextTypes.ALERT
  }

  return (
    <div className={className}>
      {(label || nodeLabel) && (
        <div className={CLASS_LABEL_CONTAINER}>
          {inline && extendedChildren}
          <MoleculeLabel
            type={typeValidationLabel}
            name={name}
            label={label}
            nodeLabel={nodeLabel}
            onClick={onClickLabel}
          >
            <div className={CLASS_LABEL_DESCRIPTION_CONTAINER}>
              {labelDescriptionNode}
            </div>
          </MoleculeLabel>
        </div>
      )}
      <div className={CLASS_INPUT_CONTAINER}>
        {!inline && extendedChildren}
        {typeValidationText && (
          <AtomValidationText
            type={typeValidationText}
            text={statusValidationText}
          />
        )}
        {helpText && <AtomHelpText text={helpText} />}
      </div>
    </div>
  )
}

MoleculeField.displayName = 'MoleculeField'

MoleculeField.propTypes = {
  /** children */
  children: PropTypes.any,

  /** Text to be displayed as label of the textarea */
  label: PropTypes.string,

  /** React node to be displayed as label of the textarea if there is not a given label value */
  nodeLabel: PropTypes.node,

  /** If true it will set the label type to 'CONTRAST' */
  useContrastLabel: PropTypes.bool,

  /** Text to be displayed as label of the textarea */
  onChange: PropTypes.func,

  /** used as for attribute. Must be the same as the input element id */
  name: PropTypes.string.isRequired,

  /** Success message to display when success state  */
  successText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Error message to display when error state  */
  errorText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Error message to display when alert state  */
  alertText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Help Text to display */
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Boolean to decide if elements should be set inline */
  inline: PropTypes.bool,

  /** Boolean to decide if elements should be set inline but input first */
  reverse: PropTypes.bool,

  /** Boolean to decide if elements should be set inline */
  onClickLabel: PropTypes.func,

  /** Boolean to decide if helptext should be auto hide */
  autoHideHelpText: PropTypes.bool,

  /** Description node to be attached to the label but it does not interact with the field itself */
  labelDescriptionNode: PropTypes.node
}

export default MoleculeField
