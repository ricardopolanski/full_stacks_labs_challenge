import CreatAppointment from '../pageObjects/elements'
const createAp = new CreatAppointment

Given(/^the website is available$/, () => {
	cy.viewport(1400,900)
	cy.visit('/')
});

And(/^all required fields are filled$/, () => {
	cy.get(createAp.petName()).should('be.visible').and('not.be.disabled').type('Bali')
	cy.get(createAp.ownerName()).should('be.visible').and('not.be.disabled').type('Ricardo')
	cy.get(createAp.dateField()).should('be.visible').and('not.be.disabled').type('2022-02-12')
	cy.get(createAp.timeField()).should('be.visible').and('not.be.disabled').type('12:00')
	cy.get(createAp.symptomsField()).should('be.visible').and('not.be.disabled').type('Lazy')
});

When(/^the ADD APPOINTMENT button$/, () => {
	cy.get(createAp.addBtn()).should('be.visible').and('not.be.disabled').click()
});

Then(/^the appointment details is displayed$/, () => {
	cy.get(createAp.detailsBox()).should('be.visible').and('not.be.disabled')

	cy.get(createAp.pet()).should('be.visible').invoke('text').then((text) => {
		expect(text).to.be.equal('Bali')
	})
	
	cy.get(createAp.owner()).should('be.visible').invoke('text').then((text) => {
		expect(text).to.be.equal('Ricardo')
	})

	cy.get(createAp.date()).should('be.visible').invoke('text').then((text) => {
		expect(text).to.be.equal('2022-02-12')
	})

	cy.get(createAp.time()).should('be.visible').invoke('text').then((text) => {
		expect(text).to.be.equal('12:00')
	})

	cy.get(createAp.symptoms()).should('be.visible').invoke('text').then((text) => {
		expect(text).to.be.equal('Lazy')
	})

	cy.get(createAp.btnDelete()).should('be.visible').and('not.be.disabled')

});


When(/^the DELETE button is clicked$/, () => {
	cy.get(createAp.btnDelete()).should('be.visible').and('not.be.disabled').click()
});

Then(/^the appointment details is removed$/, () => {
	cy.get(createAp.detailsBox).should('not.exist')
});

