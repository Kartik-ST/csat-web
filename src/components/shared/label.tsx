export default function Label(props: {
    text: string,
    labelName: string,
    className: string,
    onChange?: any
}) {
    return (
        <>
            <label htmlFor={props.labelName}
                className={props.className}
                onChange={props.onChange}
            >
                {props.text}
            </label>
        </>
    )
}