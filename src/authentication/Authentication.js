import React from 'react'
import "./Authentication.css"
import Login from './Login'



function Authentication() {
    return (
        <div className='authentication'>
            <div className='auth_left'>
                <img src='https://i.imgur.com/P3Vm1Kq.png' alt='' />

            </div>

            
            <div className='auth_right'>
                <Login />

                <div className='auth_more'>
                    <span>
                        Don't have an account ?<button>Sign up</button>
                    </span>
                </div>

            </div>

        </div>
    )
}

export default Authentication
