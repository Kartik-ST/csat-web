export const dataSet = [
    {
        "question": "How satisfied were you with your experience with Successive Technologies?",
        "choices": ["Very Poor", "Poor", "Neutral", "Good", "Very Good"],
        "childQuestionOption": ["Good", "Very Good"],
        "type": "Radio",
        "isParent": "Yes",
        "status": true,
        "childSchema": [{
            "question": "How likely are you to recommend our services to a colleague?",
            "choices": ["1", "2", "3", "4", "5"],
            "childQuestionOption": ["3"],
            "type": "Radio",
            "isParent": "No",
            "status": true,
            "childSchema": [{
                "question": "How likely are you to recommend our services to a colleague?",
                "choices": ["1", "2", "3", "4", "5"],
                "childQuestionOption": ["5"],
                "type": "Radio",
                "isParent": "No",
                "status": true,
                "childSchema": [{
                    "question": "How likely are you to recommend our services to a colleague?",
                    "choices": ["1", "2", "3", "4", "5"],
                    "childQuestionOption": ["1"],
                    "type": "Radio",
                    "isParent": "No",
                    "status": true,
                    "childSchema": [{
                        "question": "How likely are you to recommend our services to a colleague?",
                        "choices": ["1", "2", "3", "4", "5"],
                        "childQuestionOption": ["2"],
                        "type": "Radio",
                        "isParent": "No",
                        "status": true
                    }]
                }]
            }]
        }]
    },
    {
        "question": "Do you Like my skills?",
        "choices": ["1", "2", "3", "4", "5"],
        "type": "Radio",
        "isParent": "Yes",
        "status": true,
        "childSchema":[]
    },
    {
        "question": "I know you do?",
        "choices": [],
        "childQuestionOption":[],
        "type": "Boolean",
        "isChild": "No",
        "isParent": "Yes",
        "status": true,
        "childSchema":[]
    }
]