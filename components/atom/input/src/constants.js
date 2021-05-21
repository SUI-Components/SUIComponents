export const SIZES = {
  MEDIUM: 'm',
  SMALL: 's',
  XSMALL: 'xs'
}

export const INPUT_STATES = {
  ERROR: 'error',
  SUCCESS: 'success',
  ALERT: 'alert'
}

export const DEFAULT_PROPS = {
  SIZE: SIZES.MEDIUM,
  ON_ENTER_KEY: 'Enter',
  TAB_INDEX: -1,
  ON_KEY_DOWN: () => {},
  ON_ENTER: () => {},
  ON_CHANGE: () => {}
}
