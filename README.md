#react thumbrules

1. You can put any valid JavaScript expression inside the curly braces in JSX.
2. React elements are immutable. 
3. Whether you declare a component as a function or a class, it must never modify its own props.  
4. React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.
5. React Components name should start with Capital letter by convention.
6. State is similar to props, but it is private and fully controlled by the component.
7. When you call setState(), React merges the object you provide into the current state. The merging is shallow, so this.setState({comments}) leaves this.state.posts intact, but completely replaces this.state.comments.
8. Help for setting up the project without using create-react-app (https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658)
9. Deployed at: https://tender-panini-451aa1.netlify.com/#/


[![Netlify Status](https://api.netlify.com/api/v1/badges/1164df1a-42a5-425d-9d0f-4348093edd71/deploy-status)](https://app.netlify.com/sites/tender-panini-451aa1/deploys)