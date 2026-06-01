// Test connection from project to web page
// console.log("script connected");

// function submitIncidentReport(event) {
//     console.log("SUBMIT FUNCTION STARTED");
//     event.preventDefault();
// }

// Cache at least one element using selectElementById. 5%. - IDs ("incident-form", "description", "char-counter", "incident-count",  "log-feed" )

const incidentForm = document.getElementById("incident-form");

const descriptionField = document.getElementById("description");

const characterCounter = document.getElementById("char-counter");

const incidentCount = document.getElementById("incident-count");

const logFeed = document.getElementById("log-feed");


// Cache at least one element using querySelector or querySelectorAll. 5% - class (".form-panel", ".log-panel", ".filter-btn", ".severity-badge")

const formPanel = document.querySelector(".form-panel");

const logPanel = document.querySelector(".log-panel");

const filterButtons = document.querySelectorAll(".filter-btn");

const severityBadges = document.querySelectorAll(".severity-badge");

// Tested everyone of the above varialbles
// console.log(severityBadges);

// event listener for the Incident Description field
// descriptionField.addEventListener("input", cCharacterCounter);

// Reporter Name field
const employeeNameField = document.getElementById("employee-name");

// console.log(employeeNameField);

// Error message for if the name field is empty or if there are less than two charaters
const employeeNameError = document.getElementById("error-employee-name");

// Employee ID field
const employeeIdField = document.getElementById("employee-id");

// console.log(employeeIdField);

// Error for the ID field if doe not follow the setup paratmeters format - Format: EMP-1234
const employeeIdError = document.getElementById("error-employee-id");

// Error for the description of Incident Description field if there are less than 20 characters or empty
const descriptionError = document.getElementById("error-description");

// Create incident cards

const incidentCardTemplate = document.getElementById("incident-card-template");

// Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.). 5%
const emptyState = document.getElementById("empty-state");

const logFeed = document.getElementById("log-feed");

let successMessageElement = null;
// Iterate over a collection of elements to accomplish some task. 10%

// create an array to store incident reports
const incidentReports = [];

// Register at least two different event listeners and create the associated event handler functions. 10%

// event listener for the Incident Description field
descriptionField.addEventListener("input", incidentCharacterCounter);

// event listener for the employee name
employeeNameField.addEventListener(
    "input", validateEmployeeName
);

// event listener for the employee ID field
employeeIdField.addEventListener(
    "input", validateEmployeeId
);

// event listener for the form submission
incidentForm.addEventListener(
    "submit",
    submitIncidentReport
);

// Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.) 5%
// Function that validates the characters in the incident field

function incidentCharacterCounter() {

    // store the information from the Incident Description field
    const currentText = descriptionField.value;

    // Count how many characters exist
    const currentLength = currentText.length;

    // Update the counter display
    characterCounter.textContent = `${currentLength} / 20 min`;

    // Check if minimum requirement has been met
    if (currentLength >= 20) {
        // Add the CSS class
        characterCounter.classList.add("met");
    } else {
        // Remove the CSS class
        characterCounter.classList.remove("met");
    }

    // Tested everyone of the above varialbles
    // console.log(currentLength);

}

// Function that validates the employee name

function validateEmployeeName() {

    // Remove empty spaces
    const employeeName = employeeNameField.value.trim();

    // condition verify if the employee name field is empty
    if (employeeName === "") {
        employeeNameError.textContent = "Employee name is required.";
    }

    // Check if the employee name field has more than two characters
    else if (employeeName.length < 2) {
        employeeNameError.textContent = "Employee name must be at least 2 characters.";
    }

    // Passed validation
    else {
        employeeNameError.textContent = "";
    }

    // Tested everyone of the above varialbles
    // console.log(employeeName);
}

// Function that validates the employee ID and format

function validateEmployeeId() {

    // This method will remove the whitespaces
    const employeeId = employeeIdField.value.trim();

    // Must start with EMP- following by 4 digits
    const employeeIdPattern = /^EMP-\d{4}$/;

    if (employeeId === "") {
        employeeIdError.textContent = "Employee ID is required.";
    }

    else if (!employeeIdPattern.test(employeeId)) {
        // Must start with EMP- following by 4 digits
        employeeIdError.textContent = "Use format EMP-1234.";
    }

    else {
        employeeIdError.textContent = "";
    }

    // Tested everyone of the above varialbles
    // console.log(employeeId);
}

// Function that validates the Incident Description fiel to verify if it is empty or has less than 20 characters

