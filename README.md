## Description

### Context

This website application is a collaborative project between the *Design 2* and the *Dynamic Content Design* courses, as part of the *Digital Design and Development Program* from the *British Columbia Institute of Technology (BCIT)*. Three students are actively working on this project on a weekly basis until May 2023.

### Project

The project aims to raise awareness about the declining bee population in Canada, an extremely serious environmental problem that could negatively impact future generations. The target audience is focused on children between 6 to 8 years old, who have a great capacity to absorb information and are ideal users to engage with the product, understand the message, and take action towards the change.

### Key Features & Experience

Beeboo has a gamified horizontal interface where users can find educatoinal content, at-home activities and a quiz to
test their knowledge.

## Resources

The project uses Next.js, a React-based web framework, and is bootstrapped with create-next-app.

## Functionality

### Navigation

The toggleNavElements function is passed as a prop to the Quiz component and is used to control the visibility of navigation elements in the parent component. It allows the Quiz component to communicate with its parent and toggle the visibility of navigation UI elements.

1. The toggleNavElements function is defined in the parent component and passed as a prop to the Quiz component.
2. In the Quiz component, the toggleNavElementsCallback is created using the useCallback hook to memoize the function and prevent unnecessary re-renders.
3. The toggleNavElementsCallback is called internally in the useEffect hook with an empty dependency array, ensuring it's only executed once when the Quiz component mounts.
4. When certain conditions are met, such as clicking on quiz buttons or closing the quiz, the toggleNavElementsCallback is invoked with true or false as an argument to control the visibility of navigation elements in the parent component.

### Quiz

The Quiz flow is as follows:
1. The Quiz component renders the quiz questions based on the currentPage state.
2. Users select answers by clicking on quiz buttons, triggering the handleClick function.
3. handleClick updates the state based on the selected answer and moves to the next page.
4. When reaching the last page, the result is calculated using determineResultPage.
5. The resultPage determines the displayed result and corresponding feedback.
6. Closing the quiz triggers the handleClose function, which handles the closing logic.
7. useEffect hooks manage side effects and lifecycle events, such as audio playback and toggling navigation elements.

The Quiz functions are defined as:
1. handleClick: This function is triggered when a quiz button is clicked. It receives the selected answer and its weight as parameters. It updates the state variables accordingly, moves to the next quiz page, and triggers a fade-out animation effect.

2. handleIntroButtonClick: This function is called when the "Take the Quiz" button in the quiz introduction section is clicked. It sets the showIntro state variable to false, hiding the introduction section and displaying the quiz questions.

3. handleClose: This function is called when the quiz is closed. It invokes the onClose callback prop, which is responsible for handling the logic of closing the quiz in the parent component.

4. determineResultPage: This function calculates the result page based on the selected answers. It sums the weights of the selected answers and determines the appropriate result page based on the total weight.

5. useEffect hooks: These hooks handle various side effects and lifecycle events. They listen for changes in specific variables and trigger certain actions accordingly. For example, when the current quiz page is the fourth page and an answer has been selected, the determineResultPage function is called to calculate the result page.

### Activities / Learning

1. ActivitiesMain / Learn Components:
- This component is responsible for rendering different sections or steps of the activities / learn sections based on the activeComponent state.
- The activeComponent state determines which section to render: 'main', 'planting', 'masonBeeKit', or 'supportLocal'.
- The handlePlantingClick, handleMasonBeeClick, and handleSupportLocalClick functions are called when the corresponding buttons are clicked to change the activeComponent state.
- The handleClose function is triggered when the activities / learning sections are closed. It sets activeComponent to 'main', enables the navigation elements, and plays a closing sound.
- The renderComponent function determines which component to render based on the activeComponent state.

2. Sub Activities / Learning Components:
- The step state is used to keep track of the current step or section.
- The handleNext, and handlePrevious functions are called when the corresponding buttons are clicked to navigate between steps.
- The handleClose function is triggered when the activities are closed. It enables the navigation elements and calls the onClose function passed from the parent component.
- Each step section is rendered based on the step state. The content and images change accordingly.



### Getting Started

To run the development server, we used the following command:

```bash
npm run dev
# or
yarn dev
```

## Installing Dependencies

The following dependencies need to be installed:

### ChartJS

```
npm i react-chartjs-2
```

### Lottie Animation

```
npm install lottie-web
```

