`The Component Lifecycle methods`

`Mount`
These methods are called in following order when component is created and inserted into the DOM.

- constructor(props)

1. Constructor runs before your class component gets mounts.It is used for two purpose in React.It let's you declare state and bind class methods to the class instances.

```
constructor(props){
    super(props);
    this.state={
        counter:0
    }
    this.handleClick=this.handleClick.bind(this);
}

handleClick(){

}
```

2. A constructor should not contain any side effects or subscriptions.
3. Inside the constructor we need to call super(props) before any other statement. If you don't do that this.props will be undefined while contructor runs,which can be confusing and cause bugs.

- static getDerivedStateFromProps(props,state)

1. If you define static getDerivedStateFromProps , React will call it right before calling render, both on initial mount or subsequent updates.
2. It should return an object to update the state, or null to update nothing.
3. This method is used for rare use case where the state depends on changes in props over time.

```
class Form extends React.Component{
    state={
        email: this.props.defaultEmail,
        prevUserId: this.props.userId
    }
    static getDerivedStateFromProps(props,state){

      if(props.ueserId!=state.prevUserId){
        return {
        prevUserID: props.userID,
        email: props.defaultEmail
      };

      }
      return null;
    }
}

```

- render()

1. The render method is only required method in class component.
2. Render method should specify what you want to appear on the screen.

```
import {Component} from 'react'

class Greeting extends Component{
    render(){
        return <div>hello world</div>
    }
}
```

3. To calculate the return JSX,render method can read this.state, this.props, this.context.
4. You should write the render method as a pure function, meaning that it should return the same result if prop, state, and context are same.
5. It should not contain any side effects (like Http reuest or setting up subscription) or interact with browser API.
6. render will not get called if shouldComponentUpdate is defined and return false.

- componentDidMount()

1. If you define componentDidMount method, React will call it when your component is first mounted to the screen.
2. This is the common place to start data fetching, set up subscriptions, or manipulate DOM node.
3. If you implement componentDidUpdate , you usually need to implement other lifecycle methods to avoid bugs.
4. For example, if componentDidMount reads some state or props, you also have to implement componentDidUpdate to handle their changes, and componentWillUnmount to clean up whatever componentDidMount was doing.

```
componentDidMount() {
    this.setupConnection();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.roomId !== prevProps.roomId ||
      this.state.serverUrl !== prevState.serverUrl
    ) {
      this.destroyConnection();
      this.setupConnection();
    }
  }

  componentWillUnmount() {
    this.destroyConnection();
  }
```

`Update`
Update can be caused when there is change in state or props. These methods are called in following order when a component in being re-render.

- static getDerivedStateFromProps()
- shouldComponentUpdate(nextProps,nextState,nextContext)

1. If you define shouldComponentUpdate , React will call it to determine whether a re-render can be skipped.

```
class Rectangle extends Component {
  state = {
    isHovered: false
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.position.x === this.props.position.x &&
      nextProps.position.y === this.props.position.y &&
      nextProps.size.width === this.props.size.width &&
      nextProps.size.height === this.props.size.height &&
      nextState.isHovered === this.state.isHovered
    ) {
      // Nothing has changed, so a re-render is unnecessary
      return false;
    }
    return true;
  }
}
```

2.  React calls shouldComponentUpdate before rendering when new props or state are being recieved.Defaults to true.
3.  This method is not called for initial render or when forceupdate is used.

- render()
- getSnapshotBeforeUpdate(prevProps,prevState)

1. If you implement getSnapshotBeforeUpdate , React will call it immediately before React updates the DOM.
2. It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed.Any value returned by this lifecycle method will be passed as a parameter to componentDidUpdate.

```
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Are we adding new items to the list?
    // Capture the scroll position so we can adjust scroll later.
    if (prevProps.list.length < this.props.list.length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }
```

3. You should return snapshot of any type that you'd like or null.
4. getSnapshotBeforeUpdate will not get called if shouldComponentUpdate is defined and returns false.

- componentDidUpdate(prevProps,prevState,snapshot)

1. If you define componentDidUpdate method, React will call it immediately after your component has been re-rendered with updated props and state.
2. you can use it to manipulate DOM after an update .
3. This is also a common place to do network requests as long as you compare the current props to previous props (e.g. a network request may not be necessary if the props have not changed).
4. componentDidUpdate will not get called if shouldComponentUpdate is defined and returns false

`Unmount`
This method is called when component is removed from DOM

- componentWillUnmount()

1. If you define componentWillUnmount method, React will call it before your component is removed (unmounted) from screen.
2. This is common place to cancel data fetching or remove subscriptions.
3. The logic inside componentWillUnmount should “mirror” the logic inside componentDidMount. For example, if componentDidMount sets up a subscription, componentWillUnmount should clean up that subscription. If the cleanup logic your componentWillUnmount reads some props or state, you will usually also need to implement componentDidUpdate to clean up resources (such as subscriptions) corresponding to the old props and state.

```
componentDidMount() {
    this.setupConnection();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.roomId !== prevProps.roomId ||
      this.state.serverUrl !== prevState.serverUrl
    ) {
      this.destroyConnection();
      this.setupConnection();
    }
  }

  componentWillUnmount() {
    this.destroyConnection();
  }

```

`Error Handling`
These methods are called when there is error during rendering, in a lifecycle method or in a constructor of any child component.

- static getDerivedStateFromError()
- componentDidCatch()
