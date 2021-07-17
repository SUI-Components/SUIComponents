import {Article, Cell, Grid, H2} from '@s-ui/documentation-library'
import PropTypes from 'prop-types'
import ColorDemoTimeout from './ColorDemoTimeout'
import Color from './Color'

const socialNetworkArray = [
  'facebook',
  'twitter',
  'google',
  'youtube',
  'whatsapp',
  'instagram'
]

const ArticleSocialNetworkColors = ({className}) => {
  return (
    <Article className={className}>
      <H2>Social Network Colors</H2>
      <ColorDemoTimeout>
        <Grid cols={socialNetworkArray.length} gutter={[0, 0]}>
          {socialNetworkArray.map((brandToken, key) => (
            <Cell key={key}>
              <Color
                className={`color-social-network--${brandToken}`}
                tokenName={`$c-${brandToken}`}
              />
            </Cell>
          ))}
        </Grid>
      </ColorDemoTimeout>
    </Article>
  )
}

ArticleSocialNetworkColors.propTypes = {
  className: PropTypes.string
}

export default ArticleSocialNetworkColors
