import { IForm, IFormField } from "../types/types.tsx";
import Input from "./Input.tsx";

const Form = ({ fields, id, title, submitButtonValue }: IForm) => {
  return (
    <>
      <form id={id} className="form">
        <span id={`form-title`}>{title}</span>
        {fields.map((field: IFormField) => (
          <Input
            label={field.label}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
          />
        ))}
        <input
          id="form-submit-button"
          type="submit"
          value={submitButtonValue}
        />
      </form>
    </>
  );
};

export default Form;
