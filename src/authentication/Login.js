import React from 'react'
import "./Login.css"

function Login() {
    return (
        <div className='logincover'>
           
            <div className='login'>
                <img
                    src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
                    alt=""
                />
                <input type="email" placeholder='email' />
                <input type='password' placeholder='password' />
                <button>Log in</button>
               
            </div>
        </div>
    )
}

export default Login
