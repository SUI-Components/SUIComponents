import {useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import {createPortal} from 'react-dom'
import cx from 'classnames'

import useEventListener from '@s-ui/react-hooks/lib/useEventListener'
import useBoolean from '@s-ui/react-hooks/lib/useBoolean'
import useControlledState from '@s-ui/react-hooks/lib/useControlledState'

import {
  OVERLAY_ELEMENT_TYPE,
  BODY_ELEMENT_TYPE,
  CONTENT_ELEMENT_TYPE,
  PLACEMENTS,
  SIZES,
  ANIMATION_DURATION
} from './settings'

const getContainer = ref => {
  const hasRef = ref !== undefined
  if (hasRef) {
    if (ref.current) {
      ref.current.style.position = 'relative'
      ref.current.style.overflow = 'hidden'
    }
    return ref.current
  }
  return document.body
}

export default function MoleculeDrawer({
  targetRef,
  isOpen,
  initialPlacement = PLACEMENTS.LEFT,
  size = SIZES.M,
  duration = ANIMATION_DURATION.NORMAL,
  onClose,
  onClosed,
  children
}) {
  const overlayRef = useRef(null)
  const [isOpened, {off, on}] = useBoolean(isOpen)
  const [openedState, setOpenedState] = useControlledState(isOpen, false)
  const [placement] = useState(initialPlacement)

  useEventListener('keydown', event => {
    if (openedState === false) return
    if (event.key === 'Escape') {
      typeof onClose === 'function' && onClose(event)
      event.preventDefault()
    }
  })

  const drawer = (
    <div className={cx('react-MoleculeDrawer')}>
      <OVERLAY_ELEMENT_TYPE
        ref={overlayRef}
        className={cx(
          'react-MoleculeDrawer-overlay',
          `react-MoleculeDrawer-overlay--duration-${duration}`,
          {
            'react-MoleculeDrawer-overlay-open': openedState
          }
        )}
        onClick={event => {
          overlayRef.current === event.target &&
            typeof onClose === 'function' &&
            onClose(event)
        }}
      >
      </OVERLAY_ELEMENT_TYPE>
      <CONTENT_ELEMENT_TYPE
        onAnimationEnd={event => {
          debugger
          setOpenedState(false)
          typeof onClosed === 'function' && onClosed(event)
        }}
        className={cx(
          'react-MoleculeDrawer-content',
          `react-MoleculeDrawer-content--${size}--${placement}`,
          `react-MoleculeDrawer-content--duration-${duration}`,
          {
            'react-MoleculeDrawer-content-open': openedState
          }
        )}
      >
        <BODY_ELEMENT_TYPE className="react-MoleculeDrawer-body">
          {children}
        </BODY_ELEMENT_TYPE>
      </CONTENT_ELEMENT_TYPE>
    </div>
  )

  const container = getContainer(targetRef)
  return container ? createPortal(drawer, container) : null
}

export {PLACEMENTS as moleculeDrawerPlacements}
export {SIZES as moleculeDrawerSizes}

MoleculeDrawer.displayName = 'MoleculeDrawer'
MoleculeDrawer.propTypes = {
  /** Tells if the drawer is open or not */
  isOpen: PropTypes.bool,
  /** On close callback used to manage the isOpen prop from the parent */
  onClose: PropTypes.func,
  /** Screen setup initial position where the drawer will be initialized and located */
  initialPlacement: PropTypes.oneOf(Object.values(PLACEMENTS))
}
