import React from 'react'
import PropTypes from 'prop-types'

import MoleculeField from '@s-ui/react-molecule-field'
import AtomRadioButton from '@s-ui/react-atom-radio-button'

const BASE_CLASS = 'sui-MoleculeRadioButtonField'

const getErrorState = ({successText, errorText}) => {
  if (successText) return false
  if (errorText) return true
}

const MoleculeRadioButtonField = ({
  id,
  label,
  successText,
  errorText,
  alertText,
  helpText,
  onChange,
  labelDescriptionNode,
  ...props
}) => {
  const errorState = getErrorState({successText, errorText})

  return (
    <div className={BASE_CLASS}>
      <MoleculeField
        name={id}
        label={label}
        successText={successText}
        errorText={errorText}
        alertText={alertText}
        helpText={helpText}
        onChange={onChange}
        labelDescriptionNode={labelDescriptionNode}
        inline
        reverse
      >
        <AtomRadioButton id={id} errorState={errorState} {...props} />
      </MoleculeField>
    </div>
  )
}

MoleculeRadioButtonField.displayName = 'MoleculeRadioButtonField'

MoleculeRadioButtonField.propTypes = {
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

  /** Alert message to display when alert state  */
  alertText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Help Text to display */
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

  /** Boolean to decide if elements should be set inline */
  inline: PropTypes.bool,

  /** Description node to be attached to the label but it does not interact with the field itself */
  labelDescriptionNode: PropTypes.node
}

export default MoleculeRadioButtonField
