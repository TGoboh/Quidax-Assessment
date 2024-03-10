class LandingPage
{

    home ()
    {
        cy.visit("https://demo.seleniumeasy.com");
    }

    expandInputForm ()
    {
       return cy.get(':nth-child(3) > :nth-child(1) > [href="#"]');
    }

    openSimpleFormDemo ()
    {
        return cy.get(':nth-child(3) > :nth-child(1) > ul > :nth-child(1) > a');
    }

    openSelectDropdownList ()
    {
        return cy.get(':nth-child(3) > :nth-child(1) > ul > :nth-child(4) > a');
    }

    expandAlertsAndModal ()
    {
        return cy.get('#treemenu > :nth-child(1) > :nth-child(3) > :nth-child(5)');
    }

    openBootstrapAlert ()
    {
        return cy.get(':nth-child(5) > ul > :nth-child(1) > a');
    }

    openBootstrapModal ()
    {
        return cy.get(':nth-child(5) > ul > :nth-child(2) > a');
    }




    

    
    










}
export default LandingPage