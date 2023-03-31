import {useAuth} from "../../auth/AuthProvider";
import * as Yup from "yup";
import {Formik} from "formik";

const validationSchema = Yup.object().shape({
    login: Yup.string().required("Login is required"),
    password: Yup.string()
        .min(5, "Password must be at least 5 characters")
        .required("Password is required"),
});

export function Login(navigate) {
    const {logIn} = useAuth();
    const initialValues = {login: "", password: ""};
    const onSubmit = (values) => {
        logIn(values.login, values.password, navigate);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="login">Login</label>
                        <input
                            type="login"
                            name="login"
                            value={values.login}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.login && errors.login && <div>{errors.login}</div>}
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.password && errors.password && <div>{errors.password}</div>}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            )}
        </Formik>
    );
}


