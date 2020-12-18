import React, { useState, useEffect } from 'react';
import Form from './components/Form'
import Appointment from './components/Appointment'

function App() {
    //Appointments in localStorage
    let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
    if (!initialAppointments) {
        initialAppointments = [];
    }

    //Appoinments Array
    const [appointments, saveAppointments] = useState(initialAppointments);

    //Used when the state changes
    useEffect(() => {
        if (initialAppointments) {
            localStorage.setItem('appointments', JSON.stringify(appointments));
        } else {
            localStorage.setItem('appointments', JSON.stringify([]));
        }
    }, [appointments, initialAppointments]);



    // Add appointment
    const createAppointment = appointment => {
        saveAppointments([...appointments, appointment]);
    }

    // Delete appointment
    const deleteAppointment = id => {
        const newAppointments = appointments.filter(appointment => appointment.id !== id);
        saveAppointments(newAppointments);
    }

    // Conditional Message
    const titulo = appointments.length === 0 ? 'There are no appointments' : 'Manage your appointments'


    return (
        <>
            <h1 data-testid="app-name">Appointment Management</h1>
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Form
                            createAppointment={createAppointment}
                        />
                    </div>
                    <div className="one-half column">
                        <h2 data-testid="dynamic-title">{titulo}</h2>
                        {appointments.map(appointment => (
                            <Appointment
                                key={appointment.id}
                                appointment={appointment}
                                deleteAppointment={deleteAppointment}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;
