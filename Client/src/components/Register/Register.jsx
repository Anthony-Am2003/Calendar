import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userSession } = useSelector((state) => state);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const URL = "http://localhost:7286";

  const handleBlurUsername = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setErrors(validationUsername({ ...user, [e.target.name]: e.target.value }));
  };

  const handleBlurEmail = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setErrors(validationEmail({ ...user, [e.target.name]: e.target.value }));
  };

  const handleBlurPassword = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setErrors(validationPassword({ ...user, [e.target.name]: e.target.value }));
  };

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const handleShowPasswordRepeat = (e) => {
    e.preventDefault();
    setShowPasswordRepeat(!showPasswordRepeat);
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    const userDB = {
      username: user.username,
      email: user.email,
      password: user.password,
    };
    try {
      const { data } = await axios.post(`${URL}/user/register`, userDB);

      window.alert(data.message);

      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  var regexSymbols = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
  var regexNum = /\d/;
  var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var regexLetters = /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+$/;

  const validationUsername = (data) => {
    let errors = {};
    !data.username && (errors.username = "Username is required");
    data.username.length < 6 &&
      (errors.userLength = "Username needs at least 6 characters");
    return errors;
  };

  const validationEmail = (data) => {
    let errors = {};
    !data.email && (errors.email = "Email is required");
    !regexEmail.test(data.email) && (errors.email2 = "Must be an email");
    return errors;
  };

  const validationPassword = (data) => {
    let errors = {};
    !regexSymbols.test(data.password) &&
      (errors.password = "Symbol is required");
    !regexNum.test(data.password) && (errors.password = "Number is required");
    !regexLetters.test(data.password) &&
      (errors.password = "Letter is required");
    data.password.length < 8 &&
      (errors.password = "Password needs at least 8 characters");
    !data.password && (errors.password = "Password is required");
    data.password !== data.passwordRepeated &&
      (errors.passwordMatch = "Passwords don't match");
    return errors;
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto max-w-lg border rounded-lg">
        <h1 className="justify-center text-3xl flex font-bold text-indigo-600 sm:text-4xl font-[Poppins] h-20 items-end">
          Calendar App
        </h1>
        <form
          action=""
          className="mb-0 mt-3 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          onSubmit={handleSumbit}
        >
          <p className="text-center text-lg font-medium font-[Poppins]">
            Create your account
          </p>
          <div>
            <label htmlFor="text" className="sr-only">
              Username
            </label>
            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 border-2 p-4 pe-12 text-sm shadow-sm bg-white font-[Poppins]"
                placeholder="Enter username"
                onBlur={handleBlurUsername}
                name="username"
              />
            </div>
            {errors?.username && (
              <p className="text-sm text-gray-420 font-[Poppins]">
                {errors.username}
              </p>
            )}
            {errors?.userLength && (
              <p className="text-sm text-gray-420 font-[Poppins]">
                {errors.userLength}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                className="w-full rounded-lg border-gray-200 border-2 p-4 pe-12 text-sm shadow-sm bg-white font-[Poppins]"
                placeholder="Enter email"
                onBlur={handleBlurEmail}
                name="email"
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
            {errors?.email && (
              <p className="text-sm text-gray-420 font-[Poppins]">
                {errors.email}
              </p>
            )}
            {errors?.email2 && (
              <p className="text-sm text-gray-420 font-[Poppins]">
                {errors.email2}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              {showPassword === true ? (
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 border-2 p-4 pe-12 text-sm shadow-sm bg-white font-[Poppins]"
                  placeholder="Enter password"
                  onBlur={handleBlurPassword}
                  name="password"
                />
              ) : (
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 border-2 p-4 pe-12 text-sm shadow-sm bg-white font-[Poppins]"
                  placeholder="Enter password"
                  onBlur={handleBlurPassword}
                  name="password"
                />
              )}

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
            {errors?.password && (
              <p className="text-sm text-gray-420 font-[Poppins]">
                {errors.password}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="passwordRepeated" className="sr-only">
              Password
            </label>

            <div className="relative">
              {showPasswordRepeat === true ? (
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200  border-2 p-4 pe-12 text-sm shadow-sm bg-white font-[Poppins]"
                  placeholder="Repeat password"
                  onBlur={handleBlurPassword}
                  name="passwordRepeated"
                />
              ) : (
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200  border-2 p-4 pe-12 text-sm shadow-sm bg-white font-[Poppins]"
                  placeholder="Repeat password"
                  onBlur={handleBlurPassword}
                  name="passwordRepeated"
                />
              )}

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
            {errors?.passwordMatch && (
              <p className="text-sm text-gray-420 font-[Poppins]">
                {errors.passwordMatch}
              </p>
            )}
          </div>
          {!errors.username &&
          !errors.userLength &&
          !errors.email &&
          !errors.email2 &&
          !errors.password &&
          !errors.passwordLength &&
          !errors.passwordSymbols &&
          !errors.passwordNumber &&
          !errors.passwordMatch &&
          !errors.passwordLetter ? (
            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white font-[Poppins]"
            >
              Sign up
            </button>
          ) : (
            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white disabled:opacity-30 font-[Poppins]"
              disabled
            >
              Sign up
            </button>
          )}
          {errors &&
          (errors.username ||
            errors.userLength ||
            errors.email ||
            errors.email2 ||
            errors.password ||
            errors.passwordLength ||
            errors.passwordSymbols ||
            errors.passwordNumber ||
            errors.passwordMatch ||
            errors.passwordLetter) ? (
            <h1 className="text-sm text-gray-420 font-[Poppins]">
              Check your errors
            </h1>
          ) : (
            <h1></h1>
          )}
          <p className="text-center text-sm text-gray-500 font-[Poppins]">
            {`Have already an account? `}
            <Link to="/">
              <button className="underline" href="">
                Sign in
              </button>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
