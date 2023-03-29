import React, { createContext, useState } from "react";

// Create the context object
export const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = (props) => {
  // Set the default state of the dark mode toggle to false
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle the dark mode state
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Create an object with the dark mode state and toggle function to pass to children components
  const themeContext = {
    isDarkMode,
    toggleDarkMode,
  };

  // Return the provider component with the theme context object as its value
  return (
    <ThemeContext.Provider value={themeContext}>
      {props.children}
    </ThemeContext.Provider>
  );
};


/* In this code, we create a new context object called "ThemeContext" and a provider component called "ThemeProvider". The provider component sets the default state of the dark mode toggle to false using the useState hook, and creates a function called "toggleDarkMode" to update the state when the toggle is clicked.

Next, we create an object called "themeContext" with the current state and toggle function, and pass it to the provider component as its value. This allows child components to access the context values.

Now, we can wrap our app with the "ThemeProvider" component in the index.js file:

javascript
Copy code
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./ThemeContext";

import { ThemeProvider } from "./ThemeContext";

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
Finally, we can access the dark mode state and toggle function in any child component that needs it, by importing the "ThemeContext" and using the "useContext" hook:

javascript

import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const MyComponent = () => {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      {isDarkMode ? <p>Dark Mode is On</p> : <p>Dark Mode is Off</p>}
    </div>
  );
};




 */