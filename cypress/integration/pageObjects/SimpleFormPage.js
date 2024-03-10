class SimpleFormPage
{

    singleFormInputField()
    {
        return cy.get('.form-group > #user-message');
    }

    showMessageButton()
    {
        return cy.get('#get-input > .btn');
    }

    displayedMessage()
    {
        return cy.get('#display');
    }

    firstMultipleFormInputField()
    {
        return cy.get('#value1');
    }

    secondMultipleFormInputField()
    {
        return cy.get('#value2');
    }

    getTotalButton()
    {
        return cy.get('#gettotal > .btn');
    }

    totalValue()
    {
        return cy.get('#displayvalue');
    }




    










}
export default SimpleFormPage