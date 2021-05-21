import React, {Fragment, Children, forwardRef} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {InputGroupProvider} from '../context'
import {SIZES, INPUT_STATES, DEFAULT_PROPS} from '../constants'

const BASE_CLASS = 'sui-AtomInput-group'
const Fieldset = 'fieldset'

const getClassNames = ({size, status}) => {
  return cx(
    BASE_CLASS,
    `${BASE_CLASS}-${size}`,
    status && `${BASE_CLASS}--${status}`
  )
}

// eslint-disable-next-line react/prop-types
const Separator = ({status}) => (
  <span
    className={cx(
      `${BASE_CLASS}-itemSeparator`,
      status && `${BASE_CLASS}--${status}`
    )}
  />
)

const InputGroup = (
  {
    children,
    name,
    disabled,
    form,
    status,
    onChange,
    onBlur,
    onFocus,
    onEnter,
    onKeyDown,
    separator = <Separator status={status} />,
    size = DEFAULT_PROPS.SIZE,
    ...props
  },
  ref
) => {
  const count = Children.count(children)
  const splitChildren = Children.map(children, (child, pos) => {
    const {className = ''} = child.props
    return (
      <Fragment key={child.props.id || pos}>
        {React.cloneElement(child, {
          className: className.concat(` ${BASE_CLASS}-item`).trim(),
          tabIndex: pos + 1
        })}
        {pos !== count - 1 && separator}
      </Fragment>
    )
  })

  const className = getClassNames({
    size,
    status
  })

  return (
    <Fieldset
      ref={ref}
      name={name}
      disabled={disabled}
      form={form}
      className={className}
      {...props}
    >
      <InputGroupProvider
        value={{onChange, onBlur, onFocus, onEnter, onKeyDown}}
      >
        {splitChildren}
      </InputGroupProvider>
    </Fieldset>
  )
}

InputGroup.propTypes = {
  /* Sets the name property of an element in the DOM */
  children: PropTypes.string,
  /* This Boolean attribute prevents the user from interacting with any input inside the group */
  disabled: PropTypes.bool,
  /* Specifies which form the fieldset belongs to */
  form: PropTypes.string,
  /* Sets the name property of an element in the DOM */
  name: PropTypes.string,
  /* onBlur callback */
  onBlur: PropTypes.func,
  /* onKeyDown callback */
  onKeyDown: PropTypes.func,
  /* onChange callback */
  onChange: PropTypes.func,
  /* onFocus callback */
  onFocus: PropTypes.func,
  /* onEnter callback */
  onEnter: PropTypes.func,
  /* Separator node between every input child */
  separator: PropTypes.node,
  /* 's' or 'm', default: 'm' */
  size: PropTypes.oneOf(Object.values(SIZES)),
  /* Will set a red/green border if set to `error` / `success` */
  status: PropTypes.oneOf(Object.values(INPUT_STATES))
}

export default forwardRef(InputGroup)
