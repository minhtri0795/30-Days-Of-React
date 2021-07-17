import React, { Component } from "react";

const Input = ({ text, type }) => {
  return (
    <>
      <label>{text}</label>
      <input type={type}></input>
    </>
  );
};
const InputType = (CompPara, type) => {
  return (props) => {
    return <CompPara {...props} type={type} />;
  };
};
const CheckType = InputType(Input, "checkbox");
const TextType = InputType(Input, "text");
const DateType = InputType(Input, "date");
const HightOrderComponent = () => {
  return (
    <>
      <CheckType text="checkbox" />
      <TextType text="text type" />
      <DateType text="date type" />
    </>
  );
};
export default HightOrderComponent;
