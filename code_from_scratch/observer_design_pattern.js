// The Observer Design Pattern is a behavioral design pattern where an object, called the subject,
// maintains a list of its dependents, called observers, and notifies them of any changes in state, usually by calling one of their methods.
// This pattern is often used to implement distributed event handling systems.
// In JavaScript, you can implement the Observer pattern using either vanilla JavaScript or modern frameworks like React or Vue.js.

// Here's a basic example of implementing the Observer pattern in JavaScript:

class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }
  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(`${this.name} recieved updated ${data}`);
  }
}

const subject = new Subject();

const observer1 = new Observer("obs 1");
const observer2 = new Observer("obs 2");

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notify("hello all");

// practical use case of observer design pattern

// - State Management: Libraries like Redux and MobX heavily rely on the Observer pattern.
// Components subscribe to changes in state and automatically re-render when the state updates.

// - Global Event Handling: React's Context API allows you to create global state that can be accessed by any component in the component tree.
// Components can subscribe to changes in this global state and automatically re-render when it updates.

// - Real-time Updates: In applications that require real-time updates (e.g., chat applications, dashboards), components can subscribe to a WebSocket or other real-time communication channels.
// When new data is received, components can update their UI accordingly without needing to manually trigger a re-render.
