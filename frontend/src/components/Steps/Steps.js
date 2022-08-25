import React from "react";
import { Stepper, Step, StepLabel, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import  Component1 from "./Component1";
import  Component2 from "./Component2";
import  Component3  from "./Component3";

function getSteps() {
  return ["Step1", "Step2", "Step3"];
}

const Steps = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [autoPopulateData, setAutoPopulateData] = React.useState([]);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  const handleOnRemoveFile = (data) => {
    console.log(data, "ON REMOVE");
  };

  const handleOnDrop = (data) => {
    console.log(data, "ON ADD");
    setAutoPopulateData(data);
    handleNext();
  };

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep < 1 ? (
        <div>
            <Component1
        //   handleNext={handleNext}
        ></Component1>
          <Button
            style={{ marginBottom: 5 }}
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            Add From Scratch
          </Button>
         
        </div>
      ) : activeStep === 1 ? (
        <>
        <Component2
        //   handleNext={handleNext}
        ></Component2>
        <Button
            style={{ marginBottom: 5 }}
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            Submit
          </Button>
          </>
      ) : (
        <Component3></Component3>
      )}
    </div>
  );
};

export default Steps;
