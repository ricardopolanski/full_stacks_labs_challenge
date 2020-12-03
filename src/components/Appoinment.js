import React from 'react';
import PropTypes from 'prop-types'

const Appoinment = ({ appoinment, deleteAppoinment }) => (
    <div data-testid="appoinment" className="appoinment">
        <p>Pet: <span>{appoinment.pet}</span></p>
        <p>Owner: <span>{appoinment.owner}</span></p>
        <p>Date: <span>{appoinment.date}</span></p>
        <p>Time: <span>{appoinment.time}</span></p>
        <p>Symptoms: <span>{appoinment.symptoms}</span></p>

        <button
            className="button delete u-full-width"
            onClick={() => deleteAppoinment(appoinment.id)}
            data-testid="btn-delete"
        >
            Delete
        </button>
    </div>
);

Appoinment.propTypes = {
    appoinment: PropTypes.object.isRequired,
    deleteAppoinment: PropTypes.func.isRequired
}
export default Appoinment;