import {useTimeout} from 'react-use'

const ColorDemoTimeout = ({children, timeout = 500}) => {
  const [isReady] = useTimeout(timeout)
  return isReady() ? children : null
}

export default ColorDemoTimeout
