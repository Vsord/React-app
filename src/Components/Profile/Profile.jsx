import React from "react"
import MyPosts from "../MyPosts/MyPosts";
import profileClass from './Profile.module.css'

const Profile = () => {
    return (
        <div className={profileClass.profile}>
            <div className={profileClass.profile_img}>
                <img src="https://www.registraduria.gov.co/IMG/code/images/pictures/5.jpg" alt="" />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    )
};

export default Profile;