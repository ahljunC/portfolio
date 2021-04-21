import React from 'react';
import PageTitle from '../Components/PageTitle';
import ContactForm from '../Components/ContactForm';
import ContactItem from '../Components/ContactItem';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function ContactPage() {
    const Phone = <PhoneIcon />
    const Email = <EmailIcon />
    const Location = <LocationOnIcon />
    return (
        <div className="ContactPage">
            <PageTitle title={'Contact'} span={'Contact'}/>
            <div className="contactPage-container">
                <div className="page-content-left">
                    <ContactForm />
                </div>
                <div className="page-content-right">
                    <ContactItem icon={Phone} title={'Mobile'} contact={'0416591995'}/>
                    <ContactItem icon={Email} title={'Email'} contact={'ahljun.ciar@gmail.com'}/>
                    <ContactItem icon={Location} title={'Location'} contact={'Melbourne'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
