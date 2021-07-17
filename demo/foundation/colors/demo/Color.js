import cx from 'classnames'
import PropTypes from 'prop-types'
import {BackgroundColorConsumer, Pantone} from '@s-ui/documentation-library'

const Color = ({className, tokenName}) => {
  return (
    <BackgroundColorConsumer className={cx('demo-color', className)}>
      {({color}) => (
        <Pantone
          color={Pantone.displayMode('RGB')(color)}
          tokenName={tokenName}
          fullWidth
          fullHeight
          name={null}
        />
      )}
    </BackgroundColorConsumer>
  )
}
Color.propTypes = {
  className: PropTypes.string,
  tokenName: PropTypes.string
}

export default Color
