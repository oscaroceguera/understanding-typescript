import { useForm } from "react-hook-form";
import { RegistrationFormData } from "./RegistrationFormData";
import { useCallback, useMemo } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function useRegistrationForm() {
  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        email: yup
          .string()
          .email()
          .required("Email is required"),
        password: yup.string().required("password is required"),
        passwordConfirmation: yup.string().test({
          name: "password-confirmation",
          message: "Passwords need to match",
          test: function() {
            const { password, passwordConfirmation } = this.parent;

            if (password && passwordConfirmation !== password) {
              return false;
            }

            return true;
          }
        })
      }),
    []
  );

  const { register, handleSubmit, errors } = useForm<RegistrationFormData>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = useCallback((formValues: RegistrationFormData) => {
    console.log(formValues);
  }, []);

  return {
    errors,
    register,
    onSubmit: handleSubmit(onSubmit)
  };
}

export default useRegistrationForm;
