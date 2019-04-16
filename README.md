#react thumbrules

1. You can put any valid JavaScript expression inside the curly braces in JSX.
2. React elements are immutable. 
3. Whether you declare a component as a function or a class, it must never modify its own props.  
4. React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.
5. React Components name should start with Capital letter by convention.
6. State is similar to props, but it is private and fully controlled by the component.
7. When you call setState(), React merges the object you provide into the current state. The merging is shallow, so this.setState({comments}) leaves this.state.posts intact, but completely replaces this.state.comments.
8. State is similar to props, but it is private and fully controlled by the component.
9. Keys serve as a hint to React but they don’t get passed to your components. If you need the same value in your component, pass it explicitly as a prop with a different name.
10. There should be a single “source of truth” for any data that changes in a React application. 

1. Help for setting up the project without using create-react-app (https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658)

# react router
1.Note: Instead of <a href="/"> we use <Link to="/">.
2.  A <Route> with no path will always match.

#about this project 
1. start using script "npm run start"
2. create a build in the folder ./dist using script "npm run build"
