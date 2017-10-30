import React, {PropTypes} from 'react'
import CircleX from '@schibstedspain/sui-svgiconset/lib/Circlex'
import cx from 'classnames'

const Tag = ({Link, children, url, rel, ...rest} = {}) => {
  return url
  ? <Link href={url} rel={rel} {...rest}>{children}</Link>
  : <span {...rest}>{children}</span>
}

const tagChipClassName = ({isClickable, className = null}) => cx('sui-TagChip', className, {
  'sui-TagChip-link': isClickable
})

const preventDefaultHandler = handler => event =>
  handler && (
    event.preventDefault(),
    event.stopPropagation(),
    handler.apply()
  )

const TagChip = ({onRequestDelete, onClick, label, link: url, linkFactory, className, rel, icon: Icon = CircleX} = {}) =>
  <Tag
    onClick={preventDefaultHandler(onClick)}
    url={url}
    Link={linkFactory}
    className={tagChipClassName({isClickable: url || onClick, className})}
    rel={rel}
    >
    {label}
    {onRequestDelete &&
      <span onClick={preventDefaultHandler(onRequestDelete)} className='sui-TagChip-delete'>
        <Icon svgClass='sui-TagChip-deleteIcon' />
      </span>
    }
  </Tag>

TagChip.displayName = 'TagChip'

TagChip.propTypes = {
  /**
   * onRequestDelete event handler
   */
  onRequestDelete: PropTypes.func,
  /**
   * onClick event handler
   */
  onClick: PropTypes.func,
  /**
   * link url string
   */
  link: PropTypes.string,
  /**
   * Factory used to create navigation links
   */
  linkFactory: PropTypes.func,
  /**
   * tag text
   */
  label: PropTypes.node.isRequired,
  /**
   * Delete custom icon
   */
  icon: PropTypes.func,
  /**
   * tag rel
   */
  rel: PropTypes.string
}

TagChip.defaultProps = {
  linkFactory: ({ children, ...rest } = {}) =>
    <a {...rest}>{children}</a>
}

export default TagChip
