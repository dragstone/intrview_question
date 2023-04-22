`Lazy Loading in React`
Lazy loading is technique of rendering only-needed critical interface items first, then quietly unrolling non critical items later.

It allows you to load parts of your application on-demand to reduce the initial load time.
If we load large bundle.js file then when application grows it will became hard to handle and slow.
For example, you can initially load the components and modules related to user login and registration. Then, you can load the rest of the components based on user navigation.

`React.Lazy()`
It is a new function in react that lets you load react components lazily through code-splitting without help from additional libraries.

`Suspense`
Suspense is a component required by lazy function basically used to wrap lazy components.
Multiple lazy components can be wrapped inside Suspense component.
It takes a fallback property that accepts the React element you want to render as lazy component is being loaded.

- With Code splitting, the bundle can be split to smaller chunks where the most important chunk can be loaded first and then every other secondary one lazily loaded.

```
import {Suspense,lazy} from 'react';

const otherComponent=React.lazy(()=>import('./otherComponent));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}

```
