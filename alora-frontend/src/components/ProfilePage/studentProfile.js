import React, { useState } from 'react';
import ProfileImage from '../../images/Home_Dude.png';

// hard code the content display for now
// CHANGE PASSWORD

export default function StudentProfile() {

    // To check for states of saving
    const [isSaving, setIsSaving] = useState(false);
    const [showSavedMessage, setShowSavedMessage] = useState(false);
    const [inputValue, setInputValue] = useState('');

    // For the save button
    const handleSave = () => {
        setShowSavedMessage(false);
        setIsSaving(true);
        // Simulate an API call or save operation
        setTimeout(() => {
            setIsSaving(false);
            setShowSavedMessage(true);
        }, 2000); // Simulating a delay of 2 seconds
    };

    // handles event where input fields are edited
    // will prob need this handler for each input field, but placeholder for now
    const handleInputChange = (e) => {
        setShowSavedMessage(false); //save message disappears when input fields are editted
        setInputValue(e.target.value);
    };


    return(

        // container for whole page
        <div className="w-full items-center justify-center sm:px-20 px-5 mb-12">

            {/* grid container for content */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-5 gap-x-10 flex-grow mt-10 mb-5">

                {/* container for image */}
                <div className="flex sm:order-1 row-span-3 items-center justify-center order-1 ">
                    <img 
                        className="object-cover border-8 rounded-full border-logo-green"
                        src={ProfileImage}
                    />
                </div>

                {/* container for username */}
                <div className="sm:order-4 order-2">
                    <p className="px-4 text-xl">Username</p>
                    <input
                    type="username"
                    id="Username"
                    placeholder="Username"
                    className="w-full py-2 px-4 border-4 rounded-3xl border-neutral-400/60"
                    onChange={handleInputChange}
                    />
                </div>

                {/* container for email */}
                <div className="sm:order-5 order-3">
                    <p className="px-4 text-xl">Email</p>
                    <input
                    type="email"
                    id="Email"
                    placeholder="Email"
                    className="w-full py-2 px-4 border-4 rounded-3xl border-neutral-400/60"
                    onChange={handleInputChange}
                    />
                </div>

                {/* container for password **LOSE CHANGES IF PASSWORD IS CHANGED WITHOUT SAVING CONTENT FIRST** */}
                <div className="sm:order-7 order-4">
                    <div className="flex items-center justify-between">
                        <p className="px-4 text-xl">Password</p>
                        {/* change password*/}
                        <div className="float-right">
                            {/* would lose progress if changes password without saving changes on profile page. */}
                            <a href="/profile/changepassword" className="px-4 text-sm text-right text-blue-600 underline dark:text-blue-500 hover:no-underline">Change Password</a>
                        </div>
                    </div>
                    <input
                    type="password"
                    id="Password"
                    placeholder="****************"
                    value="****************"
                    readonly
                    className="w-full py-2 px-4 border-4 rounded-3xl border-neutral-400/60"
                    />
                    
                </div>

                {/* container for pronouns*/}
                <div className="sm:order-2 sm:col-span-2 order-5">
                    <p className="px-4">Pronouns</p>
                    <input
                    type="pronouns"
                    id="Pronouns"
                    placeholder="empty"
                    className="w-full py-2 px-4 border-4 rounded-3xl border-neutral-400/60"
                    onChange={handleInputChange}
                    />
                </div>

                {/* container for bio */}
                <div className="sm:order-3 row-span-3 sm:col-span-2 order-6 justify-between flex flex-col">
                    <p className="px-4">Bio</p>
                    <textarea
                    type="bio"
                    id="Bio"
                    placeholder="empty"
                    className="w-full py-2 px-4 border-4 rounded-3xl border-neutral-400/60 align-top flex-grow"
                    onChange={handleInputChange}
                    />
                </div>


                {/* container for status */}
                <div className="sm:order-6 sm:col-span-2 order-7">
                    <p className="px-4">Status</p>
                    <input
                    type="status"
                    id="Status"
                    placeholder="student"
                    className="w-full py-2 px-4 border-4 rounded-3xl border-neutral-400/60"
                    onChange={handleInputChange}
                    />
                </div>


                {/* container for school id */}
                <div className="sm:order-8 sm:col-span-2 order-8">
                    <p className="px-4">School ID</p>
                    <input
                    type="schoolID"
                    id="SchoolID"
                    placeholder="empty"
                    className="w-full py-2 px-4 border-4 rounded-3xl border-neutral-400/60"
                    onChange={handleInputChange}
                    />
                </div>

            </div>

            {/* container for logout, save, cancel buttons */}
            <div className="flex items-center justify-between my-5 text-lg">
                <div className = "inline-flex items-center justify-center">
                    {/* Logout button */}
                    {/* DOESN'T DO ANYTHING FOR NOW */}
                    <button className="w-28 bg-logo-green hover:bg-logo-green-dark text-white font-bold py-2 px-4 border-2 border-logo-green hover:border-transparent rounded-3xl">
                        Logout
                    </button>
                </div>
                <div className="flex inline-flex items-center justify-center sm:space-x-5 space-x-1">

                    {/* Displays saving... and changes saved if save button is clicked. Disappears if edits are made */}
                    {isSaving && <p className = "text-right text-sm text-gray-600">Saving...</p>}
                    {showSavedMessage && <p className = "text-right text-sm text-gray-600">Changes Saved</p>}

                    {/* Save button */}
                    <button onClick={handleSave} disabled={isSaving} className="w-28 bg-logo-green hover:bg-logo-green-dark text-white font-bold py-2 px-4 border-2 border-logo-green hover:border-transparent rounded-3xl">
                        Save
                    </button>
                    
                    {/* Cancel Button */}
                    {/* DOESN'T DO ANYTHING FOR NOW */}
                    <button className="w-28 bg-transparent hover:bg-logo-green-dark font-semibold hover:text-white py-2 px-4 border-2 border-logo-green hover:border-transparent rounded-3xl">
                        Cancel
                    </button>
                </div>

            </div>

        </div>


    )
}