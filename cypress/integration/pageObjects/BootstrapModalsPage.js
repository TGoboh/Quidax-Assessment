class BootstrapModalsPage
{
    singleLaunchModalButton ()
    {
       return cy.get(':nth-child(2) > .col-md-4 > .panel > .panel-body > [data-toggle="modal"]');
    }

    singleLaunchedModal ()
    {
        return cy.get('#myModal0 > .modal-dialog > .modal-content > .modal-body');
    }

    singleLauchedModalCloseButton ()
    {
        return cy.get('#myModal0 > .modal-dialog > .modal-content > .modal-footer > [data-dismiss="modal"]');
    }

    singleLauchedModalSaveButton ()
    {
        return cy.get('#myModal0 > .modal-dialog > .modal-content > .modal-footer > .btn-primary');
    }

    bootstrapModalPageHeading ()
    {
        return cy.get('h2');
    }

    multipleLaunchModalButton ()
    {
        return cy.get('[href="#myModal"]')
    }

    multipleLaunchedModal ()
    {
        return cy.get('.modal-body > :nth-child(3)');
    }

    multipleLaunchedModalFirstModalCloseButton ()
    {
        return cy.contains("Close");
    }

    multipleLaunchedModalFirstSaveButton ()
    {
        return cy.contains("Save changes");
    }

    multipleLaunchedModalSecondLaunchButton()
   {
        return cy.get('.modal-body > .btn');
   }

   multipleModalSecondCardTitle ()
   {
    return cy.get('#myModal2 > .modal-dialog > .modal-content > .modal-header > .modal-title');
   }

   multipleLaunchedModalSecondCardCloseButton ()
   {
     return cy.get('#myModal2 > .modal-dialog > .modal-content > .modal-footer > [data-dismiss="modal"]');
   }

   multipleLauchedModalSecondCardSaveButton ()
   {
      return cy.get('#myModal2 > .modal-dialog > .modal-content > .modal-footer > .btn-primary');
   }

}

export default BootstrapModalsPage