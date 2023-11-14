'use client';
import Profile from "./profile";
import Messages from "./Messages";
import EditProfile from "./EditProfile";
import { useState } from "react";
import UserProfile from "./userProfile";
import Button from '@/elements/Button'
export default function ProfilePage() {
    const [section, setSection] = useState('profile')
    const sections = ['profile', 'edit'];

    return (
        <div className="container mt-3 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div >
                    <Profile />
                </div>
                <div className=' bg-inner'>
                    <div className="flex   flex-col sm:flex-row justify-around gap-3">
                        {sections.map((section) => (
                            <div key={section} onClick={() => setSection(section)}   >
                                <Button type='button' name={section}/>
                            </div>
                        ))}
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
