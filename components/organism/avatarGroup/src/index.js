import React, {forwardRef} from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import MoleculeAvatar, {AVATAR_SIZES} from '@s-ui/react-molecule-avatar'

const OrganismAvatarGroup = forwardRef(
  (
    {
      className: classNameProp,
      max = 3,
      size = AVATAR_SIZES.MEDIUM,
      children: childrenProp,
      ...others
    },
    ref
  ) => {
    const baseClassName = 'react-OrganismAvatarGroup'
    const className = cx(
      baseClassName,
      classNameProp,
      `${baseClassName}--${size}`
    )
    const children = React.Children.toArray(childrenProp).filter(child =>
      React.isValidElement(child)
    )
    const avatars = children
      .slice(0, max)
      .reverse()
      .map(child =>
        React.cloneElement(child, {size, className: `${baseClassName}-avatar`})
      )

    const rest = children.length - avatars.length

    return (
      <div ref={ref} role="group" className={className} {...others}>
        {rest > 0 && <span className={`${baseClassName}-rest`}>+{rest}</span>}
        {avatars}
      </div>
    )
  }
)

OrganismAvatarGroup.Avatar = MoleculeAvatar

OrganismAvatarGroup.displayName = 'OrganismAvatarGroup'
OrganismAvatarGroup.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.values(AVATAR_SIZES)),
  max: PropTypes.number,
  children: PropTypes.node
}

export default OrganismAvatarGroup
