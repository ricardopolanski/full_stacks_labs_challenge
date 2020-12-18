import React, { useState } from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types'

const Form = ({ createAppointment }) => {
	//Create State de Appointments
	const [appointment, updateAppointment] = useState({
		pet: '',
		owner: '',
		date: '',
		time: '',
		symptoms: ''
	});

	const updateState = (event) => {
		updateAppointment({
			...appointment,
			[event.target.name]: event.target.value
		});
	};

	const [error, updateError] = useState(false)

	const submitAppointment = (event) => {
		event.preventDefault();

		//Validate
		if (appointment.pet.trim() === '' || appointment.owner.trim() === '' || appointment.date.trim() === '' || appointment.time.trim() === '' || appointment.symptoms.trim() === '') {
			updateError(true);
			return;
		}

		//Delete error
		updateError(false);

		//Assign Id
		appointment.id = uuid();

		//Create Appointment
		createAppointment(appointment);

		//Restart form
		updateAppointment({
			pet: '',
			owner: '',
			date: '',
			time: '',
			symptoms: ''
		})
	};

	return (
		<>
			<h2 data-testid="Title">Create Appointment</h2>

			{error ? <p data-testid="alert" className="alert-error">All fields are required</p> : null}

			<form onSubmit={submitAppointment}>
				<label>Pet Name</label>
				<input
					data-testid="pet"
					type="text"
					name="pet"
					className="u-full-width"
					placeholder="Pet Name"
					onChange={updateState}
					value={appointment.pet}
				/>

				<label>Owner Name</label>
				<input
					data-testid="owner"
					type="text"
					name="owner"
					className="u-full-width"
					placeholder="Owner Name"
					onChange={updateState}
					value={appointment.owner}
				/>

				<label>Date</label>
				<input
					data-testid="date"
					type="date"
					name="date"
					className="u-full-width"
					onChange={updateState}
					value={appointment.date}
				/>

				<label>Time</label>
				<input data-testid="time" type="time" name="time" className="u-full-width" onChange={updateState} value={appointment.time} />

				<label>Symptoms</label>
				<textarea data-testid="symptoms" className="u-full-width" name="symptoms" onChange={updateState} value={appointment.symptoms} />

				<button data-testid="btn-submit" type="submit" className="u-full-witdth button-primary">
					Add Appointment
				</button>
			</form>
		</>
	);
}

Form.propTypes = {
	createAppointment: PropTypes.func.isRequired
}

export default Form;
