import React from 'react';

function ContactItem({icon, title, contact}) {
    return (
        <div className="contact-item">
            <div className="contact-item-left">
                {icon}
                
            </div>
            <div className="contact-item-right">
                <h6>{title}</h6>
                <p>{contact}</p>
            </div>

        </div>
    )
}

export default ContactItem
