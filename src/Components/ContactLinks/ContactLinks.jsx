import './ContactLinks.css'
import LinkItems from "../LinkItems/LinkItems"

function ContactLinks(){
    return(
        <div id='contlink'>
        <LinkItems SocialContact="GitHub"></LinkItems>
        <LinkItems SocialContact="Frontend Mentor"></LinkItems>
        <LinkItems SocialContact="GitLinkedInHub"></LinkItems>
        <LinkItems SocialContact="Twitter"></LinkItems>
        <LinkItems SocialContact="Instagram"></LinkItems>
        </div>
    )
}

export default ContactLinks