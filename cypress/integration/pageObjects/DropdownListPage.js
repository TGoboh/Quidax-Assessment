class DropdownListPage
{
    defaultOption ()
    {
        return cy.get('#select-demo option[selected]');
    }

    clickDropdown ()
    {
        return  cy.get('#select-demo');
    }

    displaySelectedDay ()
    {
        return cy.get('.selected-value');
    }

    multiSelectOptions ()
    {
        return cy.get('#multi-select');
    }

    optionFlorida ()
    {
        return cy.get('[value="Florida');
    }

    firstSelectedButton()
    {
        return cy.get('#printMe');
    }

    getAllSelectedOptions ()
    {
        return cy.get('.getall-selected');
    }

    getAllSelectedButton ()
    {
        return cy.get('#printAll');
    }









    

    



    










}
export default DropdownListPage