import React, { useState } from 'react';
import { ScreenWrapper } from '../../components';
import { Step1, Step2, Step3 } from './steps';


export const CreateBusiness = () => {
  const [step, setStep] = useState(1);
  const [business, setBusiness] = useState({
    country: null,
    type: null,
    name: null,
  });

  const handleGoPrevtStep = () => step > 1 && setStep(step - 1);
  const handleGoNextStep = () =>  step < 3 && setStep(step + 1);

  return (
    <ScreenWrapper>
      {step === 1 && <Step1 setBusiness={setBusiness} />}
      {step === 2 && <Step2 setBusiness={setBusiness} />}
      {step === 3 && <Step3 setBusiness={setBusiness} />}
      <button onClick={handleGoPrevtStep}>Previous Step</button> 
      <button onClick={handleGoNextStep}>Next Step</button> 
    </ScreenWrapper>
  )
};
