import React from 'react'

const StepperControl = ({handleClick,currentStep,step}) => {

  return (
    <div className='container horizontal justify-around  flex  pb-5'>
        {/* Back button */}
        <button 
        onClick={ ()=>handleClick('') }
        className={`text-slate-400 py-2 px-4 rounded-xl bg-white uppercase border-2 border-slate-300 font-semibold
        cursor-pointer hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out 
        ${currentStep ===1 ? "cursor-not-allowed opacity-50" : ""}`}>
            Back</button>
        
        {/* Next button */}
        <button
         onClick={ ()=>handleClick('next') }
        className='text-white  py-2 px-4 rounded-xl bg-green-700 uppercase  font-semibold
        cursor-pointer hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out'>
            {currentStep === step.length - 1 ? "Confirm" : "Next"}
        </button>
        </div>
  )
}

export default StepperControl