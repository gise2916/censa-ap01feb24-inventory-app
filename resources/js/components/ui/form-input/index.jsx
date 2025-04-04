export default function FormInput({ label = "", ...props }) {
    return (
        <label>
            {label !== "" && <span>{label}</span>}
            <input {...props} />
        </label>
    )
}