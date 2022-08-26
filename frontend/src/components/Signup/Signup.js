import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Component1 from '../Steps/Component1';
import Component2 from '../Steps/Component2';
import Component3 from '../Steps/Component3';
import Component4 from '../Steps/Component4';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setField } from '../../features/auth/registerSlice';
import { useNavigate } from 'react-router-dom';

const steps = ['Register','Education', 'Work Experience', 'Startup Details'];
const state = ['details', 'education', 'work', 'startup'] 

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {page} = useSelector(state => state.register)
  const register = useSelector(state => state.register)

  const totalSteps = () => {
    return steps.length;
  };

  const handleNext = () => {
    console.log(register[state[page]])
    if(register[state[page]]) {
      if(page===4) {
        dispatch(setField({field: 'page', value: 0}))
      } else {
        console.log(page)
        dispatch(setField({field: 'page', value: page+1}))
      }
    }
  };

  const handleBack = () => {
    dispatch(setField({field: 'page', value: page-1}))
  };

  return (
    <Box sx={{ width: '100%' }}>
      <div>
        <div class="container max-w-[50%] mx-auto flex-1 flex flex-col items-center justify-center px-1 py-4">
          <h1 className='text-2xl m-8 font-bold'>Profile Details </h1>
          <div className='w-full my-4'>
            <Stepper activeStep={page} alternativeLabel>
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel color="inherit">
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
          { page === 1 ? <Component2 /> : page === 2 ? <Component1 /> : page === 3 ? <Component3 /> : <Component4 /> }
          <div className='w-full'>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={page === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {page !== steps.length &&
                <Button onClick={handleNext}>
                  {page === totalSteps() - 1
                    ? 'Finish'
                    : 'Next'}
                </Button>
              }
            </Box>
          </div>
        </div>
      </div>
    </Box>
  );
}
