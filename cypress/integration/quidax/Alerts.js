import LandingPage from '../pageObjects/LandingPage'
import BootstrapAlertsPage from '../pageObjects/BootstrapAlertsPage'
import BootstrapModalsPage from '../pageObjects/BootstrapModalsPage'


describe("Alerts and Modals", function () {
    const landingPage = new LandingPage
    const bootstrapAlertsPage = new BootstrapAlertsPage
    const bootstrapModalsPage = new BootstrapModalsPage

    it("Bootstrap Alert Messages: AM_001: Verify Autocloseable Success alert message pops up with text  ' I'm an autocloseable success message. I will hide in 5 seconds.' when clicked, and disappears automatically after 5 seconds ", function () {
        landingPage.home();
        landingPage.expandAlertsAndModal().click();
        landingPage.openBootstrapAlert().click();
        bootstrapAlertsPage.autocloseableSuccessMessageButton().click();
        bootstrapAlertsPage.autocloseableSuccessAlert().invoke("text").should("include", "I'm an autocloseable success  message. I will hide in 5 seconds.");
        cy.wait(5000);
        bootstrapAlertsPage.autoCloseableSuccessAlertGone().should('not.exist');

    })

    it("Bootstrap Alert Messages: AM_002: Verify auto closeable success alert button is disabled when alert is displayed", function () {
        landingPage.home();
        landingPage.expandAlertsAndModal().click();
        landingPage.openBootstrapAlert().click();
        bootstrapAlertsPage.autocloseableSuccessMessageButton().click();
        bootstrapAlertsPage.autocloseableSuccessAlert().invoke("text").should("include", "I'm an autocloseable success  message. I will hide in 5 seconds.");
        bootstrapAlertsPage.autocloseableSuccessMessageButton().should('have.attr', 'disabled');
    })

    it("Bootstrap Alert Messages: AM_003: Verify Normal success message pops up with text 'I'm a normal success message. To close use the appropriate button.' when clicked,", function () {
        landingPage.home();
        landingPage.expandAlertsAndModal().click();
        landingPage.openBootstrapAlert().click();
        bootstrapAlertsPage.normalSuccessMessageButton().click();
        bootstrapAlertsPage.normalSuccessAlert().invoke("text").should("include", "I'm a normal success message. To close use  the appropriate button.");
    })

    it("Bootstrap Alert Messages: AM_004: Verify Normal success message closes only when user clicks the close button", function () {
        landingPage.home();
        landingPage.expandAlertsAndModal().click();
        landingPage.openBootstrapAlert().click();
        bootstrapAlertsPage.normalSuccessMessageButton().click();
        bootstrapAlertsPage.normalSuccessAlert().invoke("text").should("include", "I'm a normal success message. To close use  the appropriate button.");
        bootstrapAlertsPage.normalSuccessAlertCloseButton().click();
        bootstrapAlertsPage.normalSuccessAlertGone().should("not.exist");
    })

    it("Bootstrap Alert Messages: AM_005: Verify success message alert is displayed in green colour", function () {
        landingPage.home();
        landingPage.expandAlertsAndModal().click();
        landingPage.openBootstrapAlert().click();
        bootstrapAlertsPage.normalSuccessMessageButton().click();
        bootstrapAlertsPage.normalSuccessAlert().should('have.css', 'color', 'rgb(60, 118, 61)');

    })

    it("Bootstrap Alert Messages: AM_006: Verify  Autocloseable warning alert message pops up with text 'I'm an autocloseable warning message. I will hide in 3 seconds.'", function () {
        landingPage.home();
        landingPage.expandAlertsAndModal().click();
        landingPage.openBootstrapAlert().click();
        bootstrapAlertsPage.autocloseableWarningMessageButton().click()
        bootstrapAlertsPage.autocloseableWarningAlert().invoke("text").should("include", "I'm an autocloseable warning message. I will hide in 3 seconds.");

    })

    it("Bootstrap Alert Messages: AM_007: Verify Normal warning alert message pops up with text  'I'm a normal warning message. To close use the appropriate button.' when clicked,", function () {
        landingPage.home();
        landingPage.expandAlertsAndModal().click();
        landingPage.openBootstrapAlert().click();
        bootstrapAlertsPage.normalWarningButton().click();
        bootstrapAlertsPage.normalWarningAlert().invoke("text").should("include", "I'm a normal warning message. To close use  the appropriate button");
    })

    it("Bootstrap Alert Messages: AM_008: Verify Normal warning message closes only when user clicks the close button", function () {

        landingPage.home();
        landingPage.expandAlertsAndModal().click();
        landingPage.openBootstrapAlert().click();
        bootstrapAlertsPage.normalWarningButton().click();
        bootstrapAlertsPage.normalWarningAlertCloseButton().click();
        bootstrapAlertsPage.normalWarningAlertGone().should("not.exist");
    })

    it("Bootstrap Alert Messages: AM_009: Verify warning message alert is displayed in yellow colour", function () {
        landingPage.home();
        landingPage.expandAlertsAndModal().click();
        landingPage.openBootstrapAlert().click();
        bootstrapAlertsPage.normalWarningButton().click();
        bootstrapAlertsPage.normalWarningAlert().should('have.css', 'color', 'rgb(138, 109, 59)');

    })

    it("Single Modal Example: AM_020: Verify the launch modal button is responsive, and displays the text 'This is the place where the content for the modal dialog displays'", function () {
        landingPage.home();
        landingPage.expandAlertsAndModal().click();
        landingPage.openBootstrapModal().click();
        bootstrapModalsPage.singleLaunchModalButton().click();
        bootstrapModalsPage.singleLaunchedModal().invoke("text").should("include", "This is the place where the content for the modal dialog displays");

    })

    it("Single Modal Example: AM_021: Verify the launched modal closes only when the save or close button is clicked", function () {

        landingPage.home();
        landingPage.expandAlertsAndModal().click();
        landingPage.openBootstrapModal().click();
        bootstrapModalsPage.singleLaunchModalButton().click();
        bootstrapModalsPage.singleLauchedModalCloseButton().click();
        bootstrapModalsPage.singleLaunchModalButton().click();
        bootstrapModalsPage.singleLauchedModalSaveButton().click();
        bootstrapModalsPage.bootstrapModalPageHeading().invoke("text").should("eq", "Bootstrap Modal Example for Automation");

    })

    it("Multiple Modal Example: AM_022: Verify the launch modal button is responsive, and the text in the first modal includes 'Click launch modal button to launch second modal.'", function () {
        landingPage.home();
        landingPage.expandAlertsAndModal().click();
        landingPage.openBootstrapModal().click();
        bootstrapModalsPage.multipleLaunchModalButton().click();
        bootstrapModalsPage.multipleLaunchedModal().invoke("text").should("include", "Click launch modal button to launch second modal.");

    })

    it("Multiple Modal Example: AM_023: Verify the first modal closes only when the save or close button is clicked", function () {
        landingPage.home();
        landingPage.expandAlertsAndModal().click();
        landingPage.openBootstrapModal().click();
        bootstrapModalsPage.multipleLaunchModalButton().click();
        bootstrapModalsPage.multipleLaunchedModalFirstModalCloseButton().click({ force: true });
        bootstrapModalsPage.multipleLaunchModalButton().click({ force: true });
        bootstrapModalsPage.multipleLaunchedModalFirstSaveButton().click({ force: true });
        bootstrapModalsPage.bootstrapModalPageHeading().invoke("text").should("include", "Bootstrap Modal Example for Automation");


    })

    it("Multiple Modal Example: AM_024:  Verify the second modal displays text 'Modal 2'", function () {
        landingPage.home();
        landingPage.expandAlertsAndModal().click();
        landingPage.openBootstrapModal().click();
        bootstrapModalsPage.multipleLaunchModalButton().click();
        bootstrapModalsPage.multipleLaunchedModalSecondLaunchButton().click();
        bootstrapModalsPage.multipleModalSecondCardTitle().invoke("text").should("eq", "Modal 2");

    })

    it("Multiple Modal Example: AM_025: Verify the second modal closes only when the save or close button is clicked", function () {
        landingPage.home();
        landingPage.expandAlertsAndModal().click();
        landingPage.openBootstrapModal().click();
        bootstrapModalsPage.multipleLaunchModalButton().click();
        bootstrapModalsPage.multipleLaunchedModalSecondLaunchButton().click();
        bootstrapModalsPage.multipleLaunchedModalSecondCardCloseButton().click();
        bootstrapModalsPage.multipleLaunchedModalSecondLaunchButton().click();
        bootstrapModalsPage.multipleLauchedModalSecondCardSaveButton().click();
        bootstrapModalsPage.bootstrapModalPageHeading().invoke("text").should("include", "Bootstrap Modal Example for Automation");

    })

})