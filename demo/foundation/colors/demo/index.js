import cx from 'classnames'
import {H1} from '@s-ui/documentation-library'
import ArticleBrandColors from './ArticleBrandColors'
import ArticleBasicColors from './ArticleBasicColors'
import ArticleSemanticColors from './ArticleSemanticColors'
import ArticleSocialNetworkColors from './ArticleSocialNetworkColors'
import ArticleOtherColors from './ArticleOtherColors'

import './index.scss'

const BASE_CLASS_DEMO = `DemoFoundationColor`
const CLASS_SECTION = `${BASE_CLASS_DEMO}-section`

const Demo = () => {
  return (
    <div className={cx('sui-StudioPreview', BASE_CLASS_DEMO)}>
      <H1>Colors</H1>
      <ArticleBrandColors
        className={cx(CLASS_SECTION, `${CLASS_SECTION}-color-brand`)}
      />
      <br />
      <ArticleBasicColors
        className={cx(CLASS_SECTION, `${CLASS_SECTION}-color-basic`)}
      />
      <br />
      <ArticleSemanticColors
        className={cx(CLASS_SECTION, `${CLASS_SECTION}-color-semantic`)}
      />
      <br />
      <ArticleSocialNetworkColors
        className={cx(CLASS_SECTION, `${CLASS_SECTION}-color-social-network`)}
      />
      <br />
      <ArticleOtherColors
        className={cx(CLASS_SECTION, `${CLASS_SECTION}-color-other`)}
      />
      <br />
    </div>
  )
}

export default Demo
