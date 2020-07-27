import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Card from "./FunctionalComponents";
import Clock from './ClassComponents'
import Notice from './DefaultProps'
import Button from './EventsHandling'
import Counter from './UseStateHooks'
import TextFieldInline from './InlineTypeeAnnotation'
import TextFieldAlias from './TypeAlias'
import FCTYpes from './FCType'

function App() {
  return (
    <div className="App">
      <h1>FUNCTIONAL COMPONENT</h1>
      <Card title="welcome" paragraph="To this example">EL CHILDREN ES ACA!</Card>
      <h1>CLASS COMPONENT</h1>
      <Clock />
      <h1>DEFAULT PROPS</h1>
      <Notice />
      <h1>EVENTS</h1>
      <Button>CLICK!</Button>
      <h1>HOOKS: USESTATE</h1>
      <Counter />
      <h1>INLINE TYPE ANNOTATION</h1>
      <TextFieldInline type='text' label='nombre' onTextChange={()=>{}} />
      <h1>ALIAS TYPE ANNOTATION</h1>
      <TextFieldAlias type='text' label='nombre' onTextChange={()=>{}} />
      <h1>FC TYPE ANNOTATION</h1>
      <FCTYpes type='text' label='nombre' onTextChange={()=>{}} />
    </div>
  );
}

export default App;
