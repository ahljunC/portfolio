import React from 'react'

function SkillsSection({skill}) {
    return (
        <div className="SkillsSection">
            <div className="skills-container">
                <div className="skills-left">
                <h5 className="skill-title">HTML5 & CSS3</h5>
                    <h5 className="skill-title">PHP</h5>
                    <h5 className="skill-title">Laravel</h5>
                    <h5 className="skill-title">Javascript</h5>
                </div>
                <div className="skills-right">
                <h5 className="skill-title">React</h5>
                    <h5 className="skill-title">MySQL</h5>
                    <h5 className="skill-title">GIT</h5>
                    <h5 className="skill-title">Atlassian Tools (Jira & Confluence)</h5>
                </div>
            </div>
        </div>
    )
}

export default SkillsSection
