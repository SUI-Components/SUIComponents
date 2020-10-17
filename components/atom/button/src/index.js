import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {
  CLASS,
  COLORS,
  DESIGNS,
  ICON_POSITIONS,
  GROUP_POSITIONS,
  MODIFIERS,
  OWN_PROPS,
  SIZES,
  TYPES,
  ELEVATIONS
} from './config'

import Button from './Button'
import ButtonIcon from './ButtonIcon'

const createClasses = (array, sufix = '') => {
  return array.reduce(
    (res, key) => ({...res, [key]: `${CLASS}--${key}${sufix}`}),
    {}
  )
}

const CLASSES = createClasses([
  ...TYPES,
  ...Object.values(DESIGNS),
  ...MODIFIERS,
  ...Object.values(SIZES),
  'empty'
])
const COLOR_CLASSES = createClasses(COLORS, 'Color')

/**
 * Get props cleaning out AtomButton own props
 * @param  {Object} props
 * @return {Object}
 */
const cleanProps = props => {
  const newProps = {...props}
  OWN_PROPS.forEach(key => delete newProps[key])
  return newProps
}

/**
 * Get modifiers to apply according to props
 * @param  {Object} props
 * @return {Array<String>}
 */
const getModifiers = props => {
  return Object.keys(props).filter(
    name => props[name] && MODIFIERS.includes(name)
  )
}

const getPropsWithDefaultValues = props => {
  let {color, design, type} = props
  // if color or design are defined, use them with the passed or default value
  if (color || design) {
    if (design !== DESIGNS.LINK) {
      color = color || 'primary'
    }
    design = design || 'solid'
  } else {
    type = type || 'primary'
  }

  return {
    color,
    design,
    type,
    ...props
  }
}

const AtomButton = props => {
  const {
    color,
    children,
    className,
    focused,
    groupPosition,
    leftIcon,
    rightIcon,
    size,
    design,
    title,
    type,
    elevation
  } = getPropsWithDefaultValues(props)

  const classNames = cx(
    CLASS,
    !type && COLOR_CLASSES[color],
    !type && CLASSES[design],
    type && CLASSES[type],
    groupPosition && `${CLASS}-group ${CLASS}-group--${groupPosition}`,
    groupPosition && focused && `${CLASS}-group--focused`,
    size && CLASSES[size],
    getModifiers(props).map(key => CLASSES[key]),
    !children && CLASSES.empty,
    {
      [`${CLASS}--elevation-${elevation}`]: !!elevation
    },
    className
  )

  const newProps = cleanProps(props)

  return (
    <Button {...newProps} className={classNames} title={title}>
      <span className={`${CLASS}-inner`}>
        <ButtonIcon position={ICON_POSITIONS.LEFT} size={size}>
          {leftIcon}
        </ButtonIcon>
        {leftIcon || rightIcon ? (
          <span className={`${CLASS}-text`}>{children}</span>
        ) : (
          children
        )}
        <ButtonIcon position={ICON_POSITIONS.RIGHT} size={size}>
          {rightIcon}
        </ButtonIcon>
      </span>
    </Button>
  )
}

AtomButton.displayName = 'AtomButton'

AtomButton.propTypes = {
  /**
   * Color of button:
   * 'primary' (default),
   * 'accent',
   * 'neutral',
   * 'success',
   * 'alert',
   * 'error',
   * 'social-facebook',
   * 'social-twitter',
   * 'social-google',
   * 'social-youtube',
   * 'social-whatsapp',
   * 'social-instagram'
   */
  color: PropTypes.oneOf(COLORS),
  /**
   * HTML element: if true, render a link. Otherwise render a button
   */
  link: PropTypes.bool,
  /**
   * URL to be added on the HTML link
   */
  href: PropTypes.string,
  /**
   * Target to be added on the HTML link
   */
  target: PropTypes.string,
  /**
   * Title to be added on button or link
   */
  title: PropTypes.string,
  /**
   * DEPRECATED. Type of button: 'primary' (default), 'accent', 'secondary', 'tertiary'
   */
  type: function(props, propName, componentName) {
    if (props[propName] !== undefined) {
      console.warn(
        `The prop ${propName} is DEPRECATED on ${componentName}. You should use now "design" and "color" props.`
      )
    }
  },
  /**
   * Design style of button: 'solid' (default), 'outline', 'flat', 'link'
   */
  design: PropTypes.oneOf(Object.values(DESIGNS)),
  /**
   * Group position: 'first', 'middle' (default), 'last'
   */
  groupPosition: PropTypes.oneOf(Object.values(GROUP_POSITIONS)),
  /**
   * Size of button 'small' (default), 'large'
   */
  size: PropTypes.oneOf(Object.values(SIZES)),
  /**
   * Size of button shadow
   */
  elevation: PropTypes.oneOf(Object.values(ELEVATIONS)),
  /**
   * Negative: style for dark backgrounds.
   */
  negative: PropTypes.bool,
  /**
   * Modifier: state of :hover,:active, :focus
   */
  focused: PropTypes.bool,
  /**
   * Disable: faded with no interaction.
   */
  disabled: PropTypes.bool,
  /**
   * Modifier: full width (100%)
   */
  fullWidth: PropTypes.bool,
  /**
   * Icon to be added on the left of the content
   */
  leftIcon: PropTypes.node,
  /**
   * Icon to be added on the right of the content
   */
  rightIcon: PropTypes.node,
  /**
   * Content to be included in the button
   */
  children: PropTypes.node,
  /**
   * Classes to add to button
   */
  className: PropTypes.any,
  /**
   * Factory used to create navigation links
   */
  linkFactory: PropTypes.func,
  /**
   * if true, type="submit" (needed when several buttons coexist under the same form)
   */
  isSubmit: PropTypes.bool,
  /**
   * if true, type="button" (needed when several buttons coexist under the same form)
   */
  isButton: PropTypes.bool
}

export default AtomButton
export {GROUP_POSITIONS as atomButtonGroupPositions}
export {COLORS as atomButtonColors}
export {DESIGNS as atomButtonDesigns}
export {SIZES as atomButtonSizes}
export {TYPES as atomButtonTypes}
