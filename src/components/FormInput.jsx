const FormInput = ({ type, name, label, defaultValue, size }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        label={label}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
      />
    </div>
  )
}
export default FormInput
