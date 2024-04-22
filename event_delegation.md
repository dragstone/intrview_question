`Event Delegation`

- Event delegation is a technique used in JavaScript to handle events more efficiently by attaching a single event listener to a common ancestor element, rather than attaching individual event listeners to multiple child elements. In React, event delegation can be achieved using the concept of "bubbling" or "capturing" phases of events propagation.

`Here's how event delegation works in React:`

- Bubbling and Capturing Phases: When an event occurs on a DOM element, it triggers event handlers in two phases: capturing phase and bubbling phase.

- Capturing Phase: Events propagate from the root of the DOM tree down to the target element.
- Bubbling Phase: Events propagate from the target element back up to the root of the DOM tree.

- Attaching Event Listeners: In React, you can attach event listeners to a common ancestor element that contains multiple child elements. When an event occurs on any child element, it will bubble up to the ancestor element, triggering the event listener attached to it.

- Identifying the Target Element: Inside the event handler, you can use the event.target property to identify the actual element on which the event occurred. You can then determine the action to take based on the target element.

```
import React from 'react';

class EventDelegationExample extends React.Component {
  handleClick = (event) => {
    if (event.target.tagName === 'BUTTON') {
      console.log('Button clicked:', event.target.textContent);
    }
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
      </div>
    );
  }
}

export default EventDelegationExample;

```

- Event delegation can be particularly useful when working with dynamically generated elements or large lists of items, as it reduces the number of event listeners attached to the DOM and improves performance.
