export default function InputField(props:{
    inputType?:string,
    id:string,
    className:string,
    autoCheck?:string,
    defaultValue?:string,
    onChange:any
}){

    return(
        <>
            <input type={props.inputType?props.inputType:"text"}
                id={props.id?props.id:""}
                className={props.className?props.className:""}
                autoComplete={props.autoCheck?props.autoCheck:"off"}
                name={props.id?props.id:""}
                value={props.defaultValue?props.defaultValue:""}
                onChange={props.onChange}
            />
        </>
    )
}