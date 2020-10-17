/**
 * Base class for the component
 */
export const CLASS = 'sui-AtomButton'

/**
 * {Deprecated} Types of buttons
 */
export const TYPES = ['primary', 'accent', 'secondary', 'tertiary']

/**
 * Different designs for the button
 */
export const DESIGNS = {
  SOLID: 'solid',
  OUTLINE: 'outline',
  FLAT: 'flat',
  LINK: 'link'
}

/**
 * Available colors for the button
 */
export const COLORS = [
  'primary',
  'accent',
  'neutral',
  'success',
  'alert',
  'error',
  'social-facebook',
  'social-twitter',
  'social-google',
  'social-youtube',
  'social-whatsapp',
  'social-instagram'
]

/**
 * Positions to be used when the button is used on group
 */
export const GROUP_POSITIONS = {
  FIRST: 'first',
  MIDDLE: 'middle',
  LAST: 'last'
}

/**
 * Sizes for the button
 */
export const SIZES = {SMALL: 'small', LARGE: 'large'}

/**
 * All the available modifiers for the button
 */
export const MODIFIERS = [
  'disabled',
  'fullWidth',
  'focused',
  'negative',
  'link'
]

/**
 * A set of elevations that define the box shadow
 */
export const ELEVATIONS = {
  MEDIUM: 'medium',
  LARGE: 'large'
}

/**
 * Icon available positions
 */
export const ICON_POSITIONS = {
  LEFT: 'left',
  RIGHT: 'right'
}

/**
 * Props for the button in order to filter the rest of attributes
 */
export const OWN_PROPS = [
  ...TYPES,
  ...SIZES,
  'children',
  'className',
  'color',
  'design',
  'focused',
  'fullWidth',
  'groupPosition',
  'leftIcon',
  'negative',
  'rightIcon',
  'type'
]

/**
 * Display Name for Atom Icon component
 */
export const ATOM_ICON_DISPLAY_NAME = 'AtomIcon'

/**
 * Map of sizes of the button with the AtomIcon usage
 * The key is the size of the button
 * The value is the size of the icon
 */
export const ATOM_ICON_SIZES_MAPPER = {
  default: 'small',
  small: 'small',
  large: 'medium'
}
