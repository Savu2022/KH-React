// component : component is part of UI which is responsible for rendering the contnet. 
//Ideally you should render the component content in such a wayy that it should not  be split into multiple ones, so that we can achieve the reusability of the component. 

// there are several types of components are available: 
// 1. class based components
    // class based components:
        //to create a class based component we have to fire a command called rcc
// 2. function based components
// 3. pure components
import React from 'react'

const Footer = (props) => {
  return (
    <h5>&copy;www.knowledgehut.com {props.appName}{new Date ().getFullYear()}</h5>
  );
};

export default Footer

      
    
//export: can inform to the JS that Footer calas can be accessedby other pages/moduels from client application. 
//Default: it will use the component name as a default export name
//class: it wil be a template to declare the code/stuff
//componentName: Name of the component
//extends: It will inherit the properties and behaviour from the parent class called Component.
// Component: it is a predefined class which is declared by react now to use it functionalities in our existing component so that we used extends. 
//render() will help us to render the UI on the screen.(presentational stuff).

