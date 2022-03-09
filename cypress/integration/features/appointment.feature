Feature: Appointment

    Background: Webpage
        Given the website is available
    
    Scenario: Create an appointment with success
        And all required fields are filled
        When the ADD APPOINTMENT button
        Then the appointment details is displayed

    Scenario: Create an appointment with success and delete
        And all required fields are filled
        When the ADD APPOINTMENT button
        Then the appointment details is displayed
        When the DELETE button is clicked
        Then the appointment details is removed
