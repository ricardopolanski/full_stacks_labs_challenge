import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Form from './Form';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

const createAppointment = jest.fn();

it('<Form /> Load form and check the fields', () => {
    render(
        <Form 
            createAppointment={createAppointment}
        />
    );
    expect( screen.getByText('Create Appointment') ).toBeInTheDocument();

    //Heading
    const titulo = screen.getByTestId('Title');
    expect( titulo.tagName ).toBe('H2');
    expect( titulo.tagName ).not.toBe('H1');
    expect( titulo.textContent ).toBe('Create Appointment');

    //Boton Submit
    expect( screen.getByTestId('btn-submit').tagName ).toBe('BUTTON');
    expect( screen.getByTestId('btn-submit').textContent ).toBe('Add Appointment');
    expect( screen.getByTestId('btn-submit').textContent ).not.toBe('Add Nueva Appointment');
});

it('<Form /> Validate form on submit', () => {
    render(
        <Form 
            createAppointment={createAppointment}
        />
    );

    const btnSubmit = screen.getByTestId('btn-submit');
    fireEvent.click(btnSubmit);

    const alert = screen.getByTestId('alert');

    expect( alert ).toBeInTheDocument();
    expect( alert.textContent ).toBe('All fields are required');
    expect( alert.tagName ).toBe('P');
    expect( alert.tagName ).not.toBe('BUTTON');
});

it('<Form /> Fill form and check submit', () => {
    render(
        <Form 
            createAppointment={createAppointment}
        />
    );

    userEvent.type(screen.getByTestId('pet'), 'Hook');
    userEvent.type(screen.getByTestId('owner'), 'John');
    userEvent.type(screen.getByTestId('date'), '2021-09-10');
    userEvent.type(screen.getByTestId('time'), '10:30');
    userEvent.type(screen.getByTestId('symptoms'), 'Solo Duerme');
    
    const btnSubmit = screen.getByTestId('btn-submit');
    fireEvent.click(btnSubmit);

    const alert = screen.queryByTestId('alert');
    expect( alert ).not.toBeInTheDocument();

    expect( createAppointment ).toHaveBeenCalledTimes(1);
});