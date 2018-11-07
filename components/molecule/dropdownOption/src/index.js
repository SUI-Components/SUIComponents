import React, {Component} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import AtomInput from '@s-ui/react-atom-input'

const CLASS = 'sui-MoleculeDropdownOption'

class MoleculeDropdownOption extends Component {
  state = {
    selected: this.props.selected
  }

  handleClick = () => {
    if (!this.props.disabled) {
      this.setState(
        prevState => ({
          selected: !prevState.selected
        }),
        () => {
          this.props.onClick(this.state.selected)
        }
      )
    }
  }

  render() {
    const {selected} = this.state
    const {text, checkbox, disabled} = this.props
    const wrapperClassName = cx(CLASS, {
      [`${CLASS}-checkbox`]: checkbox,
      [`${CLASS}--disabled`]: disabled,
      [`${CLASS}--selected`]: selected
    })
    return (
      <div className={wrapperClassName} onClick={this.handleClick}>
        {checkbox && (
          <AtomInput type="checkbox" checked={selected} disabled={disabled} />
        )}
        <span className={`${CLASS}-text`}>{text}</span>
      </div>
    )
  }
}

MoleculeDropdownOption.displayName = 'MoleculeDropdownOption'

MoleculeDropdownOption.propTypes = {
  /** Contains checkbox */
  checkbox: PropTypes.bool,

  /** Is disabled */
  disabled: PropTypes.bool,

  /** onClick callback */
  onClick: PropTypes.func,

  /** Is selected */
  selected: PropTypes.bool,

  /** Text */
  text: PropTypes.string.isRequired
}

MoleculeDropdownOption.defaultProps = {
  checkbox: false,
  disabled: false,
  onClick: () => {},
  selected: false
}

export default MoleculeDropdownOption
