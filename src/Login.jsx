import { useRef, useState } from "react";
import Header from "./Component/Header";
import { checkValidateData } from "./Utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage , setErrorMessage]= useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = (e) => {
    e.preventDefault();
    setIsSignInForm(!isSignInForm);
  };


  const HandleButtonClick=()=>{
    //validate the form data

       const message= checkValidateData(email.current.value,password.current.value);
        setErrorMessage(message);

        // console.log(email.current.value);
        // console.log(password.current.value);

  } 

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-full xl:w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_small.jpg
"
          alt=""
        />
      </div>

      <form 
      onSubmit={(e)=>{
          e.preventDefault();
      }}
      className="absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75">
        <h1 className="font-bold text-3xl py-4">
        {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>{" "}

        {!isSignInForm &&(<input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700 hover:text-black"
        />)}
        <input
        ref={email}
          type="text"
          placeholder="Email adress"
          className="p-4 my-4 w-full bg-gray-700 hover:text-black"
        />
        <input
        ref={password}
          type="Password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700  hover:text-black"
        />{" "}
        <br />

        <p className="text-red-700 font-bold text-lg p-2">{errorMessage}</p>
        <button
          className="p-4 my-4 w-full bg-red-700 rounded-lg"
          onClick={HandleButtonClick}
        >
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to netflix? Sign Up now" : "Already registred? Sign In now"}
        </p>

      </form>
    </div>
  );
};

export default Login;
