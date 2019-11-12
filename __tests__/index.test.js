/* eslint-env jest */

import React from 'react';
import { render } from '@testing-library/react';

import Home from '../pages/index.tsx';

describe('With React Testing Library', () => {
	it('Shows "Hello world!"', () => {
		const { getByText } = render(<Home />);

		expect(getByText('Welcome to Next!')).not.toBeNull();
	});
});

describe('With React Testing Library Snapshot', () => {
	it('Should match Snapshot', () => {
		const { asFragment } = render(<Home />);

		expect(asFragment()).toMatchSnapshot();
	});
});
