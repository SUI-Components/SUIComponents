import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import MoleculeField from '@s-ui/react-molecule-field'
import AtomCheckbox, {withCheckedValue} from '@s-ui/react-atom-checkbox'

const BASE_CLASS = 'sui-MoleculeCheckboxField'

const getErrorState = (success, error) => {
  if (success) return false
  if (error) return true
}

const MoleculeCheckboxField = ({
  id,
  label,
  successText,
  errorText,
  helpText,
  onChange,
  styled = false,
  ...props
}) => {
  const className = cx(BASE_CLASS, {[`${BASE_CLASS}--styled`]: styled})

  const errorState = getErrorState(successText, errorText)

  return (
    <div className={className}>
      <MoleculeField
        name={id}
        label={label}
        successText={successText}
        errorText={errorText}
        helpText={helpText}
        onChange={onChange}
        inline
        reverse
      >
        <AtomCheckbox id={id} errorState={errorState} {...props} />
      </MoleculeField>
    </div>
  )
}

MoleculeCheckboxField.displayName = 'MoleculeCheckboxField'

MoleculeCheckboxField.propTypes = {
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

  /* Style the checkbox component instead of use the default navigation styles */
  styled: PropTypes.bool
}

export default withCheckedValue(MoleculeCheckboxField)
