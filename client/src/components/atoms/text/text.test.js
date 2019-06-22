import React from 'react';
import { Text } from './text';
import { renderWithTheme } from '../../../../config/testHelper';

describe('<Text/>', () => {
  it('Should render a Text element with default props', () => {
    const component = renderWithTheme(<Text>Text Paragraph</Text>).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('Should render a Text element with given props', () => {
    const props = {
      color: 'hotpink',
      weight: 'bolder',
    };
    const component = renderWithTheme(<Text {...props}>Text Paragraph</Text>).toJSON();
    expect(component).toMatchSnapshot();
  });
});
