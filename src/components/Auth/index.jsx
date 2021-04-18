import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Form } from './Form';
import { UseSetUser } from '../Hooks/UseSetUser';
import { useHistory } from "react-router-dom";
import { v4 as uuid } from 'uuid';

export const Auth = () => {
  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isRegister, setIsRegister] = useState(true)
  const [count, setCount] = useState(0);
  const { createUser } = UseSetUser(history)

  const onSubmit = data => {
    // setCount(count+1)
    let user = { ...data, id: uuid() }
    // localStorage.setItem('count', count);
    createUser(user)
  }

  return (
    <div className="mt-5">
      <h3 className="text-center">
        Registro de usuario
      </h3>
      <hr />
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <Form handleSubmit={handleSubmit(onSubmit)}
            register={register}
            errors={errors}
            isRegister={isRegister}
            setIsRegister={setIsRegister} />
        </div>
      </div>
    </div>
  )
}
