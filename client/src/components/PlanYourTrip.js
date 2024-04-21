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
import { useEffect } from 'react';

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
    const [medicalHistory, setMedicalHistory] = useState({
        gender: '',
        age: '',
        allergies: [],
        medications: []
    });

    const [currentDiagnosis, setCurrentDiagnosis] = useState({
        diagnosis: [],
        symptoms: [],
        symptomDuration: '',
    });

    const [consumerLifestyle, setConsumerLifestyle] = useState({
        tobaccoUse: '',
        exerciseFrequency: '',
        dietDescription: '',
    });

    const [userPreferences, setUserPreferences] = useState({
        destinationPreference: [],
        travelCompanions: '',
        budgetRange: '',
    });

    const [isGeneralFactorsFilled, setIsGeneralFactorsFilled] = useState(false);
    const [isMedicalHistoryFilled, setIsMedicalHistoryFilled] = useState(false);
    const [isCurrentDiagnosisFilled, setIsCurrentDiagnosisFilled] = useState(false);
    const [isConsumerLifestyleFilled, setIsConsumerLifestyleFilled] = useState(false);
    const [isUserPreferencesFilled, setIsUserPreferencesFilled] = useState(false);

    useEffect(() => {
        setIsGeneralFactorsFilled(checkIfGeneralFactorsFilled());
    }, [generalFactors]);

    useEffect(() => {
        setIsMedicalHistoryFilled(checkIfMedicalHistoryFilled());
    }, [medicalHistory]);

    useEffect(() => {
        setIsCurrentDiagnosisFilled(checkIfCurrentDiagnosisFilled());
    }, [currentDiagnosis]);

    useEffect(() => {
        setIsConsumerLifestyleFilled(checkIfConsumerLifestyleFilled());
    }, [consumerLifestyle]);

    useEffect(() => {
        setIsUserPreferencesFilled(checkIfUserPreferencesFilled());
    }, [userPreferences]);

    const checkIfGeneralFactorsFilled = () => {
        const { age, height, weight, gender, occupation, maritalStatus, livingSituation } = generalFactors;
        return !!age && !!height && !!weight && !!gender && !!occupation && !!maritalStatus && !!livingSituation;
    };

    const checkIfMedicalHistoryFilled = () => {
        const { gender, age, allergies, medications } = medicalHistory;
        return !!gender && !!age && allergies.length > 0 && medications.length > 0;
    };

    const checkIfCurrentDiagnosisFilled = () => {
        const { diagnosis, symptoms, symptomDuration } = currentDiagnosis;
        return !!diagnosis.length && !!symptoms.length && !!symptomDuration;
    };

    const checkIfConsumerLifestyleFilled = () => {
        const { tobaccoUse, exerciseFrequency, dietDescription } = consumerLifestyle;
        return !!tobaccoUse && !!exerciseFrequency && !!dietDescription;
    };

    const checkIfUserPreferencesFilled = () => {
        const { destinationPreference, travelCompanions, budgetRange } = userPreferences;
        return !!destinationPreference.length && !!travelCompanions && !!budgetRange;
    };




    const handleGeneralFactors = (event) => {
        const { name, value, type, checked } = event.target;
        setGeneralFactors(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };



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



    const handleConsumerLifestyleChange = (event) => {
        const { name, value } = event.target;
        setConsumerLifestyle(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleUserPreferencesChange = (event) => {
        const { name, value, type, checked } = event.target;
        if (type === 'checkbox') {
            if (checked) {
                setUserPreferences(prevState => ({
                    ...prevState,
                    [name]: [...userPreferences[name], value]
                }));
            } else {
                setUserPreferences(prevState => ({
                    ...prevState,
                    [name]: userPreferences[name].filter(item => item !== value)
                }));
            }
        } else {
            setUserPreferences(prevState => ({
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

    const handleFinish = () => {

        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);

        console.log("General Factors:", generalFactors);
        console.log("Medical History:", medicalHistory);
        console.log("Current Diagnosis:", currentDiagnosis);
        console.log("Consumer Lifestyle:", consumerLifestyle);
        console.log("User Preferences:", userPreferences);
        // Optionally, you can perform any additional actions here, such as sending the data to a server
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
                        <ConsumerLifeStyle consumerLifestyle={consumerLifestyle} handleConsumerLifestyleChange={handleConsumerLifestyleChange} />
                    }
                    {(activeStep + 1) === 5 &&
                        <UserPreferences userPreferences={userPreferences} handleUserPreferencesChange={handleUserPreferencesChange} />
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

                        <Button
                            onClick={activeStep === steps.length - 1 ? handleFinish : handleNext}
                            disabled={
                                (activeStep === 0 && !isGeneralFactorsFilled) ||
                                (activeStep === 1 && !isMedicalHistoryFilled) ||
                                (activeStep === 2 && !isCurrentDiagnosisFilled) ||
                                (activeStep === 3 && !isConsumerLifestyleFilled) ||
                                (activeStep === 4 && !isUserPreferencesFilled)
                            }
                        >
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>


                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}
