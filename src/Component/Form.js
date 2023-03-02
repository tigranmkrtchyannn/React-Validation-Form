import React from "react"
import { useFormik } from "formik";
import "./Form.css"
import { basicSchema } from "../Schema/schema";
import googleLogo from "./icon/googleLogo.png"
import Checkbox from "./Chekbox";

const onSubmit = async(values, actions) =>{
	console.log(values);
	console.log(actions);
	await new Promise((resolve) => setTimeout(resolve, 1000));
	actions.resetForm();
};

function BasicForm() {
    // const [email, setEmail] = useState("")
    const {values,errors,touched,handleBlur,handleChange,handleSubmit,isSubmitting} = useFormik({
        initialValues: {
            firstName: '',
            lastName:'',
            email:'',
            password:'',
            teamName:''

        },
        validationSchema:basicSchema,
        onSubmit,
    })
    
    return (<div className="form">
        <div className="formBox">
            <h1>

                Create New Account

            </h1>
            <form onSubmit={handleSubmit} autoComplete="off" className="formik">
                <div className="fullName">
                    <div className="fName">
                        <label htmlFor="firstName">
                            First Name
                        </label>

                        <input
                            id="firstName"
                            value={values.firstName}
                            type="text"
                            placeholder="  First Name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.firstName&&touched.firstName  ? "input-errors" : ""}
                        />
                         {errors.firstName&&touched.firstName && <p className="error">{errors.firstName}</p> }
                    </div>
                    <div className="lName">
                        <label htmlFor="lastName">
                            Last Name
                        </label>

                        <input
                            id="lastName"
                            value={values.lastName}
                            type="text"
                            placeholder="  Last Name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.lastName&&touched.lastName  ? "input-errors" : ""}
                        />
                         {errors.lastName&&touched.lastName && <p className="error">{errors.lastName}</p> }
                    </div>
                </div>
                <div className="validInput">
                    <label htmlFor="teamName">
                        Team name/number
                    </label>
                    <input
                        id="teamName"
                        value={values.teamName}
                        type="text"
                        placeholder="  Team name/number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.teamName&&touched.teamName  ? "input-errors" : ""}
                    />
                     {errors.teamName&&touched.teamName && <p className="error">{errors.teamName}</p> }
                    <label htmlFor="emailAddress">
                        Email Address
                    </label>
                    <input
                        id="email"
                        value={values.email}
                        type="email"
                        placeholder="  Email Address"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.email &&touched.email  ? "input-errors" : ""}
                    />
                   {errors.email&&touched.email && <p className="error">{errors.email}</p> }
                    <label htmlFor="password">
                        Password
                    </label>
                    <input
                        id="password"
                        value={values.password}
                        type="text"
                        placeholder="  Create a password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.password&&touched.password  ? "input-errors" : ""}
                    />
                      {errors.password&&touched.password && <p className="error">{errors.password}</p> }
                </div>
                 <Checkbox />
                <button type='submit' className="signBtn" disabled={isSubmitting}>Sign Up</button>
                 <p>Or</p>
                <button type='submit' className="gBtn" ><img src={googleLogo} alt="googleIcon" className="icon"/>Continue With Google</button>
            </form>

            

        </div>

    </div>
    )
}

export default BasicForm