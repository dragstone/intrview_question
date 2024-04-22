https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components/

https://frontarm.com/courses/react-fundamentals/odds-and-ends/proptypes-and-defaultprops/

https://www.geeksforgeeks.org/lifting-state-up-in-reactjs/

https://www.freecodecamp.org/news/jsx-in-react-introduction/

https://www.zipy.ai/blog/how-react-works-under-the-hood

https://medium.com/@himanshubarak/understanding-how-react-js-works-under-the-hood-67542803539d

https://react.dev/learn/referencing-values-with-refs

https://stackoverflow.com/questions/1865837/whats-the-difference-between-window-location-and-window-location-replace

https://www.w3schools.com/js/js_window_history.asp

https://www.w3schools.com/js/js_window_location.asp

https://www.tutorialrepublic.com/javascript-tutorial/javascript-window-navigator.php

https://www.w3schools.com/js/js_window_screen.asp

https://www.geeksforgeeks.org/how-are-the-javascript-window-and-javascript-document-different-from-one-another/

https://www.freecodecamp.org/news/how-to-manipulate-the-dom-beginners-guide/

https://www.youtube.com/watch?v=3KJI1WZGDrg

https://www.geeksforgeeks.org/javascript-addeventlistener-with-examples/

https://www.geeksforgeeks.org/reactjs-pure-components/

https://www.geeksforgeeks.org/what-is-event-bubbling-and-event-capturing-in-javascript/

https://www.programiz.com/javascript/getter-setter

https://www.geeksforgeeks.org/sets-in-javascript/

https://javascript.info/map-set

https://www.geeksforgeeks.org/what-is-weakmap-in-es6/


https://www.geeksforgeeks.org/javascript-weakset/


https://www.geeksforgeeks.org/strict-mode-javascript/

https://www.programiz.com/javascript/use-strict

https://javascript.info/try-catch

https://javascript.info/symbol

https://www.freecodecamp.org/news/context-api-in-react/

https://www.geeksforgeeks.org/controlled-vs-uncontrolled-components-in-reactjs/

https://medium.com/dailyjs/techniques-for-decomposing-react-components-e8a1081ef5da

https://formidable.com/blog/2021/react-composition/

https://stackoverflow.com/questions/10808109/script-tag-async-defer

https://www.geeksforgeeks.org/creating-objects-in-javascript-4-different-ways/

`Synthetic events`
- As the meaning of the word "synthetic" suggests, it is indeed a wrapper on the top of the browser’s native events to make them cross-browser compatible. It has the same interface as the browser’s native event, including stopPropagation() and preventDefault(), etc. except these events work identically across all browsers. The synthetic events are different from, and do not map directly to, the browser’s native events. However if you want to use the underlying browser event, you can use the nativeEvent attribute to get it.

- What are the other major differences between the synthetic and the browser's native events?

Well, there is none actually. Yes, there are syntactical and logical differences in the way they are handled in React and the attributes they have. But, if you talk about any major structural difference apart from the points I mentioned above, there is none actually.


Synthetic events are a wrapper over the browser's native event.

They are cross-browser compatible, meaning they are supported in all the browsers are not browser specific

There is a way to use native events too, with the help of nativeEvent attribute on the synthetic event.

Before React 17, the React synthetic events used to be pooled.

To use the same event even after the event handler has run, you could use the persist method on SyntheticEvent.

