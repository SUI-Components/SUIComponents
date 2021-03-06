import {useMemo} from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {BASE_CLASS, CELL_NUMBERS, BREAKPOINTS} from '../settings'

/**
 * getColSpanClassNamesTransform: gets the classes of each media query
 * depending on the combination of its values. breakpoint key values
 * are preferred over colSpan values
 * @param colSpan
 * @param otherProps {xxs, xs, s, m, l, xl, xxl}
 * @returns {null|string} – classnames for the column span
 */
export const getColSpanClassNamesTransform = ({colSpan, ...otherProps}) => {
  const getValidBreakpointValue = (colSpanValue, breakpointValue) => {
    if (CELL_NUMBERS.includes(breakpointValue)) {
      return breakpointValue
    } else if (CELL_NUMBERS.includes(colSpanValue)) {
      return colSpanValue
    }
    return false
  }

  const response = Object.values(BREAKPOINTS).reduce((acc, breakpointName) => {
    let value
    if (breakpointName === 'xxs') {
      const colSpanValue =
        typeof colSpan === 'number' && CELL_NUMBERS.includes(colSpan)
          ? colSpan
          : colSpan?.[breakpointName]
      value = getValidBreakpointValue(colSpanValue, otherProps[breakpointName])
    } else {
      value = getValidBreakpointValue(
        colSpan?.[breakpointName],
        otherProps[breakpointName]
      )
    }
    return value
      ? `${acc} ${BASE_CLASS}-item--${breakpointName}-${value}`.trim()
      : acc
  }, '')
  return response === '' ? null : response
}

export default function LayoutGridItem({
  children,
  colSpan = 1,
  l,
  lOffset,
  m,
  mOffset,
  s,
  sOffset,
  xl,
  xlOffset,
  xs,
  xsOffset,
  xxl,
  xxlOffset,
  xxs,
  xxsOffset
}) {
  const spanClassnames = useMemo(
    () => getColSpanClassNamesTransform({colSpan, xxl, xl, l, m, s, xs, xxs}),
    [colSpan, xxl, xl, l, m, s, xs, xxs]
  )
  const classNames = cx(
    `${BASE_CLASS}-item`,
    spanClassnames,
    xxsOffset && `${BASE_CLASS}-item--xxsOffset-${xxsOffset}`,
    xsOffset && `${BASE_CLASS}-item--xsOffset-${xsOffset}`,
    sOffset && `${BASE_CLASS}-item--sOffset-${sOffset}`,
    mOffset && `${BASE_CLASS}-item--mOffset-${mOffset}`,
    lOffset && `${BASE_CLASS}-item--lOffset-${lOffset}`,
    xlOffset && `${BASE_CLASS}-item--xlOffset-${xlOffset}`,
    xxlOffset && `${BASE_CLASS}-item--xxlOffset-${xxlOffset}`
  )

  return <div className={classNames}>{children}</div>
}

LayoutGridItem.displayName = 'LayoutGridItem'

LayoutGridItem.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /***
   * Defines the number of columns an item should span
   */
  colSpan: PropTypes.oneOfType([
    PropTypes.oneOf(CELL_NUMBERS),
    PropTypes.objectOf(PropTypes.oneOf(CELL_NUMBERS))
  ]),
  /**
   * Number of cells the component has to fill. It's applied for the `l` breakpoint and wider screens.
   */
  l: PropTypes.oneOf(CELL_NUMBERS),
  /**
   * Number of cells offset to move component. It's applied for the `l` breakpoint and wider screens.
   */
  lOffset: PropTypes.oneOf(CELL_NUMBERS),
  /**
   * Number of cells the component has to fill. It's applied for the `m` breakpoint and wider screens.
   */
  m: PropTypes.oneOf(CELL_NUMBERS),
  /**
   * Number of cells offset to move component. It's applied for the `m` breakpoint and wider screens.
   */
  mOffset: PropTypes.oneOf(CELL_NUMBERS),
  /**
   * Number of cells the component has to fill. It's applied for the `s` breakpoint and wider screens.
   */
  s: PropTypes.oneOf(CELL_NUMBERS),
  /**
   * Number of cells offset to move component. It's applied for the `s` breakpoint and wider screens.
   */
  sOffset: PropTypes.oneOf(CELL_NUMBERS),
  /**
   * Number of cells the component has to fill. It's applied for the `xl` breakpoint and wider screens.
   */
  xl: PropTypes.oneOf(CELL_NUMBERS),
  /**
   * Number of cells offset to move component. It's applied for the `xl` breakpoint and wider screens.
   */
  xlOffset: PropTypes.oneOf(CELL_NUMBERS),
  /**
   * Number of cells the component has to fill. It's applied for the `xs` breakpoint and wider screens.
   */
  xs: PropTypes.oneOf(CELL_NUMBERS),
  /**
   * Number of cells offset to move component. It's applied for the `xs` breakpoint and wider screens.
   */
  xsOffset: PropTypes.oneOf(CELL_NUMBERS),
  /**
   * Number of cells the component has to fill. It's applied for the `xxl` breakpoint and wider screens.
   */
  xxl: PropTypes.oneOf(CELL_NUMBERS),
  /**
   * Number of cells offset to move component. It's applied for the `xxl` breakpoint and wider screens.
   */
  xxlOffset: PropTypes.oneOf(CELL_NUMBERS),
  /**
   * Number of cells the component has to fill. It's applied for the `xxs` breakpoint and wider screens.
   */
  xxs: PropTypes.oneOf(CELL_NUMBERS),
  /**
   * Number of cells offset to move component. It's applied for the `xxs` breakpoint and wider screens.
   */
  xxsOffset: PropTypes.oneOf(CELL_NUMBERS)
}
