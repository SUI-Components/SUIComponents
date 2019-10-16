import React from 'react'

import AtomImage from '../../../../components/atom/image/src'
import AtomSpinner from '@s-ui/react-atom-spinner'

import './index.scss'

const ImageNotFoundIcon = () => {
  return (
    <svg width="40" height="40">
      <path d="M6.458 33.333c-1.72 0-3.125-1.382-3.125-3.077v-16.41c0-1.694 1.404-3.077 3.125-3.077h5.209l-.88.477 2.357-3.661a2.073 2.073 0 0 1 1.752-.918h9.791c.636 0 1.245.3 1.667.82l2.813 3.692-.834-.41h5.209c1.72 0 3.125 1.383 3.125 3.077v16.41c0 1.695-1.404 3.077-3.125 3.077H6.458zm0-2.05h27.084a1.04 1.04 0 0 0 1.041-1.027v-16.41a1.04 1.04 0 0 0-1.041-1.025h-5.209c-.328 0-.636-.152-.833-.41l-2.793-3.668c-.014-.017-.03-.025-.02-.025h-9.791c-.027 0-.01-.009-.006-.015l-2.344 3.64a1.046 1.046 0 0 1-.88.478H6.459a1.04 1.04 0 0 0-1.041 1.025v16.41a1.04 1.04 0 0 0 1.041 1.026zM20 29.23c-4.602 0-8.333-3.674-8.333-8.205 0-4.532 3.73-8.205 8.333-8.205 4.602 0 8.333 3.673 8.333 8.205 0 4.531-3.73 8.205-8.333 8.205zm0-2.052c3.452 0 6.25-2.755 6.25-6.153 0-3.399-2.798-6.154-6.25-6.154s-6.25 2.755-6.25 6.154c0 3.398 2.798 6.153 6.25 6.153zm-3.939-4.812a4.049 4.049 0 0 1 .751-3.984L3.66 5.23A1.111 1.111 0 0 1 5.23 3.66L18.7 17.127c.409-.132.847-.204 1.301-.204.454 0 .892.072 1.301.204L34.77 3.66A1.111 1.111 0 1 1 36.34 5.23L23.188 18.384a4.049 4.049 0 0 1 .75 3.983L36.342 34.77a1.111 1.111 0 0 1-1.571 1.571L22.634 24.205a4.19 4.19 0 0 1-2.634.923 4.19 4.19 0 0 1-2.634-.923L5.23 36.34A1.111 1.111 0 0 1 3.66 34.77L16.06 22.367zm14.356-5.444c-.576 0-1.042-.46-1.042-1.026 0-.566.466-1.025 1.042-1.025h1.041c.576 0 1.042.459 1.042 1.025 0 .567-.466 1.026-1.042 1.026h-1.041z" />
    </svg>
  )
}

const IMAGES = {
  FINAL: 'https://picsum.photos/4000?image=980',
  PLACEHOLDER: 'https://picsum.photos/50?image=980',
  SKELETON:
    'https://cdn1.iconfinder.com/data/icons/online-wireframes/32/Wireframe_Photo_Album_Picture-256.png',
  BAD: 'https://pic__sum.pho__tos/50?image=980'
}

const defaultErrorText = 'Image not found'

const BASE_CLASS_DEMO = `DemoAtomImage`
const CLASS_DEMO_LIST = `${BASE_CLASS_DEMO}-list`
const CLASS_DEMO_CONTAINER_IMAGES = `${BASE_CLASS_DEMO}-containerImage`
const CLASS_DEMO_LIST_ITEM = `${BASE_CLASS_DEMO}-listItem`

const Demo = () => {
  return (
    <div className={BASE_CLASS_DEMO}>
      <h1>AtomImage</h1>
      <ul className={CLASS_DEMO_LIST}>
        <li className={CLASS_DEMO_LIST_ITEM}>
          <div className={CLASS_DEMO_CONTAINER_IMAGES}>
            <AtomImage src={IMAGES.FINAL} alt="Nice View" />
          </div>
          <small style={{margin: '10px'}}>
            Most simple Image with only required props
          </small>
        </li>

        <li className={CLASS_DEMO_LIST_ITEM}>
          <div className={CLASS_DEMO_CONTAINER_IMAGES}>
            <AtomImage
              src={IMAGES.FINAL}
              skeleton={IMAGES.SKELETON}
              alt="Nice View"
            />
          </div>
          <small style={{margin: '10px'}}>
            Image with Skeleton while loading final image
          </small>
        </li>

        <li className={CLASS_DEMO_LIST_ITEM}>
          <div className={CLASS_DEMO_CONTAINER_IMAGES}>
            <AtomImage
              src={IMAGES.BAD}
              spinner={<AtomSpinner />}
              placeholder={IMAGES.PLACEHOLDER}
              errorIcon={<ImageNotFoundIcon />}
              errorText={defaultErrorText}
              alt="Nice View"
            />
          </div>
          <small style={{margin: '10px'}}>
            Image with bad Image src and Error Box
          </small>
        </li>

        <li className={CLASS_DEMO_LIST_ITEM}>
          <div className={CLASS_DEMO_CONTAINER_IMAGES}>
            <AtomImage
              src={IMAGES.FINAL}
              spinner={<AtomSpinner />}
              placeholder={IMAGES.PLACEHOLDER}
              alt="Nice View"
            />
          </div>
          <small style={{margin: '10px'}}>
            Image with placeholder and spinner while loading final image
          </small>
        </li>

        <li className={CLASS_DEMO_LIST_ITEM}>
          <div className={CLASS_DEMO_CONTAINER_IMAGES}>
            <AtomImage
              src={IMAGES.FINAL}
              alt="Nice View"
              spinner={<AtomSpinner />}
            />
          </div>
          <small style={{margin: '10px'}}>
            Image with spinner (only) while loading final image
          </small>
        </li>

        <li className={CLASS_DEMO_LIST_ITEM}>
          <div className={CLASS_DEMO_CONTAINER_IMAGES}>
            <AtomImage
              src={IMAGES.FINAL}
              placeholder={IMAGES.PLACEHOLDER}
              alt="Nice View"
            />
          </div>
          <small style={{margin: '10px'}}>
            Image with placeholder (only) while loading final image
          </small>
        </li>
      </ul>
      <blockquote>
        <p>
          Note: If images load too fast and you cannot appreciate the different
          behaviours that can be set while images are loading, i recommend you
          to simulate in your browser low-bandwidth conditions.
        </p>
        <p>
          <a
            href="https://ma.ttias.be/simulate-low-bandwidth-conditions-with-chromes-network-throttling/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Here
          </a>{' '}
          you have an explanation of how to do this in Chrome.
        </p>
      </blockquote>
    </div>
  )
}

export default Demo
