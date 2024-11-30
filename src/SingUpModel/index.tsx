import React, { useState } from "react";
import Stepper from "../components/Stepper/Stepper";
import StepperControl from "../components/StepperControl/StepperControl";
import { StepperContext } from "../components/contexts/stepperContext";
import Account from "../components/Steps/Account";
import Detail from "../components/Steps/Detail";
import AutherData from "../components/Steps/AutherData";
import InputFileUpload from "../components/Steps/Upload";
import Final from "../components/Steps/Final";
import { images } from "../constants/images";
import {useTheme} from "../hooks/useTheme"
 


const SingUpModel = () => {
  const [currentStep, SetcurrentStep] = useState(1);
  const [userData, setUserDate] = useState("");
  const [finalData, setFinalData] = useState([]);

  const { theme, setTheme } = useTheme();

  const steps = [
    "Setp one ",
    "Setp two",
    "Setp three",
    "upload",
    "Complet",
  ];

  const displayStep = (step: any) => {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <AutherData />;
      case 3:
        return <Detail />;
      case 4:
        return <InputFileUpload />;
      case 5:
        return <Final />;

      default:
    }
  };

  const handleClick = (direction: any) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;

    newStep > 0 && newStep <= steps.length && SetcurrentStep(newStep);
  };
  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-xl  bg-white  dark:bg-slate-900 flex justify-center items-center flex-col">
      <div className=" w-[400px] text-center flex  justify-center items-center">
        <img
          src={images.sawa_logo}
          alt="SAWA Logo"
          className="mx-auto w-1/2 object-cover"
        />
        {/* <div className=" absolute w-[200px] ">
          <img
            src={images.Polymer}
            alt="polymer background"
            className="object-cover"
          />
        </div> */}
      </div>
      {/* stepper*/}
      <div className=" container horizontal  ml-3">
        <Stepper steps={steps} currentStep={currentStep} />
        {/* display components */}
        <div className="my-5 p-10">
          <StepperContext.Provider
            value={{
              userData,
              setUserDate,
              finalData,
              setFinalData,
            }}
          >
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>
      </div>
      {/* Navigation */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          step={steps}
        />
      )}
    </div>
  );
};

export default SingUpModel;
