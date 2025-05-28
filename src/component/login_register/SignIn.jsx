import { useState } from "react"

const SignIn = ({newUser}) => {
    const [loginUser, setLoginUser] = useState({
        username: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Login Form is Submitted")
    }

    return (
        <div className='container m-3 p-3 w-50 mx-auto bg-light border rounded '>
            <h2 className="bg-secondary text-black border rounded shadow ">Login form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label"  htmlFor="un">Username</label>
                    <input
                        className="form-control"
                        placeholder="Username"
                        id='un'
                        value={loginUser.username}
                        onChange={(e) => setLoginUser({ ...loginUser, username: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="pw">Password</label>
                    <input
                        className="form-control"
                        placeholder="Password"
                        id='pw'
                        type="password"
                        value={loginUser.password}
                        onChange={(e) => setLoginUser({ ...loginUser, password: e.target.value })}
                    required/>
                </div>
                <div className="d-flex justify-content-center gap-3">
                    <button className='btn btn-outline-success' type='submit'>Login</button>
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => setLoginUser({
                            username: '',
                            password: ''
                        })}
                    >
                        Reset
                    </button>
                </div>
            </form>
            <div>
                <h3>New User ? Please <button className="btn " onClick={()=>newUser(false)}>Sign In</button></h3>
            </div>
        </div>
    )
}

export default SignIn