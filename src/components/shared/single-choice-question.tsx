import '../css/survey-form.css'
import Label from './label'
import { useId, useState } from 'react'
import RadioInput from './radio-input'



export default function SingleChoiceQuestion(props: any) {
    const {
        questionObject: {
            question,
            choices,
            childQuestionOption,
            type,
            isParent,
            status,
            childSchema
        }
    } = props || {}

    // ID Hook for generatingb dynamic ID
    const id = useId();


    // useState for setting the value from the form
    const [response, setResponse] = useState({
        selection: "selected",
        selected: ""
    });


    // Calling Event onChange; and setting value of selection
    // From chield component

    const handelInput = (event: any) => {
        const key = event.target.name;
        const value = event.target.value;
        setResponse({ ...response, [key]: value })

    }

    //veriable declaration for storing multiple
    // option templates
    const option: any = []



    // Creating and pushing all options value inside a Array
    choices.forEach((element: any, i: number) => {
        option.push(
            <RadioInput
                onChange={handelInput}
                id={id}
                text={element}
                value={element}
                name={response.selection}
                className="options_section"
                key={i}
            />
        )
    })
    console.log(response)
    // Rendering this component
    return (
        <>
            <div className="question_container mt-5">
                <Label labelName="Question"
                    className="form-label"
                    text={question} />
            </div>
            <div className="options_section">
                {option}
            </div>

            {/* *********************************************************************** */}
            {/* Calling Recursion for this component for renduring same component */}
            {/* *********************************************************************** */}
            {
                childSchema &&
                childSchema.length > 0 &&
                (childQuestionOption.indexOf(response.selected) !== -1) &&
                childSchema.map((val: any, i: number) =>
                    <div className="question_box mt-4" key={i}>
                        <SingleChoiceQuestion questionObject={val} />
                    </div>
                )
            }

        </>
    )
}

