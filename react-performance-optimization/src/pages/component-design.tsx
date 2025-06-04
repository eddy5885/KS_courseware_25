//@ts-nocheck

import React, { useState, useEffect, useCallback, useRef } from "react";

function ExpensiveTree() {
  let now = performance.now();
  while (performance.now() - now < 100) {
    // Artificial delay -- do nothing for 100ms
  }
  return <p>I am a very slow component tree.{Date.now()}</p>;
}

export default class App extends React.Component {
  text = "";
  render() {
    return (
      <>
        <Form
          onChange={(value) => {
            this.text = value;
          }}
        />
        <ExpensiveTree />
        <button
          onClick={() => {
            console.log("ref", this.text);
          }}
        >
          getValue
        </button>
      </>
    );
  }
}

function Form(props: { onChange: (str: string) => void }) {
  return (
    <>
      <input
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
      />
      <p>Hello, world!</p>
    </>
  );
}
