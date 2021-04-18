import React from 'react'

export const Form = ({ handleSubmit, register, errors }) => {
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <input
        id="email"
        {...register("email", {
          required: "required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Entered value does not match email format"
          }
        })}
        type="email"
      />
      {errors.email && <span role="alert">{errors.email.message}</span>}

      <input
        id="password"
        {...register("password", {
          required: "required",
          minLength: {
            value: 5,
            message: "min length is 5"
          }
        })}
        type="password"
      />
      {errors.password && <span role="alert">{errors.password.message}</span>}

      <button className="btn btn-dark btn-lg btn-block" style={{ width: '100%' }} type="submit">
        Registrarse
      </button>

    </form>
  )
}
