import React from 'react';
import { render, screen } from '@testing-library/react';
import CountryDetails from './CountryDetails';
import "core-js/stable";
import "regenerator-runtime/runtime";

describe('countryDetails', () => {
    test('renders App component', async () => {
        render(<CountryDetails />);
        expect(await screen.findByText('Dessert')).toBeInTheDocument();
    });
})

