import React from 'react'
import PropTypes from 'prop-types'

import MoleculeField from '@s-ui/react-molecule-field'
import AtomInput from '@s-ui/react-atom-input'

const getErrorState = (success, error) => {
  if (success) return false
  if (error) return true
}

const MoleculeInputField = ({
  id,
  label,
  successText,
  errorText,
  helpText,
  inline,
  onChange,
  ...props
}) => {
  const errorState = getErrorState(successText, errorText)
  return (
    <MoleculeField
      name={id}
      label={label}
      successText={successText}
      errorText={errorText}
      helpText={helpText}
      inline={inline}
      onChange={onChange}
    >
      <AtomInput id={id} errorState={errorState} {...props} />
    </MoleculeField>
  )
}

MoleculeInputField.displayName = 'MoleculeInputField'

MoleculeInputField.propTypes = {
  /** Text to be displayed as label */
  label: PropTypes.string.isRequired,

  /** used as label for attribute and input element id */
  id: PropTypes.string.isRequired,

  /* onChange callback */
  onChange: PropTypes.func,

  /** Success message to display when success state  */
  successText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Error message to display when error state  */
  errorText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Help Text to display */
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Boolean to decide if elements should be set inline */
  inline: PropTypes.bool,

  /** a button to be added on the right side of the input */
  button: PropTypes.node
}

export default MoleculeInputField
