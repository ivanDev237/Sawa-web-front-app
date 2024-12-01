import { Check } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

export default function Stepper({ steps, currentStep }) {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();
  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];

    let count = 0;
    while (count < newSteps.length) {
      // current steps
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          Highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      }
      // steps completed 
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          Highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }
      // steps pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          Highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  };

  useEffect(() => {
    // create object
    const stepsState = steps.map((step, index) => 
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          Highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );

    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={ 
          index !== newStep.length - 1
            ? "w-full flex items-center "
            : "flex items-center"
        }
       >
        <div className="relative flex flex-col items-center text-teal-600 ">
          <div
            className={`rounded-full transition duration-500 ease-in-out border-2
       py-3 flex items-center justify-center border-gray-300 w-12 h-12 
        ${step.selected ? 'bg-green-600 text-white font-bold border border-green-600 ' : ""}` }
          >
            {/* Display number */} 

            {step.completed ? (
                <span className="text-white font-bold text-xl"><Check/></span>
            ): (index + 1)}
          </div>

          <div className={`absolute top-0 text-xs mt-16 font-medium w-32 uppercase flex  justify-center
              ${step.Highlighted ? "text-gray-900" : "text-gray-400" }`}>
            {/* Display descriptio */} 
            {step.description}
          </div>
        </div>
        <div className={`flex-auto border-t-2  transition duration-500 ease-in-out
            ${step.completed ? "border-green-600": "border-gray-300"}`}>
          {/* Description line */}
        </div>
      </div>
    );
  });

  return (
    <div className="mx-4 p-2 flex justify-between items-center">
      {displaySteps}
    </div>
  );
}
