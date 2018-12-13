"use strict";

var counter = 0;

var addOne = function addOne() {
  counter++;
  render();
};

var deductOne = function deductOne() {
  counter--;
  render();
};
var resetCounter = function resetCounter() {

  counter = 0;
  render();
};
var render = function render() {
  var counterTemplate = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      { id: "counter", className: "counter" },
      counter
    ),
    React.createElement(
      "button",
      { onClick: addOne },
      "+1"
    ),
    React.createElement(
      "button",
      { onClick: deductOne },
      "-1"
    ),
    React.createElement(
      "button",
      { onClick: resetCounter },
      "reset"
    )
  );

  var myApp = document.querySelector("#hook");

  ReactDOM.render(counterTemplate, myApp);
};
render();
