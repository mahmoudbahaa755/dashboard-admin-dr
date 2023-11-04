'use client';
import Profile from "./profile";
import Messages from "./Messages";
import EditProfile from "./EditProfile";
import { useState } from "react";
import UserProfile from "./userProfile";
export default function ProfilePage() {
    const [section,setSection]=useState('profile')
    return (
        <div className="container mt-3 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                    <Profile />
                </div>
                <div>
                    <div className="flex flex-col sm:flex-row justify-between gap-3">
                        <div onClick={() => setSection('profile')}>profile</div>
                        {/* <div onClick={() => setSection('messages')}>messages</div> */}
                        <div onClick={() => setSection('edit')}>edit</div>
                    </div>
                    <div className="mt-8">
                        {section === 'profile' && <UserProfile />}
                        {/* {section === 'messages' && <Messages />} */}
                        {section === 'edit' && <EditProfile />}
                    </div>
                </div>
            </div>
        </div>
    );
}
