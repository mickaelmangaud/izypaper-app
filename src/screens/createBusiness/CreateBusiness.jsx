import React, { useState } from 'react';
import { Step1, Step2, Step3 } from './steps';

export const CreateBusiness = () => {
  const [step, setStep] = useState(1);
  const [business, setBusiness] = useState({
    country: null,
    type: null,
    name: null,
  });

  const handlePrevtStep = () => step > 1 && setStep(step - 1);
  const handleNextStep = () =>  step < 3 && setStep(step + 1);

  return (
    <div>
      {step === 1 && <Step1 setBusiness={setBusiness} />}
      {step === 2 && <Step2 setBusiness={setBusiness} />}
      {step === 3 && <Step3 setBusiness={setBusiness} />}
      <button onClick={handlePrevtStep}>Previous Step</button> 
      <button onClick={handleNextStep}>Next Step</button> 
    </div>
  )
};
