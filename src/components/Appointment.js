import React from 'react';
import PropTypes from 'prop-types'

const Appointment = ({ appointment, deleteAppointment }) => (
    <div data-testid="appointment" className="appointment">
        <p>Pet: <span>{appointment.pet}</span></p>
        <p>Owner: <span>{appointment.owner}</span></p>
        <p>Date: <span>{appointment.date}</span></p>
        <p>Time: <span>{appointment.time}</span></p>
        <p>Symptoms: <span>{appointment.symptoms}</span></p>

        <button
            className="button delete u-full-width"
            onClick={() => deleteAppointment(appointment.id)}
            data-testid="btn-delete"
        >
            Delete
        </button>
    </div>
);

Appointment.propTypes = {
    appointment: PropTypes.object.isRequired,
    deleteAppointment: PropTypes.func.isRequired
}
export default Appointment;