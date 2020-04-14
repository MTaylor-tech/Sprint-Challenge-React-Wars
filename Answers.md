# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is a framework that provides resources for a developer to quickly create interoperable components and forge them together into a working web application. But the real strength of React lies in its efficiency. Manipulating the DOM is a programmatically expensive operation. React tracks the state of multiple objects and only refreshes or changes those DOM objects that need to be refreshed.

1. What does it mean to think in react?

Thinking in React means planning and writing a web app in the way that React simplifies the process. It starts with creating a simple sample api call to sample the data and break it down into smaller pieces, then developing individual components, each of which accomplishes one part of the overall functionality, and determining where the state should live.

1. Describe state.

State is an asynchronous data store in a React app. React keeps track of the state of components and updates the DOM when the state changes according to the need of the app.

1. Describe props.

Props are objects passed from a parent component to a child components. These can include any JS object, including functions. These are necessary to pass values or actions to the child components so that the values can be displayed or the actions can be performed from within the child component.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are additional actions that are taken when state is updated. The second, optional argument to the useEffect() function can be an object that has state in the app. If this is done, the effect will be performed when the state of that object updates.
