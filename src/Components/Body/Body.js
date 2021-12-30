import React, { Component } from "react";
import { SandBox } from "../SandBox/SandBox";
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
        <div className="container">
          <div className="row mt-5">
            <div className="col-sm">
              <span className="text-heading">A Simple Component</span>
              <br />
              <br />
              <p>
                React components implement a render() method that takes input
                data and returns what to display. This example uses an XML-like
                syntax called JSX. Input data that is passed into the component
                can be accessed by render() via this.props.
              </p>
              <span className="text-bold">
                JSX is optional and not required to use React.
              </span>{" "}
              Try the Babel REPL to see the raw JavaScript code produced by the
              JSX compilation step.
            </div>
            <div className="col-sm">
              <SandBox />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-sm">
              <span className="text-heading">A Stateful Component</span>
              <br />
              <br />
              <p>
                In addition to taking input data (accessed via this.props), a
                component can maintain internal state data (accessed via
                this.state). When a component’s state data changes, the rendered
                markup will be updated by re-invoking render().
              </p>
            </div>
            <div className="col-sm">
              <SandBox />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-sm">
              <span className="text-heading">An Application</span>
              <br />
              <br />
              <p>
                Using props and state, we can put together a small Todo
                application. This example uses state to track the current list
                of items as well as the text that the user has entered. Although
                event handlers appear to be rendered inline, they will be
                collected and implemented using event delegation.
              </p>
            </div>
            <div className="col-sm">
              <SandBox />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
