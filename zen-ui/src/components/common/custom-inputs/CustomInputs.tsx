import { ErrorMessage, FieldProps } from 'formik';
import React from 'react';
import './CustomInputs.css';

type InputProps = {
  type: string;
  label: string;
  [prop: string]: string;
} & FieldProps;

export const ZenInput: React.FC<InputProps> = ({
  field,
  form,
  label,
  ...props
}) => (
  <div className="zen-input-container">
    <label className="zen-input-label">{label}</label>
    <div className="zen-input-wrapper">
      <input
        {...field}
        {...props}
        className={`zen-input ${props.className || ''}`}
      />
      <span className="zen-input-error">
        <ErrorMessage name={field.name} />
      </span>
    </div>
  </div>
);

interface RadioOption {
  id: string;
  value: string;
  label?: string;
}

type RadioProps = {
  label: string;
  options: RadioOption[];
} & FieldProps;

export const ZenRadioGroup: React.FC<RadioProps> = ({
  field,
  form,
  label,
  options
}) => (
  <div className="zen-input-container">
    <label className="zen-input-label">{label}</label>
    <div className="zen-radio-wrapper">
      {options.map(option => (
        <div key={option.id} className="zen-radio-control">
          <input
            className="zen-radio"
            type="radio"
            id={option.id}
            defaultChecked={form.values[field.name] === option.value}
            {...field}
            name={field.name}
            value={option.value}
          />
          <label htmlFor={option.id}>{option.label || option.value}</label>
        </div>
      ))}
      <span className="zen-input-error">
        <ErrorMessage name={field.name} />
      </span>
    </div>
  </div>
);
