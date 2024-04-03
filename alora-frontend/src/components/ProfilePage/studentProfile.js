import React, { useEffect, useState } from 'react';
import ProfileImage from '../../images/Home_Dude.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, getAccountDetails, updateAccountProfile } from '../../redux/actions/accountActions'
import { ACCOUNT_UPDATE_PROFILE_RESET } from '../../redux/constants/accountConstants'


// hard code the content display for now
// CHANGE PASSWORD

export default function StudentProfile() {

    const history = useNavigate();
    const location = useLocation();
    const redirect = location.search ? location.search.split('=')[1] : '/login';
  

    // To check for states of saving
    const [isSaving, setIsSaving] = useState(false);
    const [showSavedMessage, setShowSavedMessage] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [accountType, setAccountType] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const accountDetails = useSelector(state => state.accountDetails)
    const { error, loading, account } = accountDetails

    // get account info from state
    const accountLogin = useSelector(state => state.accountLogin);
    const { accountInfo } = accountLogin

    // const accountUpdateProfile = useSelector(state => state.accountUpdateProfile)
    // const { success } = accountUpdateProfile
    const success = false

    const dispatch = useDispatch()


    useEffect(() => {   
        if (!accountInfo || accountInfo.account_type !== 'S') {
            history(redirect);
        }


        try {
            if (!account || !account.email || success || accountInfo._id !== account._id) {
                dispatch({ type: ACCOUNT_UPDATE_PROFILE_RESET })
                dispatch(getAccountDetails('profile'))
            } else {
                setFname(account.first_name);
                setLname(account.last_name);
                setEmail(account.email);
                
                if (account.account_type === 'S') {
                    setAccountType("Student");
                } else {
                    setAccountType("Teacher");
                }
            }

          }
        catch(err) {
        }
        // redirect to home if not logged in
        

        }, [dispatch, history, accountInfo, account, success, redirect])


    
    const logoutHandler = () => {
        dispatch(logout())
        // console.log('LOGOUT')
        history(redirect);
    }

    // SAVES W/ NEW PASSWORD + NEW INFO (cuz the put request requires password to update too)
    const handleSave = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            // setMessage('Passwords do not match')
            console.log('password no match')
            // continue
        } else {

            dispatch(updateAccountProfile({
                'id': account._id,
                'first_name': fname,
                'last_name': lname,
                'email': email,
                'password': password
            }))

        }
    }
   
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
                        alt='profile'
                    />
                </div>

                {/* container for email */}
                <div className="sm:order-4 order-2">
                    <p className="px-4 text-xl">Email</p>
                        <input
                        type="email"
                        id="Email"
                        placeholder={email}
                        className="w-full py-2 px-4 border-4 rounded-3xl border-neutral-400/60"
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    
                </div>

                {/* container for last name */}
                {/* <div className="sm:order-4 order-2">
                    <p className="px-4 text-xl">Last Name</p>
                    <input
                    type="username"
                    id="Username"
                    placeholder="Username"
                    className="w-full py-2 px-4 border-4 rounded-3xl border-neutral-400/60"
                    onChange={handleInputChange}
                    />
                </div> */}

                {/* container for password */}
                <div className="sm:order-5 order-3">
                    <div className="flex items-center justify-between">
                        <p className="px-4 text-xl">Password</p>
                        {/* change password*/}
                        <div className="float-right">
                            {/* would lose progress if changes password without saving changes on profile page. */}
                            {/* <a href="/profile/changepassword" className="px-4 text-sm text-right text-blue-600 underline dark:text-blue-500 hover:no-underline">Change Password</a> */}
                        </div>
                    </div>
                    <input
                        type="password"
                        id="Password"
                        placeholder={'********'}
                        className="w-full py-2 px-4 border-4 rounded-3xl border-neutral-400/60"
                        onChange={(e) => setPassword(e.target.value)}
                        />
                </div>

                {/* container for confirm password **LOSE CHANGES IF PASSWORD IS CHANGED WITHOUT SAVING CONTENT FIRST** */}
                <div className="sm:order-7 order-4">
                    <div className="flex items-center justify-between">
                        <p className="px-4 text-xl">Confirm Password</p>
                        {/* change password*/}
                        <div className="float-right">
                            {/* would lose progress if changes password without saving changes on profile page. */}
                            {/* <a href="/profile/changepassword" className="px-4 text-sm text-right text-blue-600 underline dark:text-blue-500 hover:no-underline">Change Password</a> */}
                        </div>
                    </div>
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder={'********'}
                        className="w-full py-2 px-4 border-4 rounded-3xl border-neutral-400/60"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    
                </div>

                {/* container for First Name */}
                <div className="sm:order-2 sm:col-span-1 order-5">
                <p className="px-4 text-xl">First name</p>
                    <input
                    type="fname"
                    id="fname"
                    placeholder={fname}
                    className="w-full py-2 px-4 border-4 rounded-3xl border-neutral-400/60"
                    onChange={(e) => setFname(e.target.value)}
                    />
                </div>

                {/* container for Last name */}
                <div className="sm:order-2 sm:col-span-1 order-5">
                <p className="px-4 text-xl">Last Name</p>
                    <input
                    type="lname"
                    id="lname"
                    placeholder={lname}
                    className="w-full py-2 px-4 border-4 rounded-3xl border-neutral-400/60"
                    onChange={(e) => setLname(e.target.value)}
                    />
                </div>

                {/* container for bio */}
                <div className="sm:order-3 row-span-3 sm:col-span-2 order-6 justify-between flex flex-col">
                    <p className="px-4">Bio</p>
                    <textarea
                    type="bio"
                    id="Bio"
                    readOnly="true"
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
                            readOnly="true"
                            placeholder={accountType}
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
                    <button className="w-28 bg-logo-green hover:bg-logo-green-dark text-white font-bold py-2 px-4 border-2 border-logo-green hover:border-transparent rounded-3xl" onClick={logoutHandler}>
                        Logout
                    </button>
                </div>
                <div className="flex inline-flex items-center justify-center sm:space-x-5 space-x-1">

                    {/* Displays saving... and changes saved if save button is clicked. Disappears if edits are made */}
                    {isSaving && <p className = "text-right text-sm text-gray-600">Saving...</p>}
                    {showSavedMessage && <p className = "text-right text-sm text-gray-600">Changes Saved</p>}

                    {/* Save button */}
                    <button onClick={handleSave} className="w-28 bg-logo-green hover:bg-logo-green-dark text-white font-bold py-2 px-4 border-2 border-logo-green hover:border-transparent rounded-3xl">
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