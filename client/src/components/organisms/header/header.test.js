import React from 'react'
import { renderWithTheme } from '../../../config/testHelper'
import StyledHeader from './styles'

describe('<StyledHeader/>', () => {
  it('Should render a StyledHeader element with default props', () => {
    const component = renderWithTheme(
      <StyledHeader>
        <span role="img" aria-label="bunny emoji">
          🐰
        </span>
      </StyledHeader>,
    ).toJSON()
    expect(component).toMatchSnapshot()
  })
})
