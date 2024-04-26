const treatmentPlanData = {
    "AcuteInfection": {
        "Description": "Acute infections are usually caused by bacteria, viruses, or other pathogens. They typically come on rapidly and have a short duration.",
        "Treatment": {
            "Medication": "Antibiotics for bacterial infections, antiviral drugs for viral infections, rest, fluids, and symptom management (e.g., pain relievers, decongestants).",
            "Duration": "Treatment duration varies depending on the type and severity of the infection."
        },
        "Complications": "Complications can include the spread of infection to other parts of the body, organ failure, and in severe cases, sepsis.",
        "Prevention": "Preventive measures include good hygiene practices (e.g., handwashing), vaccination, and avoiding contact with infected individuals."
    },
    "ChronicCondition": {
        "Description": "Chronic conditions are long-lasting health conditions that often require ongoing medical care and management.",
        "Treatment": {
            "Medication": "Lifestyle modifications (e.g., diet, exercise), medication management, regular monitoring, and possibly surgery or other interventions depending on the condition.",
            "Duration": "Treatment is ongoing and may need adjustment over time."
        },
        "Complications": "Complications can vary widely depending on the specific condition but may include organ damage, disability, and reduced quality of life.",
        "Prevention": "Preventive measures often focus on lifestyle changes (e.g., healthy diet, regular exercise) and regular medical check-ups."
    },
    "Injury": {
        "Description": "Injuries can range from minor cuts and bruises to severe fractures and sprains.",
        "Treatment": {
            "Medication": "RICE method (Rest, Ice, Compression, Elevation), pain management (e.g., NSAIDs), and immobilization (e.g., cast, brace).",
            "Duration": "Physical therapy, occupational therapy, and possibly surgery for severe cases."
        },
        "Complications": "Complications can include delayed healing, chronic pain, and long-term disability.",
        "Prevention": "Preventive measures include using proper safety equipment (e.g., helmets, seat belts), maintaining a safe environment, and practicing good body mechanics."
    },
    "NeurologicalDisorder": {
        "Description": "Neurological disorders affect the brain, spinal cord, or nerves.",
        "Treatment": {
            "Medication": "Medication to manage symptoms, physical therapy, occupational therapy, speech therapy, and possibly surgery or other interventions depending on the disorder.",
            "Duration": "Treatment is often long-term and may require adjustment over time."
        },
        "Complications": "Complications can vary widely depending on the specific disorder but may include paralysis, cognitive impairment, and sensory deficits.",
        "Prevention": "Preventive measures often focus on lifestyle changes (e.g., healthy diet, regular exercise), avoiding known risk factors (e.g., smoking, excessive alcohol consumption), and regular medical check-ups."
    },
    "GastrointestinalIssue": {
        "Description": "Gastrointestinal issues affect the digestive tract and can range from mild to severe.",
        "Treatment": {
            "Medication": "Dietary changes (e.g., avoiding trigger foods), medication (e.g., antacids, antibiotics for bacterial infections), lifestyle modifications, and possibly surgery for severe cases.",
            "Duration": "Treatment varies depending on the specific issue."
        },
        "Complications": "Complications can include malnutrition, dehydration, and in severe cases, intestinal obstruction or perforation.",
        "Prevention": "Preventive measures include maintaining a healthy diet, staying hydrated, and avoiding known trigger foods (e.g., spicy or fatty foods)."
    },
    "CardiovascularCondition": {
        "Description": "Cardiovascular conditions affect the heart and blood vessels.",
        "Treatment": {
            "Medication": "Medication (e.g., blood thinners, beta-blockers), lifestyle changes (e.g., diet, exercise), surgery (e.g., angioplasty, bypass surgery), and cardiac rehabilitation.",
            "Duration": "Treatment is often long-term and may require lifelong management."
        },
        "Complications": "Complications can include heart attack, stroke, and heart failure.",
        "Prevention": "Preventive measures include maintaining a healthy lifestyle (e.g., healthy diet, regular exercise), managing stress, and avoiding tobacco use."
    },
    "DermatologicalIssue": {
        "Description": "Dermatological issues affect the skin, hair, and nails.",
        "Treatment": {
            "Medication": "Topical treatments (e.g., creams, ointments), oral medication (e.g., antibiotics, antifungals), phototherapy, and possibly surgery or other interventions depending on the condition.",
            "Duration": "Treatment varies depending on the specific issue."
        },
        "Complications": "Complications can include scarring, skin discoloration, and secondary infections.",
        "Prevention": "Preventive measures include maintaining good skin hygiene, avoiding known irritants, and protecting the skin from excessive sun exposure."
    },
    "MentalHealthConcern": {
        "Description": "Mental health concerns affect a person's thoughts, emotions, and behavior.",
        "Treatment": {
            "Medication": "Therapy (e.g., cognitive-behavioral therapy, psychotherapy), medication (e.g., antidepressants, antipsychotics), lifestyle changes, and support groups.",
            "Duration": "Treatment is often long-term and may require a combination of approaches."
        },
        "Complications": "Complications can include social isolation, impaired functioning, and in severe cases, self-harm or suicide.",
        "Prevention": "Preventive measures include early detection and intervention, stress management, and building strong support networks."
    }
}

module.exports = treatmentPlanData
