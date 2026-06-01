# CyberShield Incident Response System

## About This Project
This project was created for **SBA 316 - The Document Object Model**. 
The goal of the project was to build a small web application using HTML, CSS, and JavaScript while practicing DOM manipulation, event listeners, form validation, arrays, objects, and dynamic content creation. 

The application simulates a cybersecurity incident reporting system where users can submit a mock incident report and view it in a live incident log.

---

## Features

### Submit Incident Reports
Users can enter comprehensive details including:
* Employee Name
* Employee ID
* Department
* Email Address
* Incident Type
* Date and Time
* Severity Level
* Incident Description

### Form Validation
The application rigorously validates user input before a report can be submitted to ensure data integrity:
* Employee Name: Must contain at least 2 characters.
* Employee ID: Must follow the specific format `EMP-1234`.
* Incident Description: Must contain at least 20 characters.

### Live Incident Log
After a successful submission:
* A new incident object is created dynamically.
* The report is stored safely within a JavaScript array.
* A new interactive incident card is instantly displayed in the **Incident Log**.
* LIFO Ordering: The newest report always appears at the very top of the log.

### Character Counter
The Incident Description field includes a real-time, live character counter that dynamically updates while the user types.

### Incident Counter
The application keeps track of and displays the total number of submitted incident reports in real time.

### Clear Log
Users can clear all incident reports from the active log after confirming the action via a verification prompt.

### Timestamps
Each generated incident card displays the exact date and time the report was submitted for forensic audit capability.

---

## Technologies Used
* HTML5: Semantic markup structure.
* CSS3: Custom responsive layouts and visual security theme styling.
* JavaScript: Dynamic application architecture.

---

## JavaScript Concepts Practiced
During this project, I have reinforced core programming fundamentals:
* Variables & Scope
* Functions & Arrow Functions
* Arrays & Array Methods
* Objects & Object Properties
* Conditionals & Logical Operators
* Event Listeners (`click`, `input`, `submit`)**
* Form Validation Protocols
* Advanced DOM Manipulation:
  * `getElementById()`
  * `querySelector()`
  * `querySelectorAll()`
  * `createElement()`
  * `appendChild()`
  * `prepend()`
  * `cloneNode()`
  * `classList`
  * `textContent`

---

## How To Run The Project
1. **Download or clone** this repository to your local machine.
2. Navigate into the **project folder**.
3. Locate and open the `index_316.html` file directly in any modern web browser (Chrome, Edge, Firefox, Safari).
4. Complete the form inputs and submit a mock incident report.
5. Review the newly generated incident cards in the **Incident Log** section at the top of the feed.

---

## What I Learned
This project helped me become significantly more comfortable working directly with the DOM and understanding how HTML, CSS, and JavaScript seamlessly work together to build interactive user experiences. 

Some of the concepts I spent the most time practicing and mastering were:
* Form validation techniques and regular expression mapping.
* Managing multiple event listeners seamlessly.
* Creating, styling, and injecting elements dynamically into the viewport.
* Updating page content programmatically with JavaScript state changes.
* Using arrays and objects to model real-world business data structures.
* Working with HTML templates and leveraging `cloneNode()` for structural reusability.

Building a complete project from start to finish helped me understand exactly how different JavaScript concepts connect together in a functional production pipeline.

---

## Future Improvements
Some features planned for upcoming iterations include:
* Severity Filtering: Sort incidents dynamically by Low, Medium, High, or Critical badges.
* Individual Card Removal: Add a "Resolve/Delete" button to clear specific individual cards from the log.
* Local Storage Integration: Persist reports natively inside the browser so data is saved across page reloads.
* Search Functionality: A live search bar to query fields like Employee ID or keywords within descriptions.
* Additional Validation Rules: Implement advanced email formatting checks and strict date constraint boundary handling.

---

## Project Information
* Course Assignment: Created for SBA 316 - The Document Object Model.
