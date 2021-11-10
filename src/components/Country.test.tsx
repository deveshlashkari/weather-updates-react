import React from 'react';
import { render, screen } from '@testing-library/react';
import Country from './Country';

describe('country', () => {
    test('submit button is shown', ()=> {
        const { getByText } = render(<Country />);
        const button = getByText("Submit");
        expect(button).toBeTruthy()
    });
})