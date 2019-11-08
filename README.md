# Sprint Challenge: React - Star Wars

This challenge allows you to practice the concepts and techniques learned over the past Sprint and apply them in a concrete project. This Sprint explored ReactJS, Function Components, component state and side effects. In your challenge for this Sprint, you will demonstrate proficiency by creating an application that uses ReactJS to consume live data retrieved from the World Wide Web and style that data nicely on the page.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency with ReactJS Fundamentals and your command of the concepts and techniques in the Functional Components.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your Team Lead.

## Description

In this challenge, create a web page that presents a styled list of Star Wars characters. Being able to render out data to a web page is a large part of what JavaScript developers do, this challenge assesses your ability to achieve such a task.

## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [x] **What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.**

**What it is:** It is a **user interface (UI) component library**. It was created by Facebook.

**Problems it tries to solve:** Unlike some uses of vanilla JavaScript, it tries to be DRY, and easier to learn, maintain, and test. It is declarative, and delivers better performance. It uses a virtual DOM to accomplish those aspects.

1. It divides the UI into components, which can be reused, which helps code be DRY (don’t repeat yourself). The fact that the components can be resusable, maintainable and easy to test, is a big plus.

2. It seems like it is less complicated than some other libraries, and more straight-forward. It uses JavaScript and JX, which is a lot like HTML, and HTML is familiar to a lot of people. Therefore, it is **easier to learn**.

3. React is **declarative**, not imperative. We tell React that we want a component to be rendered it a specific way, and we never have to interact with the DOM to reference it later. This is unlike regular JavaScript, that would imperatively manipulate the DOM.

Imperative example:

```
const container = document.getElementById(‘container’);
const btn = document.createElement(‘button’);btn.className = ‘btn red’;
btn.onclick = function(event) {
 if (this.classList.contains(‘red’)) {
   this.classList.remove(‘red’);
   this.classList.add(‘blue’);
 } else {
   this.classList.remove(‘blue’);
   this.classList.add(‘red’);
 }
};container.appendChild(btn);
Declarative example:
const Button = () => {
const [color, setColor] = useState(‘red’);
```

Declarative example:

```

const handleChange = () => {
    setColor(currentColor => (currentColor === ‘red’? ‘blue’: ‘red’));
}
    return (
	<div>
		<h1>{color}</h1>
      	<button className=`btn ${color}`
         		onClick={() => handleChange()}>
      	</button>
    </div>
);
}
```

The React example never actually touches an element or manipulates the DOM itself. It just tells React how an element should be rendered, given the current state.

React uses a **"virtual DOM"** – a set of data structures in memory that represent the DOM. When a change happens, React calculates what the DOM would look like and then only modifies the actual browser’s DOM if any changes actually need to be applied.

4. It also **optimizes performance** by doing things like batching DOM updates and trying to find a minimal set of DOM operations. Because React knows when data has changed, it can figure out the minimal subset of the UI that it needs to re-render.


- [x] **What does it mean to _think_ in react?**

It could be considered an approach to how you plan an app. You consider how to break up your app into components and subcomponents. Each component should do one thing. If it’s too complex, you can break it down into smaller subcomponents. Often each part of your data will have its own component.

You will also think about what components should have state, and which should pass data to child components. Generally, you want to have the components with state to be upper-level components. If data needs to be updated,  you pass references to functions that are called to update the data at an upper level.


- [x] **Describe state.**

State is a JavaScript object and is managed within a component.

A component can keep internal state data, which is initialized and accessed through the useState hook, (or this.state in class components). When a component’s state data changes, the effected elements are rendered.  A component can pass state data down to a child component through props. A piece of data probably **isn’t or shouldn't be** state if it doesn’t change with time, or if you could compute it based on other data pieces in the component, or if it is passed in from a parent component.

- [x] **Describe props.**

Props is a JavaScript object. Props get passed to a component. A component can take in data through props passed down to it.


