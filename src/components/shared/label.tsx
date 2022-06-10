export default function Label(props:{
    text:string,
    labelName:string,
    className:string
}){
    return(
        <>
        <label htmlFor={props.labelName}
            className={props.className}>
                {props.text}
            </label>
        </>
    )
}