import Header from "./filter/header";
import './css/survey-form.css';

import Label from "./shared/label";
import InputField from "./shared/input-field";
import { useState } from "react";
import SingleChoiceQuestion from "./shared/single-choice-question";
import { dataSet } from "../dataset";

export default function SurveyForm() {
    const questionArea: any = [];

    const [formValue, setFormValue] = useState({
        name: "",
        company: "",
        email: ""
    })

    dataSet.forEach((element, i) => {
        if (element.type.toLowerCase() === "radio") {
            questionArea.push(
                <div className="question_box mt-4" key={i}>
                    <SingleChoiceQuestion question={element.question}
                        options={element.choices} />
                </div>
            )
        }
    })

    const handelInput = () => {

    }

    return (
        <>
            <div className="main_div">
                <div className="content_box">
                    <Header />
                    <div className="question_container mb-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <Label labelName="name"
                                        className="form-label" text="First Name, Last Name" />
                                    <InputField id="name"
                                        className="form-control"
                                        defaultValue={formValue.name}
                                        onChange={handelInput} />
                                </div>
                                <div className="col-lg-4">
                                    <Label labelName="company"
                                        className="form-label" text="Company" />
                                    <InputField id="company"
                                        className="form-control"
                                        defaultValue={formValue.company}
                                        onChange={handelInput} />
                                </div>
                                <div className="col-lg-4">
                                    <Label labelName="email"
                                        className="form-label" text="Email" />
                                    <InputField id="email"
                                        inputType="email"
                                        className="form-control"
                                        defaultValue={formValue.email}
                                        onChange={handelInput} />
                                </div>
                            </div>

                            <div className="row">
                                {questionArea}
                            </div>

                            <div className="row button">
                                <button className="btn btn-dark mt-5 survey_button">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}