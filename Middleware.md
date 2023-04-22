`Middleware`

- Redux middleware allows you to intercept every action sent to the reducer so you can make changes to the action or cancel them.

- Middleware helps you with logging,error reporting, asynchronous requests etc.

- Take a look at below code:

```
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

const reducer=(state=0,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return state+ action.payload;
        case 'DECREMENT':
            return state- action.payload;

    }
}

store.createStore(reducer);
store.subscribe(()=>{
    console.log("current state", store.getState());
})

store.dispatch({
    type:'INCREMENT',
    payload: 1
})
store.dispatch({
    type:'INCREMENT',
    payload: 7
})
store.dispatch({
    type:'INCREMENT',
    payload: 5
})
store.dispatch({
    type:'DECREMENT',
    payload: 1
})


```

- createStore accepts three arguments

1.  First is function normally known as reducer.(Required)
2.  Second is inital value of state.(Optional)
3.  Third is middleware.(Optional)

- To apply middleware we use applyMiddleware

  import { applyMiddleware } from "redux";

- Let's define loggerMiddleware . Then to define middleware we need to use following syntax.

```
const loggerMiddleware=(store)=>(next)=>(action)=>{
    //your code
}

function loggerMiddleware(store){
    return function(next){
       return function(action){
        //my code
       }
    }
}
```

- Once middleware function is created we pass it to applyMiddleware function like this:

```
const middleware = applyMiddleware(loggerMiddleware);
```

- Then we finally pass middleware to createStore

```
const store = createStore(reducer, middleware);
```

- loggerMiddleware code

```
const loggerMiddleware=(store)=(next)=>(action)=>{
  console.log("action", action);
  next(action);
}

```

- If we don't provide next to middleware then action will not be sent to reducer so store will not be updated.

- Reducers should be a pure function and we shouldn't make any changes to state and action inside the reducer.

- you can create multiple middlewares and pass them to the applyMiddleware function like this:

```
const middleware = applyMiddleware(loggerMiddleware, secondMiddleware, thirdMiddleware);
```

- All the middlewares mentioned in the applyMiddleware function will be executed one after the another.
