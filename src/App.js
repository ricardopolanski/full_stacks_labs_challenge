import React, { useState, useEffect } from 'react';
import Form from './components/Form'
import Appoinment from './components/Appoinment'

function App() {
    //Appoinments in localStorage
    let initialAppoinments = JSON.parse(localStorage.getItem('appoinments'));
    if (!initialAppoinments) {
        initialAppoinments = [];
    }

    //Arreglo de Appoinments
    const [appoinments, saveAppoinments] = useState(initialAppoinments);

    //se usa cundo cambia el state
    useEffect(() => {
        if (initialAppoinments) {
            localStorage.setItem('appoinments', JSON.stringify(appoinments));
        } else {
            localStorage.setItem('appoinments', JSON.stringify([]));
        }
    }, [appoinments, initialAppoinments]);



    //Add appoinment
    const createAppoinment = appoinment => {
        saveAppoinments([...appoinments, appoinment]);
    }

    //Delete appoinment
    const deleteAppoinment = id => {
        const newAppoinments = appoinments.filter(appoinment => appoinment.id !== id);
        saveAppoinments(newAppoinments);
    }

    //Mensaje condicional
    const titulo = appoinments.length === 0 ? 'There are no appoinments' : 'Manage your appoinments'


    return (
        <>
            <h1 data-testid="app-name">Apponiment Management</h1>
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Form
                            createAppoinment={createAppoinment}
                        />
                    </div>
                    <div className="one-half column">
                        <h2 data-testid="titulo-dinamico">{titulo}</h2>
                        {appoinments.map(appoinment => (
                            <Appoinment
                                key={appoinment.id}
                                appoinment={appoinment}
                                deleteAppoinment={deleteAppoinment}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;
