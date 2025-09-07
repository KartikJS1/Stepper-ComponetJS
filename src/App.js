import { useState } from "react";
import Stepper from "./components/Stepper";
import "./styles.css";

export default function App() {
  const steps = [
    {
      label: "Personal Information",
      content: <div>This is my Personal Information</div>,
    },
    {
      label: "Account Information",
      content: <div>This is my Account Information</div>,
    },
    {
      label: "Payment Information",
      content: <div>This is my Payment Information</div>,
    },
    {
      label: "Confirmation",
      content: <div>This is my Confirmation Information</div>,
    },
    {
      label: "Checkout",
      content: <div>This is my Checkout Information</div>,
    },
    {
      label: "Review",
      content: <div>This is my Review Information</div>,
    },
  ];
  return (
    <div className="App">
      <h1>JAISATGURUMAIJS</h1>
      <Stepper steps={steps} />
    </div>
  );
}
