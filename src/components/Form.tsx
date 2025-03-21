import { IForm, IFormField } from "../types/types.tsx";
import Input from "./Input.tsx";
import Button from "./Button.tsx";
import { Link } from "react-router";

const Form = ({ fields, id, title, submitButtonValue, linkPath }: IForm) => {
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
        <Link to={linkPath}>
          <Button type="submit">{submitButtonValue}</Button>
        </Link>
      </form>
    </>
  );
};

export default Form;
