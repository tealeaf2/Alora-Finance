import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileImage from '../../images/Home_Dude.png';

export default function StudentChangePassword() {

    // for saving (doesn't actually do anything here)
    const [isSaving, setIsSaving] = useState(false);

    // For password match checking
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    // For page redirecting
    const navigate = useNavigate();

    // for saving (doesn't allow save if passwords don't match)
    const handleSave = () => {
        if (newPassword === confirmPassword && newPassword.length > 0) {
            setIsSaving(true);
            // Simulate an API call or save operation
            setTimeout(() => {
                setIsSaving(false);
                navigate("/profile");
            }, 2000); // Simulating a delay of 2 seconds
            
        } else {
            setPasswordsMatch(false);
        }
    };

    // handles cancel button
    const handleCancel = () => {
        setPasswordsMatch(false);
        
        navigate("/profile");
    };

    // Handles password match checking
    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
        setPasswordsMatch(confirmPassword === e.target.value);
    };
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setPasswordsMatch(newPassword === e.target.value);
    };

    return(

        // Container for whole page
        <div className="flex w-full items-center justify-center px-20">
            <div className="flex sm:flex-row flex-col items-center justify-center my-20 sm:space-x-8 space-y-5">

                {/* Container for image */}
                <div className="flex items-center justify-center w-1/2">
                    <img 
                        className="object-cover border-8 rounded-full border-logo-green"
                        src={ProfileImage}
                    />
                </div>

                {/* Container to password management */}
                <div className="flex flex-col w-80 justify-center space-y-3">
                    <div className="flex flex-col space-y-1">
                        <p className="px-4 text-xl">New Password</p>
                        <input
                            type="password"
                            id="newPassword"
                            placeholder="*************"
                            className="w-full py-2 px-4 border-4 rounded-3xl border-neutral-400/60"
                            value={newPassword}
                            onChange={handleNewPasswordChange}
                        />
                    </div>

                    {/* Container for confirm password */}
                    <div className="flex flex-col space-y-1">
                        <p className="px-4 text-xl">Confirm Password</p>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="*************"
                            className="w-full py-2 px-4 border-4 rounded-3xl border-neutral-400/60"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />
                        {!passwordsMatch && <p className="text-red-500 text-sm">*Passwords do not match.</p>}
                    </div>

                    {/* container for save, cancel buttons */}
                    <div className="flex items-center justify-between my-5 text-lg text-center">
                        
                        {/* Save button */}
                        <button onClick={handleSave} disabled={isSaving || !passwordsMatch} className="w-28 bg-logo-green hover:bg-logo-green-dark text-white font-bold py-2 px-4 border-2 border-logo-green hover:border-transparent rounded-3xl">
                            Save
                        </button>

                        {/* Cancel button */}
                        {/* Just redirects to profile page */}
                        <button onClick={handleCancel} className="w-28 bg-transparent hover:bg-logo-green-dark font-semibold hover:text-white py-2 px-4 border-2 border-logo-green hover:border-transparent rounded-3xl">
                            Cancel
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}
