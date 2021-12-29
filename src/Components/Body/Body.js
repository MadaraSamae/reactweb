import React, { Component } from "react";
import "./body.css";
export class Body extends Component {
  render() {
    return (
      <div>
        <div className="context">
          <div className="context1">
            <h4 className="title">Declarative</h4>
            <p className="p-style">
              React makes it painless to create interactive UIs. Design simple
              views for each state in your application, and React will
              efficiently update and render just the right components when your
              data changes.
            </p>
            <p className="p-style">
              Declarative views make your code more predictable and easier to
              debug.
            </p>
          </div>
          <div className="context1">
            <h4 className="title">Component-Based</h4>
            <p className="p-style">
              Build encapsulated components that manage their own state, then
              compose them to make complex UIs.
            </p>
            <p className="p-style">
              Since component logic is written in JavaScript instead of
              templates, you can easily pass rich data through your app and keep
              state out of the DOM.
            </p>
          </div>
          <div className="context1">
            <h4 className="title">Learn Once, Write Anywhere</h4>
            <p className="p-style">
              We don’t make assumptions about the rest of your technology stack,
              so you can develop new features in React without rewriting
              existing code.
            </p>
            <p className="p-style">
              React can also render on the server using Node and power mobile
              apps using React Native.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
