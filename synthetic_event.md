`Synthetic Events`

- In React, synthetic events are a wrapper around the native browser events (such as click, change, keydown, etc.). React implements its own event system to ensure consistent behavior across different browsers and provide additional functionality.

- It providies unified API , which prevents browser inconsistencies and ensure that the events works across multiple platforms.

`Javascript Events`

- Javascript events allow the user to interact with web applications and implement operations like, registering click, mouseover, keypress events when they are fired inside the browser.

- Each js event has a event handler that works with an event listener.

- Event listener listens for a particular event that should occur, while event handler is a function that get executed once event registered or fired.

- Both Synthetic Events and Native Events can implement the preventDefault and stopPropagation methods. However, synthetic events and native events are not exactly the same thing. For example, SyntheticEvent will point to mouseout for onMouseLeave Event.

- You can always access native events with the nativeEvent attribute if you need direct access.

` Why it is useful`

- Cross-browser: It wraps the browser native events through browser nativeEvent attribute and provide a uniform api and consistent behaviour.

- Immutable: Synthetic events are immutable, meaning they cannot be modified. This ensures that event handling remains predictable and consistent.

- Performance Optimization: React can optimize event handling using techniques like event delegation and event pooling. This can improve the performance of event handling, especially in applications with a large number of event listeners.

`Benefits of using synthetic events:`

- Cross browsers applications are easy to implement.

- Synthetic events are that React JS reuses these events objects, by pooling them, which increase the performance.

`Why use such a wrapper?`

- We use different browser where same events has different names. Here wrapper does is triggering all the different names for the same event effect.

- whenever we are triggering an event in ReactJS , we are not trying to trigger real DOM event instead we are using React JS custom event type which is synthetic events.

`what is "event pooling" or "event recycling" in react`

- In React, "event pooling" or "event recycling" is a performance optimization technique used to improve the efficiency of event handling. Here's how it works:

- Event Objects Creation: When an event occurs, such as a click or key press, React creates a synthetic event object to represent that event. This synthetic event contains information about the event, such as the type of event, target element, and any associated data.

- Reusing Event Objects: Instead of creating a new event object for each event, React reuses existing event objects from a pool whenever possible. After an event handler function finishes executing, React resets the properties of the synthetic event object and puts it back into the pool for future use.

- Reducing Memory Overhead: By reusing event objects, React reduces the overhead of creating and garbage collecting many event objects. This can lead to significant memory savings, especially in applications with frequent user interactions.

- Improving Performance: Event pooling helps improve the overall performance of React applications by reducing the amount of memory allocation and garbage collection overhead associated with event handling.

- Overall, event pooling is an important optimization technique in React that contributes to the efficient handling of user interactions and better performance of React applications. It's automatically handled by React behind the scenes, so developers don't need to worry about implementing it themselves.
