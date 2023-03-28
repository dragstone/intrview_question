`Error Boundaries`

- Error boundaries provide some sort of boundaries or checks on the errors.

`Reason to use Error boundaries`

- They are React components that are used to handle javascript errors in their child component tree. React components that catch javascript errors anywhere in their child component tree, log the errors, display the fallback UI instead of the component tree that crashed etc.
- It catches errors during rendering:

  1. During render phase
  2. In Lifecycle methods
  3. In constructor of whole tree below them.

`Enountering Errors with Error Boundaries`

- We will ineviatbly encounter unexpected errors in our app during development. You could try to access deeply nested property on an object that doesn't exist, or sometimes it is not in our control(like failed HTTP request).
- In demo below we will simulate an error to see what normally happens without error boundaries.

```
import React from 'react';

class BuggyCounter extends React.Component{
state={
counter: 0
}

handleClick=()=>{
this.setState({
counter: this.state.counter+1,
})
}

render(){
if(this.state.counter===5){
throw new Error("Simulated Error");
}

     return(
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>+</button>
      </div>
     )

}
}

export default BuggyCounter;
```

- Run the code and click + button and observe it fails at 5
- ![output of code](C:\Users\Asmiriti_Kumari\Documents\React_concepts\ErrorBundary\ss1.png)
- When app enounters an error, the component completely unmount(unmounting of whole React component tree) itself and the user is left with blank HTML page. This can leave user confused and they will not know what to do next. Error boundaries provide a gracefull way to handle these errors.

`Encountering Errors with Error Boundaries`

- To create Error Bondaries we have to specifically use two methods that are available in React components. It came with React 16.

  1. static getDerivedStateFromError - is a lifecycle method that allows the Error boundary a chance to update the state and thus triggering a last render().
  2. componentDidCatch - a lifecycle method designed for triggering side-effects.(logging errors to tools).

```
  import React from 'react';

  class ErrorBoundary extends React.Component{
  state={
  error: null
  }

  static getDerivedStateFromError(error){
  return {error:error}
  }

  componentDidCatch(error,info){
  this.logErrorToExampleService(error, info);

  }

  logErrorToExampleService=()=>console.log;

  render(){
  if(this.state.error){
  return <p>Something went wrong</p>
  }

      return this.props.children;

  }

  }

  export default ErrorBoundary;
```

- Any React component is considered as Error Boundary when it employs at least one of these lifecycle methods.

```
import React from 'react';
import BuggyCounter from './BuggyCounter';
import ErrorBoudnary from './ErrorBoundary';

class App extends React.Component {
refreshPage = () => {
history.go(0);
};

render() {
return (

<div>
<ErrorBoundary>
<BuggyCounter />
</ErrorBoundary>
<hr />
<button onClick={this.refreshPage}>Refresh Page</button>
</div>
);
}
}

export default App;
```

- Now if you click + button. Once it reaches 5 , it will crash gracefully.If you open console you will see stack trace.
- ![output of code](C:\Users\Asmiriti_Kumari\Documents\React_concepts\ErrorBundary\ss2.png)

- Instead of completely crashing, we can use Error boundaries to substitute a fallback UI. This provides a visual feedback to that user that something broke while allowing them to continue interact with our App.

`Error Boundaries do not catch Errors in the following events`

- Event Handlers
- Asyncronous code
- server side rendering
- Errors that is thrown in Error Boundary itself.

`Try/Catch`

- try/catch use in imperative code, React is declarative code.Error Boundaries preserve declarative nature of React.

`Evennt Listeners`

- Error boundaries do not check errors in event listeners as event listening doesn't happen during rendering. So if any error occur due to them React will simply display it on screen.

- It can only be used with class component.
- It is available only in React 16 or after.
- React 16 prints all the errors that occurred, it provides component Stack Trace to help user identify where an error has occurred.

`Reference`

[geekforgeeks url](https://www.geeksforgeeks.org/react-js-error-boundaries/)

[Digital Ocean url](https://www.digitalocean.com/community/tutorials/react-error-boundaries)
