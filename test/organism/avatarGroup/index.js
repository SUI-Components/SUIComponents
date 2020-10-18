/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */

import React from 'react'
import ReactDOM from 'react-dom'

import chai, {expect} from 'chai'
import chaiDOM from 'chai-dom'

chai.use(chaiDOM)

describe('OrganismAvatarGroup', () => {
  const Component = OrganismAvatarGroup
  const setup = setupEnvironment(Component)

  it('should render without crashing', () => {
    // Given
    const props = {}

    // When
    const component = <Component {...props} />

    // Then
    const div = document.createElement('div')
    ReactDOM.render(component, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should not render null', () => {
    // Given
    const props = {}

    // When
    const {container} = setup(props)

    // Then
    expect(container.innerHTML).to.be.a('string')
    expect(container.innerHTML).to.not.have.lengthOf(0)
  })

  it('should render avatars', () => {
    // Given
    const props = {
      children: [
        <OrganismAvatarGroup.Avatar key="1" />,
        <OrganismAvatarGroup.Avatar key="2" />
      ]
    }

    // When
    const {getByRole} = setup(props)

    // Then
    expect(getByRole('group').childNodes.length).to.be.eql(2)
  })

  it('should render a maximum number of avatars', () => {
    // Given
    const props = {
      max: 2,
      children: [
        <OrganismAvatarGroup.Avatar key="1" />,
        <OrganismAvatarGroup.Avatar key="2" />,
        <OrganismAvatarGroup.Avatar key="3" />,
        <OrganismAvatarGroup.Avatar key="4" />
      ]
    }

    // When
    const {getByRole, getByText} = setup(props)

    // Then
    expect(getByRole('group').childNodes.length).to.be.eql(3)
    expect(getByText('+2')).to.be.visible
  })
})
