import LandingPage from '../pageObjects/LandingPage'
import SimpleFormPage from '../pageObjects/SimpleFormPage'
import DropdownListPage from '../pageObjects/DropdownListPage'


describe("Input Form", function () {

    const landingPage = new LandingPage
    const simpleFormPage = new SimpleFormPage
    const dropdownListPage = new DropdownListPage

    it("Single input field: IF_002: Verify input field is editable", function () {
        landingPage.home();
        landingPage.expandInputForm().click();
        landingPage.openSimpleFormDemo().click();
        simpleFormPage.singleFormInputField().should('not.have.attr', 'disabled');
    })

    it("Single input field: IF_003: Verify data displayed when the 'show message' button is clicked, matches data entered in the input field", function () {
        landingPage.home();
        landingPage.expandInputForm().click();
        landingPage.openSimpleFormDemo().click();
        simpleFormPage.singleFormInputField().type("Quidax");
        simpleFormPage.showMessageButton().click();
        simpleFormPage.displayedMessage().invoke("text").should("eq", "Quidax");
    })

    it("Multiple input field: IF_005: Verify system returns a clear message when user enters alphabets or special characters, and clicks the 'get Total' button", function () {
        landingPage.home();
        landingPage.expandInputForm().click();
        landingPage.openSimpleFormDemo().click();
        simpleFormPage.firstMultipleFormInputField().type("E");
        simpleFormPage.secondMultipleFormInputField().type("$");
        simpleFormPage.getTotalButton().click();
        simpleFormPage.totalValue().invoke("text").should("eq", "NaN");

    })

    it("Multiple input field: IF_007: Verify system returns accurate value when user enters negative values and clicks the 'Get Total' button", function () {
        landingPage.home();
        landingPage.expandInputForm().click();
        landingPage.openSimpleFormDemo().click();
        simpleFormPage.firstMultipleFormInputField().type("-5");
        simpleFormPage.secondMultipleFormInputField().type("-7");
        simpleFormPage.getTotalButton().click();
        simpleFormPage.totalValue().invoke("text").should("eq", "-12");
    })

    it("Select List Demo: IF_010: Verify the default option displayed is 'please select'", function () {
        landingPage.home();
        landingPage.expandInputForm().click();
        landingPage.openSelectDropdownList().click();
        dropdownListPage.defaultOption().should('have.text', 'Please select');
    })

    it("Select List Demo: IF_011: Verify user can only select one option from the dropdown", function () {
        landingPage.home();
        landingPage.expandInputForm().click();
        landingPage.openSelectDropdownList().click();
        dropdownListPage.clickDropdown().select("Monday");
        dropdownListPage.clickDropdown().select("Tuesday");
        dropdownListPage.displaySelectedDay().invoke("text").should("eq", "Day selected :- Tuesday");

    })

    it("Select List Demo: IF_012: Verify the selected option displays correctly", function () {
        landingPage.home();
        landingPage.expandInputForm().click();
        landingPage.openSelectDropdownList().click();
        dropdownListPage.clickDropdown().select("Wednesday");
        dropdownListPage.displaySelectedDay().invoke("text").should("eq", "Day selected :- Wednesday");

    })

    it("Multi Select List Demo: IF_013: Verify user can select an option from the multi-select list", function () {
        landingPage.home();
        landingPage.expandInputForm().click();
        landingPage.openSelectDropdownList().click();
        dropdownListPage.multiSelectOptions().select("Florida");
        dropdownListPage.optionFlorida().should('have.css', 'background-color', 'rgb(179, 215, 255)');

    })

    it("Multi Select List Demo: IF_015: Verify the first selected option is returned when a user selects an option and clicks the 'First Selected' button", function () {
        landingPage.home();
        landingPage.expandInputForm().click();
        landingPage.openSelectDropdownList().click();
        dropdownListPage.multiSelectOptions().select("Texas");
        dropdownListPage.firstSelectedButton().click();
        dropdownListPage.getAllSelectedOptions().invoke("text").should("eq", "First selected option is : Texas");
    })

    it("Multi Select List Demo: IF_017: Verify the selected option is returned when a user selects an option and clicks the 'Get All Selected' button", function () {
        landingPage.home();
        landingPage.expandInputForm().click();
        landingPage.openSelectDropdownList().click();
        dropdownListPage.multiSelectOptions().select("Texas");
        dropdownListPage.getAllSelectedButton().click();
        dropdownListPage.getAllSelectedOptions().invoke("text").should("eq", "Options selected are : Texas");

    })








})