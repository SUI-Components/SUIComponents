/*
 * Remember: YOUR COMPONENT IS DEFINED GLOBALLY
 * */

/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

chai.use(chaiDOM)

describe('molecule/accordion', () => {
  const Component = MoleculeAccordion
  const setup = setupEnvironment(Component)

  it('should render without crashing', () => {
    // Given
    const props = {
      children: [
        <div key={0} label="label 1">
          element 1
        </div>,
        <div key={1} label="label 2">
          element 2
        </div>
      ],
      icon: <svg />
    }

    // When
    const component = <Component {...props} />

    // Then
    const div = document.createElement('div')
    ReactDOM.render(component, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should NOT render null', () => {
    // Given
    const props = {
      children: [
        <div key={0} label="label 1">
          element 1
        </div>,
        <div key={1} label="label 2">
          element 2
        </div>
      ],
      icon: <svg />
    }

    // When
    const {container} = setup(props)

    // Then
    expect(container.innerHTML).to.be.a('string')
    expect(container.innerHTML).to.not.have.lengthOf(0)
  })

  it.skip('example', () => {
    // Example TO BE DELETED!!!!

    // Given
    // const props = {}

    // When
    // const {getByRole} = setup(props)

    // Then
    // expect(getByRole('button')).to.have.text('HOLA')
    expect(true).to.be.eql(false)
  })
})
