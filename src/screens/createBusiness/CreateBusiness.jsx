import React, { useState } from 'react';
import { Step1, Step2, Step3 } from './steps';

export const CreateBusiness = () => {
  const [step, setStep] = useState(1);

  const handlePrevtStep = () => step > 1 && setStep(step - 1);
  const handleNextStep = () =>  step < 3 && setStep(step + 1);

  return (
    <div>
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      <button onClick={handlePrevtStep}>Previous Step</button> 
      <button onClick={handleNextStep}>Next Step</button> 
    </div>
  )
};