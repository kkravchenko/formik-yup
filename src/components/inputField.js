import React from 'react'

export default function InputField({
  error,
  values,
  handleChange,
  touched,
  placeholder,
  type,
  name,
}) {
  return (
    <div className="sign-up__field">
      <input
        placeholder={placeholder}
        className={`sign-up__input ${
          error && touched ? 'sign-up__inp_danger' : ''
        }`}
        type={type}
        name={name}
        onChange={handleChange}
        value={values}
      />
      {error && <p className="sign-up__error">{error && touched && error}</p>}
    </div>
  )
}
