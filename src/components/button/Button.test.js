import React from 'react';
import { render } from '@testing-library/react';

import Button from './Button';

describe('<Button />', () => {
  test('should call createRestaurant', async () => {
    // arrange
    const { getByText } = render(
      <Button label="hi" />
    )

    // assert
    expect(getByText('hi')).toBeInTheDocument();
  });
});
