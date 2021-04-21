import React from 'react'
import ImageSection from '../Components/ImageSection'
import PageTitle from '../Components/PageTitle'
import SkillsSection from '../Components/SkillsSection';
import ResumeTitle from '../Components/ResumeTitle';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';
import BuildIcon from '@material-ui/icons/Build';

function AboutPage() {
    const briefcase = <WorkIcon />
    const school = <SchoolIcon />
    const build = <BuildIcon />
    return (
        <div className="AboutPage">
            <PageTitle title={'About Me'} span={'About Me'}/>
            <ImageSection />
            {/* <PageTitle title={'My Skills'} span={'My Skills'}/> */}
            {/* <SkillsSection/> */}

            <PageTitle title={'Resume'} span={'Resume'}/>

            <ResumeTitle icon={build} title={'Skills'} />

            <ResumeTitle icon={briefcase} title={'Working Experience'} />
            <ResumeItem 
                year={'Oct 2020 - Feb 2021'} 
                title={'VentraIP'} 
                subTitle={'Web Applications Developer (Temp)'}
                text={'Developed new features and resolved bugs on the company\'s custom CRM platform and Customer Control Panel using the following tech Stack: Linux, PHP, NGINX, PHP, Javascript, ReactJS, MySQL, Laravel.'}
            />
            <ResumeItem 
                year={'Jan 2020 - Jul 2020'} 
                title={'NEC Australia'} 
                subTitle={'Associate Developer/Analyst'}
                text={'Worked on code devlopment on automated patching project using powershell and managed testing for network monitoring project.'}
            />
            <ResumeItem 
                year={'Mar 2019 - Dec 2019'} 
                title={'NEC Australia'} 
                subTitle={'IT Graduate'}
                text={'As part of the NEC Graduate program, I rotated through the Infrastructure and System Management teams, proactively monitoring and resolving issues on Network Devices and VMs/Hyper-Vs managed by NEC.'}
            />
            <ResumeItem 
                year={'Jun 2018 - Mar 2019'} 
                title={'NEC Australia'} 
                subTitle={'Service Desk Analyst'}
                text={'Provided high level of IT technical support for NEC\'s customer, Transport for NSW'}
            />

            <ResumeTitle icon={school} title={'Education'} />
            <ResumeItem 
                year={'Feb 2014 - Dec 2017'} 
                title={'RMIT University'} 
                subTitle={'Bachelors Degree in Information Technology'}
                text={'Relevant coursework for Software Engineering - Web Programming: HTML, CSS, PHP, Javascript. Intro to Programming: Python. Programming 1: Java. iOS Enginering: Swift. Cloud Computing: AWS, Google Cloud. Database Concepts: SQL'}
            />
        </div>
    )
}

export default AboutPage
