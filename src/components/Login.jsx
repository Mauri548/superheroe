import React from 'react'

const Login = (props) => {

    const onSubmit = (e) => {
        e.preventDefault()
        props.login()
    }

    return(
        <div className="container">
            <div>
                <form onSubmit={onSubmit} >
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input onChange={props.changemail} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <input onChange={props.changepassword} type="password" className="form-control"/>
                    </div>
                    <input type="submit" className="btn btn-primary" value="Ingresar" />
                </form>
            </div>
        </div>
    )
}

export default Login