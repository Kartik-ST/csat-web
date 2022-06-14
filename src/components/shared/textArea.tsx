export default function TextAreaSection(props: {
    id: string,
    name: string,
    rows: number,
    cols: number,
    text?: string,
    placeHolder?:string
}) {
    return (
        <>
            <textarea id={props.id} name={props.name} rows={props.rows} cols={props.cols} placeholder={props.placeHolder}></textarea>
        </>
    )
}