import React from 'react'
import './ContactStyles.css'

const Contact = () => {
    return (
        <div className='contact'>
            <div className="container adjust ">
                <div className="form-container ">
                    <form>
                        <h2><span>Contact</span> Us</h2>
                        <div>
                            <label>Name</label>
                            <input type="text" placeholder='Enter your name'/>
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" placeholder='Enter your email'/>
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea rows='10' placeholder='Type Here your Message'/>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact