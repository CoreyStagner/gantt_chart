import { useEffect, useState } from 'react';

const styles = `

  input {
    border: 1px solid #333;
  }
  
  input:hover,
  input:active,
  input:target,
  input:focus {
    border: 1px solid #333;
  }

  .field_input {
    padding: 10px;
  }

  input.error {
    border: 2px red solid;
  }

  .hidden {
    display: none;
  }

  .field_error {
    color: red;
    font-size: 10px;
  }

  input.field-input {
    width: 100%;
    margin: 0;
  }
  
  .field-input--label {
    display: block;
    font-size: 1.2rem;
    font-weight: bold;
  }
  
  .field-input--hint {
    font-size: 0.8rem;
    color: var(--color-gray-400);
  }

  .form_input--primary {
    background: var(--color-pink-300);
    color: white;
  }
  
  .form_input--secondary {
    background: var(--color-red-300);
    color: white;
  }

  .form_input--filled {
    background: var(--color-gray-300);
    color: white;
  }
`;
// data includes: {
//   attributes,
//   value,
//   label,
//   hasError,
//   errorMessage,
//   placeholder,
//   onChange,
//   required,
//   validations,
//   type
// }

export default function Input(props) {
  // Default Class Names for the Input Component
  const defaultClassNames = {
    input: 'field-input',
    error: 'field-input--error',
    label: 'field-input--label',
    container: 'field-input--container',
  };
  // Set local state for the input field
  // const [attributes, setAttributes] = useState(props.attributes);
  const [inputValue, setInputValue] = useState(props.value);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (props.onChange) {
      props.onChange(e);
    }
  };

  return (
    props && (
      <div className="field_input">
        <style jsx>{styles}</style>
        {/* Label Element */}
        {props.label && (
          <label
            className={defaultClassNames.label}
            htmlFor={props.inputAttributes.id}
          >
            {props.label}
            {props.inputAttributes.required && ' *'}
          </label>
        )}
        {/* Input Element */}
        <input
          {...props.inputAttributes}
          className={
            props.hasError
              ? `error ${defaultClassNames.input} ${
                  props.inputAttributes.className
                } ${
                  // Add Classes for each variant that was passed in or it will be primary by default.
                  props.variants
                    ? props.variants
                        .split(' ')
                        .map((v) => `form_input--${v}`)
                        .join(' ')
                    : 'form_input--primary'
                }`
              : `${defaultClassNames.input} ${
                  props.inputAttributes.className
                } ${
                  // Add Classes for each variant that was passed in or it will be primary by default.
                  props.variants
                    ? props.variants
                        .split(' ')
                        .map((v) => `form_input--${v}`)
                        .join(' ')
                    : 'form_input--primary'
                }`
          }
          onChange={handleInputChange}
          value={inputValue}
        />
        {/* Error Message */}
        <div className="field_error field-input--error">
          {props.errorMessage}
        </div>
        {/* Hint Text */}
        <div className="field_hint field-input--hint">{props.hintText}</div>
      </div>
    )
  );
}
