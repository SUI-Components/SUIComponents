import {useState, isValidElement, cloneElement} from 'react'
import PropTypes from 'prop-types'
import Input from '../Input'

const BASE_CLASS = 'sui-AtomInput'
const CLASS_PASSWORD = `${BASE_CLASS}-password`
const CLASS_PASSWORD_TOGGLE_BUTTON = `${CLASS_PASSWORD}--toggleButton`

const TEXT = 'text'
const PASSWORD = 'password'
const HIDE_LABEL = 'hide'
const SHOW_LABEL = 'show'

const PasswordRightButton = props => {
  return (
    <div
      role="button"
      tabIndex="0"
      className={CLASS_PASSWORD_TOGGLE_BUTTON}
      {...props}
    />
  )
}

const Password = ({
  onChange,
  pwShowLabel,
  pwHideLabel,
  rightElement,
  ...props
}) => {
  const [type, setType] = useState(PASSWORD)
  const [value, setValue] = useState('')

  const toggle = () => {
    const inputType = type === PASSWORD ? TEXT : PASSWORD
    setType(inputType)
  }

  const handleChange = (ev, {value}) => {
    setValue(value)
    onChange(ev, {value})
  }

  return (
    <div className={CLASS_PASSWORD}>
      <Input {...props} onChange={handleChange} value={value} type={type} />

      {isValidElement(rightElement) ? (
        cloneElement(rightElement, {onClick: toggle})
      ) : (
        <PasswordRightButton onClick={toggle}>
          {type === PASSWORD ? pwShowLabel : pwHideLabel}
        </PasswordRightButton>
      )}
    </div>
  )
}

Password.propTypes = {
  /* Element to be placed to right of the input */
  rightElement: PropTypes.element,
  /* Text to be shown in order to show the password on click */
  pwShowLabel: PropTypes.string,
  /* Text to be shown in order to hide the password on click */
  pwHideLabel: PropTypes.string,
  /* Event launched on every input change */
  onChange: PropTypes.func,
  /* The name of the control */
  name: PropTypes.string,
  /* The id of the control */
  id: PropTypes.string
}

Password.defaultProps = {
  pwShowLabel: SHOW_LABEL,
  pwHideLabel: HIDE_LABEL,
  onChange: () => {}
}

Password.RightButton = PasswordRightButton

export default Password
