import { createContext, useContext, useState } from "react"


// Type defination of children props which we will pass across components at line 25
interface InputProviderProp {
    children: React.ReactNode
}

type questions={
    question: string,
    response: any,
    uniqueId: string,
    childQuestionOptions:string[];
}

//Creating Context type
type surveyContext = {
    responseArray: any[],
    setValue: (res: questions) => void
}

//Creating context hear with type defined
const Survey = createContext<surveyContext>({
    responseArray:[],
    setValue:(res:questions)=>{}
})


//Wrapper Component which holds contex in application
export const StateContainer = ({ children }: InputProviderProp) => {

    const [responseArray, setResponseArray] = useState([{
        question: "",
        response: "",
        uniqueId: ""
    }])
    function setValue(objects: questions) {
        
        if(objects.childQuestionOptions.indexOf(objects.response)!==-1){
            setResponseArray(prevState=>[
                ...prevState,{
                    "question":objects.question,
                    "response":objects.response,
                    "uniqueId":objects.uniqueId
                }
            ]);
        }
    }
    return (
        <>
            <Survey.Provider value={{ setValue, responseArray }}>
                {children}
            </Survey.Provider>
        </>
    )
}


//Exporting instance of Use Context
export default function SurveyContext() {
    return useContext(Survey);
}