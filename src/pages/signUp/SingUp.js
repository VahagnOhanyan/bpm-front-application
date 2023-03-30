import {useAuth} from "../../auth/AuthProvider";
import * as Yup from "yup";
import {Formik} from "formik";

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("FirstName is required"),
    lastName: Yup.string().required("LastName is required"),
    login: Yup.string().required("Login is required"),
    password: Yup.string()
        .min(5, "Password must be at least 5 characters")
        .required("Password is required"),
    role: Yup.string().required("Role is required"),
    telegramId: Yup.string().required("TelegramId is required"),
});

export function SignUp() {
    const {signUp} = useAuth();
    const initialValues = {firstName: "", lastName: "", login: "", password: "", role: "", telegramId: ""};
    const onSubmit = (values) => {
        signUp(values.firstName, values.lastName, values.login, values.password, values.role, values.telegramId);
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
                        <label htmlFor="firstName">FirstName</label>
                        <input
                            type="firstName"
                            name="firstName"
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.firstName && errors.firstName && <div>{errors.firstName}</div>}
                    </div>
                    <div>
                        <label htmlFor="lastName">LastName</label>
                        <input
                            type="lastName"
                            name="lastName"
                            value={values.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.lastName && errors.lastName && <div>{errors.lastName}</div>}
                    </div>
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
                    <div>
                        <label htmlFor="role">Role</label>
                        <input
                            type="role"
                            name="role"
                            value={values.role}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.role && errors.role && <div>{errors.role}</div>}
                    </div>
                    <div>
                        <label htmlFor="telegramId">TelegramId</label>
                        <input
                            type="telegramId"
                            name="telegramId"
                            value={values.telegramId}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {touched.telegramId && errors.telegramId && <div>{errors.telegramId}</div>}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            )}
        </Formik>
    );
}