import './ProfileTitle.css'
import profileimg from '/assets/Images/jessica.jpeg'

function ProfileTitle(){
    return(
        <div id='profildiv'>
         <img src={profileimg} /> 
         <h2 id='name'>Jessica Randall</h2>
         <p id='address'>London, United Kingdom</p>
         <p id='job'>"Front-end developer and avid reader."</p>


        </div>
    )
}
export default ProfileTitle