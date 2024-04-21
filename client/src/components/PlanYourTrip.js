import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MedicalHistory from './MedicalHistory';
import CurrentDiagnosis from './CurrentDiagnosis';
import ConsumerLifeStyle from './ConsumerLifeStyle';
import UserPreferences from './UserPreferences';
import RecommendedHospital from './RecommendedHospital';
import GeneralFactors from './GeneralFactors';
import { useState } from 'react';

// Define steps for the health risk assessment questionnaire
const steps = ['General Factors', 'Medical History', 'Current diagnosis', 'Consumer Lifestyle', 'User Preferences'];
export default function PlanYourTrip() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const [generalFactors, setGeneralFactors] = React.useState({
        age: '',
        height: '',
        weight: '',
        gender: '',
        occupation: '',
        maritalStatus: '',
        livingSituation: ''
    });

    const handleGeneralFactors = (event) => {
        const { name, value, type, checked } = event.target;
        setGeneralFactors(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const [medicalHistory, setMedicalHistory] = useState({
        gender: '',
        age: '',
        allergies: [],
        medications: []
    });

    const handleMedicalHistoryChange = (event) => {
        const { name, value, type, checked } = event.target;
        if (type === 'checkbox') {
            if (checked) {
                setMedicalHistory(prevState => ({
                    ...prevState,
                    [name]: [...medicalHistory[name], value]
                }));
            } else {
                setMedicalHistory(prevState => ({
                    ...prevState,
                    [name]: medicalHistory[name].filter(item => item !== value)
                }));
            }
        } else {
            setMedicalHistory(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const [currentDiagnosis, setCurrentDiagnosis] = useState({
        diagnosis: [],
        symptoms: [],
        symptomDuration: '',
    });

    const handleCurrentDiagnosisChange = (event) => {
        const { name, value, type, checked } = event.target;
        if (type === 'checkbox') {
            if (checked) {
                setCurrentDiagnosis(prevState => ({
                    ...prevState,
                    [name]: [...currentDiagnosis[name], value]
                }));
            } else {
                setCurrentDiagnosis(prevState => ({
                    ...prevState,
                    [name]: currentDiagnosis[name].filter(item => item !== value)
                }));
            }
        } else {
            setCurrentDiagnosis(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Box sx={{ mt: 2, mb: 1 }}>
                        <RecommendedHospital />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>

                    {(activeStep + 1) === 1 &&
                        <GeneralFactors generalFactors={generalFactors} handleGeneralFactors={handleGeneralFactors} />
                    }
                    {(activeStep + 1) === 2 &&
                        <MedicalHistory medicalHistory={medicalHistory} handleMedicalHistoryChange={handleMedicalHistoryChange} />
                    }
                    {(activeStep + 1) === 3 &&
                        <CurrentDiagnosis currentDiagnosis={currentDiagnosis} handleCurrentDiagnosisChange={handleCurrentDiagnosisChange} />
                    }
                    {(activeStep + 1) === 4 &&
                        <ConsumerLifeStyle />
                    }
                    {(activeStep + 1) === 5 &&
                        <UserPreferences />
                    }
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />


                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}
