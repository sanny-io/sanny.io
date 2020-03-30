import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Link from './Link';

describe('NavBar Link', () => {
  it('calls its onClick prop when clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Link onClick={onClick}>Link</Link>);

    fireEvent.click(getByText('Link'));
    expect(onClick).toHaveBeenCalled();
  })
});