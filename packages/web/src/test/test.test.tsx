import React from 'react';
import '@testing-library/jest-dom';
import {render} from '@testing-library/react';
import App from '../App';

describe('Testando configuração de teste', () => {
	it('Verificando se o App é renderizado', () => {
		const {getByText} = render(<App/>);

		expect(getByText('Home Page')).toBeInTheDocument();
	});
});
