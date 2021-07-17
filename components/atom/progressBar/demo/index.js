import {H1, Paragraph} from '@s-ui/documentation-library'

import ArticleDefault from './ArticleDefault'

const BASE_CLASS_DEMO = `DemoAtomProgressBar`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const Demo = () => {
  return (
    <div className="sui-StudioPreview">
      <div className="sui-StudioPreview-content sui-StudioDemo-preview">
        <H1>Progress Bar</H1>
        <Paragraph>
          A Progress bar is a visual representation of a specified wait time or
          the current status of a process.
        </Paragraph>
        <ArticleDefault className={CLASS_SECTION} />
      </div>
    </div>
  )
}

export default Demo