function validateDescription() {

    // This method will remove the whitespaces
    const descriptionText = descriptionField.value.trim();

    // Check if empty
    if (descriptionText === "") {
        descriptionError.textContent = "Incident description is required.";
    }

    // Check minimum length
    else if (descriptionText.length < 20) {
        descriptionError.textContent = "Description must contain at least 20 characters.";
    }

    // Passed validation
    else {
        descriptionError.textContent = "";
    }

    // Tested everyone of the above varialbles
    // console.log(descriptionText);

}

// Function that validates the form being submitted
function submitIncidentReport(event) {

    // This is to avoid a refresh after the form is submitted
    event.preventDefault();

    // Run validation functions for EmployeeName, EmployeeId, and Description fields
    validateEmployeeName();

    validateEmployeeId();

    validateDescription();

    // Check if any error messages exist
    const formHasErrors = employeeNameError.textContent !== "" || employeeIdError.textContent !== "" || descriptionError.textContent !== "";

    // console.log("Name Error:", employeeNameError.textContent);
    // console.log("ID Error:", employeeIdError.textContent);
    // console.log("Description Error:", descriptionError.textContent);

    // const formHasErrors = employeeNameError.textContent !== "" || employeeIdError.textContent !== "" || descriptionError.textContent !== "";

    // Stop submission if errors exist
    if (formHasErrors) {

        console.log("Form contains validation errors.");
        return;
    }
    // Success message for testing
    // console.log("Form submitted successfully.");

    // Create the object that will stores the incident information
    const incidentReport = {
        employeeName: employeeNameField.value.trim(),
        employeeId: employeeIdField.value.trim(),
        description: descriptionField.value.trim()
    };
    // This will display the object in the console
    console.log(incidentReport);

    // Store the array report, display the repots  and clear the form after the user press the Submit Report button
    incidentReports.push(incidentReport);

    // Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent. 10%
    // Update the total number of reports displayed
    incidentCount.textContent = `${incidentReports.length} reports`;

    console.log(incidentReports);

    createIncidentCard(incidentReport);

    // this will clear the success message if it exists
    if (successMessageElement) {
        successMessageElement.remove();
    }

    // Create at least one element using createElement. 5%
    // this will add the success message as paragraph
    successMessageElement = document.createElement("p");

    // this will add the succesful submission of the incident report as a text
    successMessageElement.textContent = ("Incident Report Submitted Successfully");

    // Add a success class
    successMessageElement.classList.add("success-message");

    // Add message to panel as a successful submission
    formPanel.appendChild(successMessageElement);

    incidentForm.reset();

    // Reset character counter display
    characterCounter.textContent = "0 / 20 min";
    characterCounter.classList.remove("met");
}

// Function that creates a visual incident card, this helps to clone the template card

function createIncidentCard(incidentReport) {

    // Clone the template content

    const cardClone = incidentCardTemplate.content.cloneNode(true);

    // Find elements inside the cloned card

    const cardSeverity = cardClone.querySelector(".card-severity-badge");

    const cardType = cardClone.querySelector(".card-type");

    const cardDescription = cardClone.querySelector(".card-description");

    const cardReporter = cardClone.querySelector(".card-reporter");

    // Use at least two Browser Object Model (BOM) properties or methods. 3%
    const cardTimestamp = cardClone.querySelector(".card-timestamp");

    // Fill card with data

    cardSeverity.textContent = "NEW";

    cardType.textContent = "Incident Report";

    cardDescription.textContent = incidentReport.description;

    cardReporter.textContent = (`${incidentReport.employeeName} (${incidentReport.employeeId})`);

    // Use at least two Browser Object Model (BOM) properties or methods. 3%

    // The below variable will create and add current date and time for the card
    const currentTimestamp = new Date().toLocaleString();
    cardTimestamp.textContent = currentTimestamp;

    // This will remove the message after the first reports is created
    if (emptyState) {

        // Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.). 5%
        const parentContainer = emptyState.parentNode;

        parentContainer.removeChild(emptyState);
    }

    // Display newest report first
    logFeed.prepend(cardClone);

}



// Use appendChild and/or prepend to add new elements to the DOM. 5%
// Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content. 2%

// Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties. 5%
// Modify at least one attribute of an element in response to user interaction. 3%


// Include at least one form and/or input with HTML attribute validation. 5%

// Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit). 10%
// Commit frequently to the git repository. 5%
// Include a README file that contains a description of your application. 2%
// Level of effort displayed in creativity, presentation, and user experience. 5%

