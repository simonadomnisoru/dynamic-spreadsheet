# Spreadsheet

A dynamic spreadsheet created with React.js.

## Run in local enviroment. Type in the root folder of the project:
   - npm install
   - npm run

## Structure
   - components folder: All React components devided between Header ("Add column" button, "Add 10 rows" button) and the Spreadsheet
   - helpers folder: Various helpers methods can be found here
   - api/spreadsheet.js: Future handler to interact with the backend. Is the intermediate between the components and the Redux store
   - state folder: contains the redux action, reducer and store
   - style folder: css for the components

## Libraries
   - [Create React App](https://github.com/facebook/create-react-app) used to create the project with no build configuration
   - [Redux](https://redux.js.org/) used to manage the state of the project and to simulate the backend
   - [Prop types](https://github.com/facebook/prop-types) Runtime type checking for React props

## Future enhancements
   - The row validation message is displayed for the current action. If other action takes place, it is overwritten by a new messages even if the error was not corrected by the user. Design a better system to display these warnings.
   - Unit tests
   - CI and Linters
   - Improve UX
   - Persist the data
   - The user should add as many options to the dropdown column as desired
   - Allowed more interactions with the columns (Delete, Edit all the proprierties etc.)