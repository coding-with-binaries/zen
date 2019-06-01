import { ErrorMessage, Field, FieldProps } from 'formik';
import React, { useState } from 'react';
import './CustomInputs.css';

type ZenInputProps = {
  type: string;
  label: string;
  [prop: string]: string;
} & FieldProps;

export const ZenInput: React.FC<ZenInputProps> = ({
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

type ZenRadioProps = {
  label: string;
  options: RadioOption[];
} & FieldProps;

export const ZenRadioGroup: React.FC<ZenRadioProps> = ({
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

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type ZenFieldInputProps = InputProps & FieldProps;

const ZenFieldInput: React.FC<ZenFieldInputProps> = props => {
  const { field, form, onChange, onBlur } = props;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.handleChange(e);
    if (onChange) {
      onChange(e);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    form.handleBlur(e);
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <input
      {...props}
      name={field.name}
      value={field.value}
      onBlur={handleBlur}
      onChange={handleChange}
    />
  );
};

type ZenFieldProps = {
  name: string;
} & InputProps &
  Partial<FieldProps>;

export const ZenField: React.FC<ZenFieldProps> = props => (
  <Field component={ZenFieldInput} {...props} />
);

interface DropdownItem {
  id: string | number;
  value: string;
  displayValue?: string;
}

type ZenSearchProps = {
  items: DropdownItem[];
  visible: boolean;
  onItemClick: (id: string | number) => void;
} & ZenFieldProps;

export const ZenSearch: React.FC<ZenSearchProps> = props => {
  const { items, onItemClick, visible, ...fieldProps } = props;
  const [focused, setFocused] = useState(false);

  const onClickDropdownItem = (id: string | number) => () => {
    onItemClick(id);
    setFocused(false);
  };
  return (
    <div
      className="zen-search"
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      <ZenField {...fieldProps} />
      {visible && focused && (
        <div className="zen-dropdown">
          {items.map(item => (
            <span
              key={item.id}
              className="dropdown-item"
              title={item.value}
              onClick={onClickDropdownItem(item.id)}
            >
              {item.displayValue || item.value}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
