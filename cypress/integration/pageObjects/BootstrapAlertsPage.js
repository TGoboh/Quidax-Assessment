class BootstrapAlertsPage
{
    autocloseableSuccessMessageButton ()
    {
        return cy.get('#autoclosable-btn-success');
    }

    autocloseableSuccessAlert ()
    {
      return  cy.get('.alert-autocloseable-success');
    }

    autoCloseableSuccessAlertGone ()
    {
        return cy.contains("include", "I'm an autocloseable success  message. I will hide in 5 seconds.");
    }

    normalSuccessMessageButton ()
    {
        return cy.get('#normal-btn-success');
    }

    normalSuccessAlert ()
    {
        return cy.get('.alert-normal-success');
    }

    normalSuccessAlertCloseButton ()
    {
        return cy.get('.alert-normal-success > .close');
    }

    normalSuccessAlertGone ()
    {
        return cy.contains("I'm a normal success message. To close use  the appropriate button.");
    }

    autocloseableWarningMessageButton ()
    {
       return cy.get('#autoclosable-btn-warning');
    }

    autocloseableWarningAlert ()
    {
        return cy.get('.alert-autocloseable-warning');
    }

    normalWarningButton ()
    {
        return cy.get('#normal-btn-warning');
    }

    normalWarningAlert ()
    {
        return cy.get('.alert-normal-warning');
    }

    normalWarningAlertCloseButton ()
    {
        return cy.get('.alert-normal-warning > .close');
    }

    normalWarningAlertGone ()
    {
        return cy.contains("I'm a normal warning message. To close use  the appropriate button");
    }
    


}

export default BootstrapAlertsPage
