import React, { useState } from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types'

const Form = ({ createAppoinment }) => {
	//Create State de Appoinments
	const [appoinment, updateAppoinment] = useState({
		pet: '',
		owner: '',
		date: '',
		time: '',
		symptoms: ''
	});

	const updateState = (event) => {
		updateAppoinment({
			...appoinment,
			[event.target.name]: event.target.value
		});
	};

	const [error, updateError] = useState(false)

	const submitAppoinment = (event) => {
		event.preventDefault();

		//Validate
		if (appoinment.pet.trim() === '' || appoinment.owner.trim() === '' || appoinment.date.trim() === '' || appoinment.time.trim() === '' || appoinment.symptoms.trim() === '') {
			updateError(true);
			return;
		}

		//Delete error
		updateError(false);

		//Assign Id
		appoinment.id = uuid();

		//Create Appoinment
		createAppoinment(appoinment);

		//restart form
		updateAppoinment({
			pet: '',
			owner: '',
			date: '',
			time: '',
			symptoms: ''
		})
	};

	return (
		<>
			<h2 data-testid="Title">Create Appoinment</h2>

			{error ? <p data-testid="alert" className="alert-error">All fields are required</p> : null}

			<form onSubmit={submitAppoinment}>
				<label>Pet Name</label>
				<input
					data-testid="pet"
					type="text"
					name="pet"
					className="u-full-width"
					placeholder="Pet Name"
					onChange={updateState}
					value={appoinment.pet}
				/>

				<label>Owner Name</label>
				<input
					data-testid="owner"
					type="text"
					name="owner"
					className="u-full-width"
					placeholder="Owner Name de la Pet"
					onChange={updateState}
					value={appoinment.owner}
				/>

				<label>Date</label>
				<input
					data-testid="date"
					type="date"
					name="date"
					className="u-full-width"
					onChange={updateState}
					value={appoinment.date}
				/>

				<label>Time</label>
				<input data-testid="time" type="time" name="time" className="u-full-width" onChange={updateState} value={appoinment.time} />

				<label>Symptoms</label>
				<textarea data-testid="symptoms" className="u-full-width" name="symptoms" onChange={updateState} value={appoinment.symptoms} />

				<button data-testid="btn-submit" type="submit" className="u-full-witdth button-primary">
					Add Appoinment
				</button>
			</form>
		</>
	);
}

Form.propTypes = {
	createAppoinment: PropTypes.func.isRequired
}

export default Form;
