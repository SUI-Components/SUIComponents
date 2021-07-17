import PropTypes from 'prop-types'
import {Article, H2, Paragraph} from '@s-ui/documentation-library'
import AtomProgressBar from 'components/atom/progressBar/src'

const ArticlePosition = ({className}) => {
  return (
    <Article className={className}>
      <H2>Default</H2>
      <Paragraph>Paragraph</Paragraph>
      <AtomProgressBar />
    </Article>
  )
}

ArticlePosition.propTypes = {
  className: PropTypes.string
}

export default ArticlePosition
