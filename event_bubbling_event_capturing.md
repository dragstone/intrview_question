`Event Bubbling and Event Capturing`

- Event bubbling and capturing are two phases of event propagation in the DOM (Document Object Model) tree. These phases determine the order in which event handlers are executed when an event occurs on an element and how the event propagates through its ancestors and descendants.

`Event Bubbling:`

- In the bubbling phase, when an event occurs on an element, it triggers event handlers on that element first, then propagates up through its ancestors, triggering event handlers on each ancestor element.

- The event starts at the target element and bubbles up to the root of the DOM tree (the document object).
  This is the default behavior for most events in the DOM.

`Event Capturing:`

- In the capturing phase, when an event occurs on an element, it triggers event handlers on the root of the DOM tree first, then propagates down through its descendants, triggering event handlers on each descendant element.
  The event starts at the root of the DOM tree and captures down to the target element.
- Event capturing is less commonly used than event bubbling and requires explicit use of the addEventListener method with the useCapture parameter set to true.
  Here's an example to illustrate event bubbling and capturing:

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Event Bubbling and Capturing Example</title>
</head>
<body>
  <div id="outer">
    <div id="middle">
      <button id="inner">Click me</button>
    </div>
  </div>

  <script>
    const outer = document.getElementById('outer');
    const middle = document.getElementById('middle');
    const inner = document.getElementById('inner');

    // Event bubbling example
    outer.addEventListener('click', () => {
      console.log('Outer div clicked (bubbling)');
    });

    middle.addEventListener('click', () => {
      console.log('Middle div clicked (bubbling)');
    });

    inner.addEventListener('click', () => {
      console.log('Button clicked (bubbling)');
    });

    // Event capturing example
    outer.addEventListener('click', () => {
      console.log('Outer div clicked (capturing)');
    }, true);

    middle.addEventListener('click', () => {
      console.log('Middle div clicked (capturing)');
    }, true);

    inner.addEventListener('click', () => {
      console.log('Button clicked (capturing)');
    }, true);
  </script>
</body>
</html>
```

In this example:

- When you click the button, you'll see messages logged to the console in the order of event propagation.
- For the bubbling phase, the messages will be logged in the order of "Button clicked (bubbling)", "Middle div clicked (bubbling)", and "Outer div clicked (bubbling)".
- For the capturing phase, the messages will be logged in the order of "Outer div clicked (capturing)", "Middle div clicked (capturing)", and "Button clicked (capturing)".
  By understanding event bubbling and capturing, you can control the flow of events in your application and handle them more effectively.
