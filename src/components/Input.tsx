type InputProps = {
  label?: string;
  type: string;
  name: string;
  placeholder?: string;
};

const Input = ({ label, type, name, placeholder }: InputProps) => {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} placeholder={placeholder}></input>
    </div>
  );
};

export default Input;