- [x] **What are side effects?**

Side effects are operations that go outside the scope of the function. They can affect other components and can’t be done during rendering. Examples of side effects are data fetching, such as by getting data from an API, subscriptions, manually changing the DOM, and scheduling a timer.

**How do you sync effects in a React component to state or prop changes?**

You can sync effects by using the useEffect hook. Placing useEffect inside a component gives you access to state or props right inside useEffect, without needing anything special to access them.

You pass a callback function to useEffect, as well as an optional 2nd argument called the dependency array. Inside the callback, you do the side effect operations and can set state values. If you don’t include a dependency array, the callback is executed after each render. An empty array indicates to React that you only want the callback executed after the first render only. If you want the callback to executed when a render is caused by a piece of state changing, you can put that piece of state in the dependency array. Also, you can return a callback if you want to do cleanup, which states how the cleanup is done. 

## Project Set Up

Follow these steps to set up and work on your project:

- [x] Create a forked copy of this project.
- [x] Add TL as collaborator on Github.
- [x] Clone your OWN version of Repo. **(Not Lambda's by mistake!)**
- [x] Create a new Branch locally: `git checkout -b <firstName-lastName>`.
- [x] Change directories into `./starwars` (`cd starwars`) and run `yarn install` or `npm install` to retrieve all needed dependencies.

`yarn install` didn't want to work for some reason, but `npm install` did.


- [x] Once you have installed the _node_modules_, run `yarn start` or `npm start` to get your server up and running.
- [x] With the server up and running, open Chrome and head over to `localhost:3000` and view your beautiful app. Maybe it's not _that_ pretty... _yet_, your goal is to ensure this project becomes a thing of beauty.
Follow these steps for completing your project.
- [x] Implement the project on this Branch, **committing progress & changes often.**
- [x] Push commits: `git push origin <firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request.
- [ ] PM then will count the HW as done by merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

- [x] Fetch a list of Star Wars characters from the [Star Wars API (or SWAPI)](https://swapi.co/) and render them to the screen.
- [x] Follow the documentation to learn how to fetch a list of "people". However, don't spend _too_ long on this. Here is a link for you to follow if you've looked around the docs for about 15 minutes or so and haven't found where to go - [Secret Link to Awesomeness 🤫](https://swapi.co/documentation#people).
- [x] Set the data you fetch to state.
- [x] Map over the list and render a component for each character on the page.
- [x] You must display at least one element for each star wars character in the data set.
- [x] The elements must be styled with either Reactstrap or styled-components - don't rely on browser default styles.

#### Required best practices:

- [ ] Consistent naming. Examples: variables, functions, Components, and file/folder organization.
- [ ] Consistent spacing. Examples: line breaks, around arguments and before/after functions.
- [ ] Consistent quotation usage.
- [ ] Spell-check.
- [ ] Schedule time to review, refine and reassess your work.


It is better to submit a challenge that meets [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) than one that attempts too much and fails.

## Stretch Problems
- [x] Next week we will be looking at React forms. Look a head and try to create a search form that will filter through the data displayed from your characters.

- [x] Build a pagination system that will allow you to load the next page of data.
  - `console.log()` the data coming back from the server.
  - Notice that there are `next` and `previous` fields that give you a URL.
  - You can build a function that will get characters called `getCharacters` that you can use dynamically to get the next or previous set of characters. You would need to supply it with the proper fields, and you'll need to set up more state to do this.
  - [ ] Add at least one test using a testing tool:
  - [react-testing-library](https://github.com/testing-library/react-testing-library#basic-example)
  - [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html)

<!--
- [ ] Build another app from scratch that looks very similar to this one. Inside of your main `App` component fetch some data in this same fashion from this url `https://dog.ceo/dog-api/#all` you'll have to follow the documentation at that website and figure out how to change up the code you've seen here in this Star Wars app in order to properly fetch the data and store it on Component State.
-->
