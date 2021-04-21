import React from 'react'

function ContactForm() {
    return (
        <div className="ContactForm">
            <div className="form-container">
                <form className="form">
                    <div className="form-field">
                        <label htmlFor="name ">Name: </label>
                        <input type="text" id="name" />
                    </div>
                    <div className="form-field">
                        <label htmlFor="name ">email: </label>
                        <input type="text" id="email" />
                    </div>
                    <div className="form-field">
                        <label htmlFor="name ">subject: </label>
                        <input type="text" id="subject" />
                    </div>
                    <div className="form-field">
                        <label htmlFor="text-area">Message: </label>
                        <textarea name="textarea" id="text" cols="30" rows="10"></textarea>
                    </div>
                    <button className="send-email-btn">Send Email</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
