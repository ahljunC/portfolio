import React from 'react'

function ResumeTitle({icon, title}) {
    return (
        <div className="resume-section">
            <p className="resume-icon">{icon}</p>
            <h3>{title}</h3>
        </div>
    )
}

export default ResumeTitle
