export const dataSet = [
    {
        "question":"How satisfied were you with your experience with Successive Technologies?",
        "choices":["Very Poor", "Poor", "Neutral","Good","Very Good"],
        "type":"Radio",
        "isParent":"Yes",
        "status":true,
        "childSchema":{
            "question":"How likely are you to recommend our services to a colleague?",
            "choices":["1", "2", "3","4","5"],
            "type":"Radio",
            "isParent":"No",
            "status":true
        }
    },
    {
        "question":"How likely are you to recommend our services to a colleague?",
        "choices":["1", "2", "3","4","5"],
        "type":"Radio",
        "isParent":"Yes",
        "status":true
    },
    {
        "question":"Can our sales team contact you for a referral?",
        "choices":[],
        "type":"Boolean",
        "isChild":"No",
        "isParent":"Yes",
        "status":true
    }
]