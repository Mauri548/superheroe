import React from 'react'
import { useFormik } from 'formik'

const initialValues = {
    email: '',
    password: '',
}

const validate = values => {
    let errors = {}

    if (!values.email || values.email === '') {
        errors.email = 'Required'
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email format'
    }
    console.log(errors.email)

    if (!values.password) {
        errors.password = 'Required'
    }
    console.log(errors.password)

    return errors
}

const Login = (props) => {

    const formik = useFormik({
        initialValues,
        onSubmit: values => {
            console.log('Form data', values)
            props.login(values)
        },
        validate 
    })

    const close = () => {
        props.closeModal()
    }

    return(
        <div>
            {props.errorMessage ? 
            <div className="alert-form">
                <div>
                    <h4>Email or password was not correct</h4>
                </div>
                <button onClick={close} type="button" class="btn-close btn-close-white" aria-label="Close"></button>
            </div> : null}
            
            <div className="container">
                <div className="conteiner-form">
                    <form className="needs-validated" noValidate onSubmit={formik.handleSubmit} >
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" required className="form-control" id="email" placeholder="name@example.com" name="email" onChange={formik.handleChange} value={formik.values.email} />
                            {formik.errors.email ? <div className="invalid">{formik.errors.email}</div> : null }
                        </div>
                        <div class="mb-3">
                            <label htmlFor="password" class="form-label">Example textarea</label>
                            <input type="password" required id="password" className="form-control" name="password" onChange={formik.handleChange} value={formik.values.password} />
                            {formik.errors.password ? <div className="invalid">{formik.errors.password}</div> : null }
                        </div>
                        <div>
                            <input type="submit" className="btn btn-primary w-100" value="Ingresar" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login