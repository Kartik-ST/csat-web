export default function RadioInput(props: {
    id: string,
    onChange: any,
    value: string,
    text: string,
    className: string,
    name: string
}) {
    return (
        <div className={props.className}>
            <input
                id={props.id}
                onChange={props.onChange}
                value={props.value}
                name={props.name}
                type="radio"
            />
            <label
                htmlFor={props.id}>
                {props.text}
            </label>
        </div>
    )
}