export const dataSet = [
    {
        "questionText": "How satisfied were you with your experience with Successive Technologies?",
        "choices": ["Very Poor", "Poor", "Neutral", "Good", "Very Good"],
        "uniqueId": "experience",
        "childQuestionOption": ["Good", "Very Good"],
        "displayOrder":0,
        "type": "Radio",
        "isParent": "Yes",
        "status": true,
        "childSchema": [{
            "questionText": "How likely are you to recommend our services to a colleague?",
            "choices": ["1", "2", "3", "4", "5"],
            "childQuestionOption": ["3"],
            "uniqueId":"recomendation",
            "displayOrder":1,
            "type": "Radio",
            "isParent": "No",
            "status": true,
            "childSchema": [{
                "questionText": "How likely are you to recommend our services to a colleague?",
                "choices": ["1", "2", "3", "4", "5"],
                "childQuestionOption": ["5"],
                "uniqueId":"services",
                "displayOrder":2,
                "type": "Radio",
                "isParent": "No",
                "status": true,
                "childSchema": [{
                    "questionText": "How likely are you to recommend our services to a colleague?",
                    "choices": ["1", "2", "3", "4", "5"],
                    "childQuestionOption": ["1"],
                    "uniqueId":"chield3",
                    "displayOrder":3,
                    "type": "Radio",
                    "isParent": "No",
                    "status": true,
                    "childSchema": [{
                        "questionText": "How likely are you to recommend our services to a colleague?",
                        "choices": ["1", "2", "3", "4", "5"],
                        "childQuestionOption": [],
                        "uniqueId":"chield4",
                        "displayOrder":4,
                        "type": "Radio",
                        "isParent": "No",
                        "status": true
                    }]
                }]
            }]
        }]
    },
    {
        "questionText": "Do you Like my skills?",
        "choices": ["1", "2", "3", "4", "5"],
        "childQuestionOption":[],
        "uniqueId":"skills1",
        "type": "Radio",
        "displayOrder":0,
        "isParent": "Yes",
        "status": true,
        "childSchema":[]
    },
    {
        "questionText": "I know you do?",
        "choices": [],
        "childQuestionOption":[],
        "uniqueId":"personal",
        "type": "Boolean",
        "displayOrder":0,
        "isParent": "Yes",
        "status": true,
        "childSchema":[]
    }
]