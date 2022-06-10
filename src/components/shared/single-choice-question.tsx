import '../css/survey-form.css'
import Label from './label'
import InputField from './input-field'
import React, { useId } from 'react'



export default function SingleChoiceQuestion(props: {
    question: string,
    options: string[]
}) {
    const id = useId();

    function handelInput() {

    }

    const option: any = []

    props.options.forEach((element, i) => {
        option.push(
            <React.Fragment key={id+i}>
                <InputField inputType='radio'
                    id={id}
                    className="option_input"
                    defaultValue=''
                    onChange={handelInput}
                    key={i} />
                <Label labelName="option"
                    className='options_value'
                    text={element} 
                    />
            </React.Fragment>
        )
    })
    return (
        <>
            <div className="question_container mt-5">
                <Label labelName="Question"
                    className="form-label"
                    text={props.question} />
            </div>
            <div className="options_section">
                {option}
            </div>
        </>
    )
}

