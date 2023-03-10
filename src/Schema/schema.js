import * as yup from "yup";


const passwordRules = /^(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
   email:yup.string().email("Please enter a valid email.")
  .required("Required *"),
   password:yup
    .string()
	 .min(5)
	 .matches(passwordRules, {message: "Password must contain one uppercase and lowercase letter and at least 5 or more characters."})
	 .required("Required *"),
  firstName:yup
     .string()
     .min(3, "Fisrt name must be at least 3 characters long")
     .required("Required *"),
  teamName:yup
  .string()
  .required("Required *"),
  lastName:yup
  .string()
  .min(3, "Fisrt name must be at least 3 characters long")
  .required("Required *"),
})