import React, { useState , useEffect, useCallback} from 'react'
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import '../styles/index.css';
import '../styles/App.css';
import { register } from '../redux/actions/accountActions'


import sprout from '../images/Sprout.png';
import titleLogo from '../images/logo-1.png'


function RegisterPage() {
  const location = useLocation();
  const history = useNavigate();
  const dispatch = useDispatch();

  //For fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [school, setSchool] = useState("")
  const [accountType, setAccountType] = useState("");

  const [message, setMessage] = useState("");
  const [canSubmit, setCanSubmit] = useState(false) // whether we can submit form or not


  //To check for states of user when clicked
  const [pwdCheckClassName, setPwdCheckClassName] = useState("absolute top-3 -translate-y-1/2 text-xs right-[30px] text-[#FF0000] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs hidden")
  const [studentClicked, setStudentClicked] = useState(false);
  const [teacherClicked, setTeacherClicked] = useState(false);
  const [fieldsRequired, setFieldsRequired] = useState(false);


  const redirectStudent = location.search ? location.search.split('=')[1] : '/progress';
  const redirectTeacher = location.search ? location.search.split('=')[1] : '/teacher/class';
  const accountLogin = useSelector(state => state.accountLogin);
  const { error, loading, accountInfo } = accountLogin;


  // const accountRegister = useSelector(state => state.accountRegister);
  // const accountLogin = useSelector(state => state.aco);

  // const { error, loading, accountInfo } = accountRegister;

  // check if we can submit
  // const checkSubmit = () => {
  //   if (password !== confirmPassword) {
  //     setCanSubmit(false);
  //     setMessage('Passwords do not match')
  //   }
  //   else if (firstName && lastName && password && confirmPassword && accountType) setCanSubmit(true);
  //   else setCanSubmit(false);
  // }

  // useEffect(() => {
  //   checkSubmit()

  //   if (accountInfo) {
  //     history(redirect);
  //   }
    
  // }, [history, accountInfo, redirect, checkSubmit]);

    // Assuming other state variables and functions

    const checkSubmit = useCallback(() => {
      if (password !== confirmPassword) {
        setCanSubmit(false);
        setMessage('Passwords do not match');
      } else if (firstName && lastName && password && confirmPassword && accountType) {
        setCanSubmit(true);
      } else {
        setCanSubmit(false);
      }
    }, [firstName, lastName, password, confirmPassword, accountType]);
  

    useEffect(() => {
      console.log(accountType)
      checkSubmit();
  
      if (accountInfo) {
        if (accountInfo.account_type === 'S'){
          history(redirectStudent);
        }
        else if (accountInfo.account_type === 'T'){
          history(redirectTeacher);
        }
      }
    }, [firstName, lastName, password, confirmPassword, accountType, accountInfo, redirectStudent, redirectTeacher, checkSubmit, history]);

  // when button is submitted we pass in info to db to register if valid
  const submitHandler = (e) => {
    e.preventDefault()
    checkSubmit()

    if (canSubmit) {
      console.log(firstName, lastName, accountType, email, password)
      dispatch(register(firstName, lastName, accountType, email, password))
    }

  }


  //For the teacher and student buttons //
  const handleStudentButtonClick = () => {
    setStudentClicked(true);
    setAccountType("S")
    setTeacherClicked(false);
  }

  const handleTeacherButtonClick = () => {
    setStudentClicked(false);
    setAccountType("T")
    setTeacherClicked(true);
  }

  //Handlers for the states of the firstName, password, and confirm password 


  const confirmPasswordChangeHandler = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setPwdCheckClassName("absolute top-3 -translate-y-1/2 text-xs right-[30px] text-[#FF0000] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs visible")
    } else {
      setPwdCheckClassName("absolute top-3 -translate-y-1/2 text-xs right-[30px] text-[#FF0000] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs hidden")
    }
  }



  return (
    // container for whole page
    <>
    <Link to="/" className="p-2">
    Home
    </Link>
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



        {/* container for email element */}
        <div className='flex mb-3 lg:mb-4 self-stretch'>
          <div className='px-6 border-2 border-r-0 border-register-green rounded-l-full'></div>
          <div className='flex-1'>
            <label
              htmlFor="email"
              className="relative block overflow-hidden rounded-r-full border-2 border-register-green pr-10 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >

              {fieldsRequired && !firstName ? (<p
                className="absolute top-3 -translate-y-1/2 text-xs right-[30px] text-[#FF0000] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
              >
                *Required
              </p>) :
                ""
              }

              <input
                type="email"
                id="email"
                placeholder="EMail"
                className="peer h-8 w-full border-none bg-transparent px-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                onChange={(e) => setEmail(e.target.value)}
              />

              <span
                className="absolute start-3 top-3 -translate-y-1/2 text-xs text-register-green transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
              >
                Email
              </span>

            </label>
          </div>
        </div>

        {/* container for first name element */}
        <div className='flex mb-3 lg:mb-4 self-stretch'>
          <div className='px-6 border-2 border-r-0 border-register-green rounded-l-full'></div>
          <div className='flex-1'>
            <label
              htmlFor="firstName"
              className="relative block overflow-hidden rounded-r-full border-2 border-register-green pr-10 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >

              {fieldsRequired && !firstName ? (<p
                className="absolute top-3 -translate-y-1/2 text-xs right-[30px] text-[#FF0000] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
              >
                *Required
              </p>) :
                ""
              }

              <input
                type="email"
                id="firstName"
                placeholder="firstName"
                className="peer h-8 w-full border-none bg-transparent px-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                onChange={(e) => setFirstName(e.target.value)}
              />

              <span
                className="absolute start-3 top-3 -translate-y-1/2 text-xs text-register-green transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
              >
                First Name
              </span>

            </label>
          </div>
        </div>

        {/* container for last name element */}
        <div className='flex mb-3 lg:mb-4 self-stretch'>
          <div className='px-6 border-2 border-r-0 border-register-green rounded-l-full'></div>
          <div className='flex-1'>
            <label
              htmlFor="lastName"
              className="relative block overflow-hidden rounded-r-full border-2 border-register-green pr-10 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >

              {fieldsRequired && !firstName ? (<p
                className="absolute top-3 -translate-y-1/2 text-xs right-[30px] text-[#FF0000] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
              >
                *Required
              </p>) :
                ""
              }

              <input
                type="email"
                id="lastName"
                placeholder="lastName"
                className="peer h-8 w-full border-none bg-transparent px-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                onChange={(e) => setLastName(e.target.value)}
              />

              <span
                className="absolute start-3 top-3 -translate-y-1/2 text-xs text-register-green transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
              >
                Last Name
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
                onChange={(e) => setPassword(e.target.value)}
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
            ${(password.length > 0 || confirmPassword
            .length > 0) ? 'bg-transparent' : 'bg-slate-200'}`}
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
                ${(password.length > 0 || confirmPassword
                .length > 0) ? 'bg-transparent' : 'bg-slate-200'}`}
                onChange={confirmPasswordChangeHandler}
                disabled={!(password.length > 0 || confirmPassword
                .length > 0)}
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
                placeholder="Re-enter school"
                class="peer h-8 w-full border-none bg-transparent px-3 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                onChange={(e) => setSchool(e.target.value)}
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
          onMouseEnter={checkSubmit}
          onClick={submitHandler}

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

    </>
  )
}

export default RegisterPage
