import React from 'react'

const Context = () => {
  return (
    <div>Context</div>
  )
}




export default Context

/* Context API in React allows you to share data between components without having to pass props down through every level of the component tree. Instead, you can define a "context" object that holds the shared data, and any components that need access to that data can "subscribe" to the context.

Here's an example of how to use Context API in React:

First, you need to create a context object:
javascript
Copy code
import React from 'react';

const MyContext = React.createContext();
Then, you can define a provider component that will wrap the components that need access to the context: 

import React from 'react';

const MyContext = React.createContext();

function MyProvider(props) {
  const [data, setData] = React.useState('default value');

  return (
    <MyContext.Provider value={{data, setData}}>
      {props.children}
    </MyContext.Provider>
  );
}
In this example, MyProvider is a functional component that defines a state variable called data. The provider wraps its children with the MyContext.Provider component, passing in an object that contains the data variable and a function to update it.

Now, you can use the context in any child component by "subscribing" to it:
javascript
Copy code
import React from 'react';
import MyContext from './MyContext';

function MyChildComponent() {
  const {data, setData} = React.useContext(MyContext);

  return (
    <div>
      <p>The data is: {data}</p>
      <button onClick={() => setData('new value')}>
        Update data
      </button>
    </div>
  );
}
In this example, MyChildComponent uses the useContext hook to access the context object. It

*/