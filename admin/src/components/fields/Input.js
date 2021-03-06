import React from 'react';

/**
 * Text Input
 *
 * @param  {Object}   props             Component props.
 * @param  {String}   props.value       Current value.
 * @param  {Function} props.onChange    Handle input state change.
 * @param  {String}   props.title       Optional. Title above input.
 * @param  {String}   props.name        Name attribute for input.
 * @param  {String}   props.type        Type attribute for input, defaults to "text".
 * @param  {String}   props.placeholder Optional. Field placeholder text.
 * @param  {String}   props.help,       Optional. Help text below input.
 * @param  {Boolean}  props.hasError    Whether currently has error.
 * @param  {Boolean}  props.isRequired  Whether field is required.
 * @param  {String}   props.className   Optional. CSS class(es).
 * @return {Component}
 */
const Input = props => {
  const {
    value,
    onChange,
    title,
    name,
    type,
    placeholder,
    help,
    hasError,
    isRequired,
    className
  } = props;

  return (
    <p className={hasError && 'field-error'}>
      {title && (
        <label>
          {title}
          {isRequired && <span className="required">*</span>}
        </label>
      )}
      <input
        value={value}
        type={type ? type : 'text'}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        required={isRequired}
        className={className}
      />
      {help && <span className="help-text">{help}</span>}
    </p>
  );
};

export default Input;
