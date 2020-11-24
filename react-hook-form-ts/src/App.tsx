import React, { useCallback } from "react";
import useRegistrationForm from "./useRegistrationForm";

function App() {
  const { register, onSubmit, errors } = useRegistrationForm();

  return (
    <form onSubmit={onSubmit}>
      <input name="email" type="email" ref={register} />
      <p>{errors.email && errors.email.message}</p>
      <input name="password" type="password" ref={register} />
      <p>{errors.password && errors.password.message}</p>
      <input name="passwordConfirmation" type="password" ref={register} />
      <p>
        {errors.passwordConfirmation && errors.passwordConfirmation.message}
      </p>
      <button type="submit">Save</button>
    </form>
  );
}

export default App;
