import React from 'react'
import "./Signup.css"
function Signup() {
    return (
        <div className='signup '>
            <img
                src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
                alt=""
            />
            <input type="email" placeholder='email' />
            <input type='password' placeholder='password' />
            <input type='text' placeholder='username' />
            <button>Log in</button>

        </div>
    )
}

export default Signup
