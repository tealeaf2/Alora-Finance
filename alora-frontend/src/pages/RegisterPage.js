import React, { useState } from 'react'
import { Link } from "react-router-dom";
import '../styles/index.css';
import '../styles/App.css';

import sprout from '../images/Sprout.png';
import titleLogo from '../images/logo-1.png'

function RegisterPage() {

  //For fields
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [school, setSchool] = useState("")

  //To check for states of user when clicked
  const [pwdCheckClassName, setPwdCheckClassName] = useState("absolute top-3 -translate-y-1/2 text-xs right-[30px] text-[#FF0000] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs hidden")
  const [studentClicked, setStudentClicked] = useState(false);
  const [teacherClicked, setTeacherClicked] = useState(false);
  const [fieldsRequired, setFieldsRequired] = useState(false);

  //For the teacher and student buttons //
  const handleStudentButtonClick = () => {
    setStudentClicked(true);
    setTeacherClicked(false);
  }
  const handleTeacherButtonClick = () => {
    setStudentClicked(false);
    setTeacherClicked(true);
  }

  //Handlers for the states of the username, password, and confirm password 
  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  }
  const schoolChangeHandler = (e) => {
    setSchool(e.target.value);
  }
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  }
  const confirmPasswordChangeHandler = (e) => {
    setPasswordCheck(e.target.value);
    if (e.target.value !== password) {
      setPwdCheckClassName("absolute top-3 -translate-y-1/2 text-xs right-[30px] text-[#FF0000] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs visible")
    } else {
      setPwdCheckClassName("absolute top-3 -translate-y-1/2 text-xs right-[30px] text-[#FF0000] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs hidden")
    }
  }

  //constant function handler for submit button. Use dispatch with useEffect inside this function
  const logData = () => {
    if (password.length === 0 || username.length === 0) {
      setFieldsRequired(true)
    }
    else {
      console.log(password)
      console.log(username)
      console.log(school)
    }
  }
  return (
    // container for whole page
    <div className="flex h-screen items-center justify-center">
      {/* login box */}
      <div className="flex flex-col justify-center items-center grow p-10 md:px-[6%] rounded-[14%] lg:rounded-[8%] border-2 border-[#CFDADD] max-w-[70vw] lg:max-w-[900px] aspect-square max-h-[80vh] lg:max-h-[78vh]">

        {/* title container */}
        <div
          className="title-container flex items-center mb-6 lg:mb-10">

          {/* sprout photo --- new color not in google drive so used old */}
          <img
            className="aspect-square h-[50px] mr-2"
            src={titleLogo}
          >

          </img>

          {/* account create btn */}
          <h1 className="text-center text-register-green text-4xl lg:text-[2.6rem] font-bold  ">
            Create An Account
          </h1>
        </div>



        {/* container for username element */}
        <div className='flex mb-3 lg:mb-4 self-stretch'>
          <div className='px-6 border-2 border-r-0 border-register-green rounded-l-full'></div>
          <div className='flex-1'>
            <label
              htmlFor="Username"
              className="relative block overflow-hidden rounded-r-full border-2 border-register-green pr-10 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >

              {fieldsRequired && !username ? (<p
                className="absolute top-3 -translate-y-1/2 text-xs right-[30px] text-[#FF0000] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
              >
                *Required
              </p>) :
                ""
              }

              <input
                type="email"
                id="Username"
                placeholder="Username"
                className="peer h-8 w-full border-none bg-transparent px-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                onChange={usernameChangeHandler}
              />

              <span
                className="absolute start-3 top-3 -translate-y-1/2 text-xs text-register-green transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
              >
                Username
              </span>

            </label>
          </div>
        </div>

        {/* container for password element */}
        <div className='flex mb-4 lg:mb-5 self-stretch'>
          <div className='px-6 border-2 border-r-0 border-register-green rounded-l-full'></div>
          <div className='flex-1'>
            <label
              htmlFor="Password"
              className="relative block overflow-hidden rounded-r-full border-2 border-register-green pr-10 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >

              {fieldsRequired && !password ? (<p
                className="absolute top-3 -translate-y-1/2 text-xs right-[30px] text-[#FF0000] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
              >
                *Required
              </p>) :
                ""
              }

              <input
                type="password"
                id="Password"
                placeholder="Password"
                class="peer h-8 w-full border-none bg-transparent px-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                onChange={passwordChangeHandler}
              />

              <span
                className="absolute start-3 top-3 -translate-y-1/2 text-xs text-register-green transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs "
              >
                Password
              </span>

            </label>
          </div>
        </div>

        {/* container for password check element */}
        <div className='flex mb-4 lg:mb-5 self-stretch'>
          <div className='px-6 border-2 border-r-0 border-register-green rounded-l-full'></div>
          <div className='flex-1'>
            <label
              htmlFor="pwd-check"
              className={`relative block overflow-hidden rounded-r-full border-2 border-register-green pr-10 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 
            ${(password.length > 0 || passwordCheck.length > 0) ? 'bg-transparent' : 'bg-slate-200'}`}
            >

              {/*Displays the not match error only if there is already a password inputted */}
              {password.length > 0 ? (<p
                className={pwdCheckClassName}
              >
                *Passwords do not match.
              </p>) :
                (<div></div>)
              }

              {/* Disables this input box until there is a password put */}
              <input
                type="password"
                id="pwd-check"
                placeholder="Re-enter password"
                class={`peer h-8 w-full border-none px-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm 
                ${(password.length > 0 || passwordCheck.length > 0) ? 'bg-transparent' : 'bg-slate-200'}`}
                onChange={confirmPasswordChangeHandler}
                disabled={!(password.length > 0 || passwordCheck.length > 0)}
              />

              <span
                className="absolute start-3 top-3 -translate-y-1/2 text-xs text-register-green transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs "
              >
                Re-enter password
              </span>

            </label>
          </div>
        </div>

        {/* container for school element */}
        <div className='flex mb-6 lg:mb-7 self-stretch'>
          <div className='px-6 border-2 border-r-0 border-register-green rounded-l-full'></div>
          <div className='flex-1'>
            <label
              htmlFor="school"
              className="relative block overflow-hidden rounded-r-full border-2 border-register-green pr-10 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >

              <input
                type="text"
                id="school"
                placeholder="Re-enter password"
                class="peer h-8 w-full border-none bg-transparent px-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                onChange={schoolChangeHandler}
              />

              <span
                className="absolute start-3 top-3 -translate-y-1/2 text-xs text-register-green transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs "
              >
                School
              </span>

            </label>
          </div>
        </div>

        {/* container for account type (container of the elements for student, "or", and teacher) */}
        <div className="account-type-container flex items-center mb-4 lg:mb-5">
          <button
            className={`rounded-3xl border-2 border-register-green ${studentClicked ? 'bg-register-green text-white' : 'bg-white text-register-green'} px-8 py-2 text-xl font-medium hover:bg-register-green hover:text-white focus:outline-none focus:ring active:text-[#4F6038] text-center max-w-[fit-content] mb-1 mx-2 lg:mb-1.5`}
            onClick={handleStudentButtonClick}
          >
            Student
          </button>
          <p className="text-register-green">or</p>
          <button
            className={`rounded-3xl border-2 border-register-green ${teacherClicked ? 'bg-register-green text-white' : 'bg-white text-register-green'} px-8 py-2 text-xl font-medium hover:bg-register-green hover:text-white focus:outline-none focus:ring active:text-[#4F6038] text-center max-w-[fit-content] mb-1 mx-2 lg:mb-1.5`}
            onClick={handleTeacherButtonClick}
          >
            Teacher
          </button>
        </div>

        {/* create account button */}
        <button
          className="rounded-3xl border-2 border-register-green bg-register-green px-28 py-2 text-xl font-medium text-white hover:bg-transparent hover:text-register-green focus:outline-none focus:ring active:text-[#4F6038] text-center max-w-[fit-content] mb-1 lg:mb-1.5"
          to=""
          onClick={logData}

        >
          Create
        </button>

      </div>


      {/* sprout image */}
      <img
        className="absolute bottom-0 right-[-120px] w-[500px] aspect-square lg:w-[700px]"
        src={sprout}
      >
      </img>

    </div>


  )
}

export default RegisterPage