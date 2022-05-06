import React from "react";

import { Contanier } from "./stepper.styles";

const Stepper = ({ currentStep, children }) => {
  const steps = [
    "Register Student",
    "Register Father",
    "Register Mother",
    "Print credentials",
  ];
  return (
    <Contanier>
      <div className="header">
        <div className="nav">
          {steps.map((step, index) => {
            const isActive = index === currentStep;
            return (
              <div className="tab" key={index}>
                <div
                  className={`circle outer-circle ${
                    isActive && "active-outer"
                  }`}
                >
                  <div
                    className={`circle inner-circle ${
                      isActive && "active-inner"
                    }`}
                  />
                </div>
                <p
                  className={` tab-name ${isActive && "active "} `}
                  style={{
                    color: `${isActive ? "#F79E01" : "#071928"}`,
                  }}
                >
                  {step}
                </p>
              </div>
            );
          })}
          <hr className="progress" />
        </div>
      </div>
      <div className="content">
        {React.Children.map(children, (child, index) => {
          if (index === currentStep) {
            return <div key={index}>{child}</div>;
          } else return null;
        })}
      </div>
    </Contanier>
  );
};

export default Stepper;
