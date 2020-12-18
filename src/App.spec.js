import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import App from './App';

it('<App /> Load application for the first time', () => {
    render(<App />);

    expect( screen.getByText('Appointment Management') ).toBeInTheDocument();
    expect( screen.getByTestId('app-name').textContent ).toBe('Appointment Management');
    expect( screen.getByTestId('app-name').tagName ).toBe('H1');

    expect( screen.getByText('Create Appointment') ).toBeInTheDocument();
    expect( screen.getByText('There are no appointments') ).toBeInTheDocument();
});

it('<App /> fill the form and check if appointment is added', () => {
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

    expect( screen.getByTestId('dynamic-title').textContent ).toBe('Manage your appointments');
    expect( screen.getByTestId('dynamic-title').textContent ).not.toBe('There are no appointments');
});


it('<App /> check the added appointment', async () => {
    render(<App />);

    const appointments = await screen.findAllByTestId('appointment');

    expect(screen.getByTestId('btn-delete').tagName).toBe('BUTTON');
    expect(screen.getByTestId('btn-delete') ).toBeInTheDocument();

    expect(screen.getByText('Hook') ).toBeInTheDocument();
});

it('<App /> Delete the appointment', () => {
    render(<App />);

    const btnDelete = screen.getByTestId('btn-delete');
    expect(btnDelete.tagName).toBe('BUTTON');
    expect(btnDelete).toBeInTheDocument();
    expect( screen.getByTestId('dynamic-title').textContent ).toBe('Manage your appointments');
    
    userEvent.click(btnDelete);
    
    expect(btnDelete).not.toBeInTheDocument();

    expect(screen.queryByText('Hook') ).not.toBeInTheDocument();    
    expect(screen.queryByTestId('appointment') ).not.toBeInTheDocument();
    expect(screen.getByTestId('dynamic-title').textContent ).toBe('There are no appointments');
});
