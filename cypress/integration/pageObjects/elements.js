class CreatAppointment {

    petName = () => {
        return '[data-testid="pet"]'
    }
    ownerName = () => {
        return '[data-testid="owner"]'
    }
    dateField = () => {
        return '[data-testid="date"]'
    }
    timeField = () => {
        return '[data-testid="time"]'
    }
    symptomsField = () => {
        return '[data-testid="symptoms"]'
    }
    addBtn = () => {
        return '[data-testid="btn-submit"]'
    }

    detailsBox = () => {
        return '[data-testid="appointment"]'
    }

    pet = () => {
        return '[data-testid="appointment"] > :nth-child(1) > span'
    }
    owner = () => {
        return '[data-testid="appointment"] > :nth-child(2) > span'
    }
    date = () => {
        return '[data-testid="appointment"] > :nth-child(3) > span'
    }
    time = () => {
        return '[data-testid="appointment"] > :nth-child(4) > span'
    }
    symptoms = () => {
        return '[data-testid="appointment"] > :nth-child(5) > span'
    }
    btnDelete = () => {
        return '[data-testid="btn-delete"]'
    }
}

export default CreatAppointment