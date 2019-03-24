import React from 'react';
import Select from 'react-select';
import classnames from 'classnames';
import makeAnimated from 'react-select/lib/animated';

export function renderTextInput({
  input,
  className,
  label,
  placeholder,
  disabled,
  isRequired,
  meta: {
    touched, error, warning,
  },
  ...rest
}) {
  const inputClassNames = getInputClassNames({
    className, touched, error,
  });

  return (
    <div>
      <input
        {...input}
        className={inputClassNames}
        onBlur={input.onBlur}
        onChange={input.onChange}
        value={input.value}
        placeholder={placeholder || label}
        type="text"
        disabled={disabled}
        {...rest}
      />
      {renderError({
        error, touched, warning,
      })}
    </div>
  );
}

export function renderTextArea({
  input,
  className,
  label,
  placeholder,
  disabled,
  isRequired,
  meta: {
    touched, error, warning,
  },
  ...rest
}) {
  const inputClassNames = getInputClassNames({
    className, touched, error,
  });
  return (
    <textarea
      {...input}
      className={inputClassNames}
      onBlur={input.onBlur}
      onChange={input.onChange}
      value={input.value}
      placeholder={placeholder || label}
      type="text"
      disabled={disabled}
      {...rest}
    />
  );

}

export function renderReadOnlyText({
  input, id, className, label, isRequired, meta: {
    touched, error, warning,
  },
}) {
  return (
    <div>
      {renderLabel({
        input, label, isRequired,
      })}
      <span className={className} id={id}>
        {input.value}
      </span>
      {renderError({
        error, touched, warning,
      })}
    </div>
  );
}

export function renderCheckbox({
  input,
  className,
  label,
  isRequired,
  disabled,
  meta: {
    touched, error, warning,
  },
  ...rest
}) {
  let classes = 'form-control no-outline';
  if (className) {
    classes += ` ${className}`;
  }

  return (
    <div>
      {renderLabel({
        input, label, isRequired,
      })}
      <input
        {...input}
        className={classes}
        disabled={disabled}
        checked={input.value}
        placeholder={label}
        type="checkbox"
        {...rest}
      />
      {renderError({
        error, touched, warning,
      })}
    </div>
  );
}

export function renderSelect({
  input,
  label,
  multiSelect,
  closeOnSelect,
  defaultValue,
  defaultValueIndex,
  options,
  isRequired,
  clearable = false,
  meta: {
    touched, error, warning,
  },
  ...rest
}) {
  let defaultVal = defaultValue;
  if (defaultValueIndex >= 0) {
    defaultVal = options[defaultValueIndex];
  }

  let inputClassNames = classnames({ 'input-validation-error': touched && error !== undefined });

  inputClassNames += ' select-wrapper';

  const selectStyles = {
    clearIndicator: base => ({
      ...base,
      cursor: 'pointer',
      fontSize: '18px',
      lineHeight: 1,
      '&:hover': { color: '#d0021b' },
    }),
    container: (base, state) => ({
      ...base,
      borderRadius: '5px',
    }),
    control: (base, state) => ({
      ...base,
      boxShadow: state.isFocused ? null : null,
      '&:hover': state.isFocused
        ? null
        : {
          border: '1px solid #111111',
          borderTop: '1px solid #999999',
          borderRight: '1px solid #666666',
          borderLeft: '1px solid #999999',
          borderBottom: '1px solid #666666',
        },
      backgroundColor: error ? 'hsl(342.2, 55.6%, 98.2%)' : 'white',
    }),
    dropdownIndicator: base => ({
      ...base,
      cursor: 'pointer',
    }),
    indicatorSeparator: base => ({ base }),
    input: base => ({
      ...base,
      outline: 'none',
      textDecoration: 'none',
    }),
    menu: base => ({
      ...base,
      marginTop: 0,
      textAlign: 'left',
      wordWrap: 'break-word',
      maxHeight: '210px',
      overflowY: 'auto',
    }),
    menuList: base => ({
      ...base,
      hyphens: 'auto',
      borderRadius: 0,
      padding: 0,
    }),
    multiValue: base => ({
      ...base,
      '&:hover': {
        color: '#0071e6',
        backgroundColor: 'rgba(0, 113, 230, 0.08)',
      },
      marginTop: '6px',
      marginRight: '4px',
      marginBottom: '6px',
      marginLeft: '4px',
    }),
    multiValueRemove: base => ({
      ...base,
      cursor: 'pointer',
      width: '17px',
    }),
    noOptionsMessage: base => ({
      ...base,
      color: '#999999',
    }),
    option: (base, state) => ({
      ...base,
      cursor: 'pointer',
      height: '2.4em',
      paddingTop: '6px',
      paddingRight: '1em',
      paddingBottom: '4px',
      paddingLeft: '1em',
      boxShadow: state.isFocused ? null : null,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    }),
    valueContainer: base => ({
      ...base,
      height: input.name === 'roles' ? 'auto' : '20px',
    }),
  };

  return (
    <div>
      {renderLabel({
        input, label, isRequired,
      })}
      <div className={inputClassNames}>
        <Select
          {...input}
          components={makeAnimated()}
          className={`Select ${input.name}`}
          classNamePrefix={'Select'}
          clearable={clearable}
          closeOnSelect={closeOnSelect}
          isMulti={multiSelect}
          name={input.name}
          onBlur={() => input.onBlur(input.value)}
          options={options}
          styles={selectStyles}
          value={input.value || defaultVal}
          {...rest}
        />
      </div>
      {renderError({
        error, touched, warning,
      })}{' '}
    </div>
  );
}

const renderError = ({
  touched, error, warning,
}) =>
  touched &&
  ((error && <span className="field-validation-error">{error}</span>) || (warning && <span>{warning}</span>));

const renderLabel = ({
  input, label, isRequired,
}) => {
  if (typeof label === 'function') {
    return label();
  }
  return (
    <label htmlFor={input.name}>
      {isRequired && <span className="required-symbol color-red"> *</span>}
      {label}
    </label>
  );
};

const getInputClassNames = ({
  className, touched, error,
}) => {
  let inputClassNames = classnames({
    'form-control': true,
    'input-validation-error': touched && error !== undefined,
  });
  if (className !== undefined) {
    inputClassNames += ` ${className}`;
  }
  return inputClassNames;
};
