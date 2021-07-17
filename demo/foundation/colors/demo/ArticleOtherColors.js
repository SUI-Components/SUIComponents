import PropTypes from 'prop-types'
import {Article, Cell, Grid, H2} from '@s-ui/documentation-library'
import ColorDemoTimeout from './ColorDemoTimeout'
import Color from './Color'

const otherArray = [
  'system',
  'highlight',
  'text-base',
  'text-accent',
  'text-link'
]

const ArticleOtherColors = ({className}) => {
  return (
    <Article className={className}>
      <H2>Other Colors</H2>
      <ColorDemoTimeout>
        <Grid cols={otherArray.length} gutter={[0, 0]}>
          {otherArray.map((brandToken, key) => (
            <Cell key={key}>
              <Color
                className={`color-other--${brandToken}`}
                tokenName={`$c-${brandToken}`}
              />
            </Cell>
          ))}
        </Grid>
      </ColorDemoTimeout>
    </Article>
  )
}

ArticleOtherColors.propTypes = {
  className: PropTypes.string
}

export default ArticleOtherColors
