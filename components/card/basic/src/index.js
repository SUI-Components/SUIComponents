/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'

import React from 'react'
import cx from 'classnames'
import ImageLazyLoad from '@schibstedspain/sui-image-lazy-load'

const CardBasicMedia = ({src, alt = ''}) => (
  <div className="sui-CardBasic-media">
    <img src={src} alt={alt} />
  </div>
)

/**
 * Basic card containing a media object, an optional title and a description
 * text.
 */
export default function CardBasic({
  link,
  linkFactory: Link,
  media,
  title,
  description,
  size,
  lazyLoad
}) {
  const cardBasicClassName = cx('sui-CardBasic', {
    [`sui-CardBasic--${size}`]: typeof size !== 'undefined'
  })

  return (
    <div className={cardBasicClassName}>
      <Link href={link} className="sui-CardBasic-link">
        {lazyLoad ? (
          <ImageLazyLoad {...lazyLoad} {...media} />
        ) : (
          <CardBasicMedia {...media} />
        )}
        <div className="sui-CardBasic-content">
          {title && <header className="sui-CardBasic-title">{title}</header>}
          <div className="sui-CardBasic-description">{description}</div>
        </div>
      </Link>
    </div>
  )
}

CardBasic.propTypes = {
  /**
   * URL for the link that wraps the whole card.
   */
  link: PropTypes.string.isRequired,
  /**
   * Factory for the component that will hold the card link.
   */
  linkFactory: PropTypes.func,
  /**
   * Media object (now only image).
   */
  media: PropTypes.shape({
    /**
     * Alternative text for the image.
     */
    alt: PropTypes.string,
    /**
     * Image source.
     */
    src: PropTypes.string.isRequired
  }),
  /**
   * Optional card title.
   */
  title: PropTypes.string,
  /**
   * Text description.
   */
  description: PropTypes.string.isRequired,
  /**
   * Card size.
   */
  size: PropTypes.oneOf(['small']),
  /**
   * Lazy load flag / config.
   */
  lazyLoad: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
}

CardBasic.defaultProps = {
  linkFactory: ({href, className, children}) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
  lazyLoad: false
}

CardBasic.displayName = 'CardBasic'
