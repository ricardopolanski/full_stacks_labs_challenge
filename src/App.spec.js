import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import App from './App';

it('<App /> Load application for the first time', () => {
    render(<App />);

    expect( screen.getByText('Apponiment Management') ).toBeInTheDocument();
    expect( screen.getByTestId('app-name').textContent ).toBe('Apponiment Management');
    expect( screen.getByTestId('app-name').tagName ).toBe('H1');

    expect( screen.getByText('Create Appoinment') ).toBeInTheDocument();
    expect( screen.getByText('There are no appoinments') ).toBeInTheDocument();
});

it('<App /> fill the form and check if appoinment is added', () => {
    render(<App />);

    userEvent.type(screen.getByTestId('pet'), 'Hook');
    userEvent.type(screen.getByTestId('owner'), 'John');
    userEvent.type(screen.getByTestId('date'), '2021-09-10');
    userEvent.type(screen.getByTestId('time'), '10:30');
    userEvent.type(screen.getByTestId('symptoms'), 'Solo Duerme');
    
    const btnSubmit = screen.getByTestId('btn-submit');
    userEvent.click(btnSubmit);

    const alert = screen.queryByTestId('alert');
    expect( alert ).not.toBeInTheDocument();

    expect( screen.getByTestId('titulo-dinamico').textContent ).toBe('Manage your appoinments');
    expect( screen.getByTestId('titulo-dinamico').textContent ).not.toBe('There are no appoinments');
});


it('<App /> check the added appoinment', async () => {
    render(<App />);

    const appoinments = await screen.findAllByTestId('appoinment');

    expect(screen.getByTestId('btn-delete').tagName).toBe('BUTTON');
    expect(screen.getByTestId('btn-delete') ).toBeInTheDocument();

    expect(screen.getByText('Hook') ).toBeInTheDocument();
});

it('<App /> Delete the appoinment', () => {
    render(<App />);

    const btnDelete = screen.getByTestId('btn-delete');
    expect(btnDelete.tagName).toBe('BUTTON');
    expect(btnDelete).toBeInTheDocument();
    expect( screen.getByTestId('titulo-dinamico').textContent ).toBe('Manage your appoinments');
    
    userEvent.click(btnDelete);
    
    expect(btnDelete).not.toBeInTheDocument();

    expect(screen.queryByText('Hook') ).not.toBeInTheDocument();    
    expect(screen.queryByTestId('appoinment') ).not.toBeInTheDocument();    
    expect(screen.getByTestId('titulo-dinamico').textContent ).toBe('There are no appoinments');
});
