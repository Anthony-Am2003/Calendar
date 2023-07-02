import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../Redux/actions";
import Port from "../../assets/img/pexels-marko-klaric-6408282.jpg";

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [errors, setErrors] = useState({});
	const [errorsInput, setErrorsInput] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [user, setUser] = useState({
		username: "",
		password: "",
	});
	const URL = "http://localhost:7286";
	// 	useEffect(()=> {
	// 		setErrors(validation(user))
	// }, [user])

	const handleBlur = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
		// setErrors(validation({...user, [e.target.name]: e.target.value}))
	};

	const handleShowPassword = (e) => {
		e.preventDefault();
		setShowPassword(!showPassword);
	};

	const handleSumbit = async (e) => {
		e.preventDefault();
		const userDB = {
			username: user.username,
			password: user.password,
		};

		await dispatch(login(userDB, setErrorsInput));

		setTimeout(() => {
			navigate("/month");
		}, 2500);
	};

	// const validation = (data) => {
	// 	let errors = {
	// 	};
	// 	return errors;
	// };

	// useEffect(() => {
	//   const loggedUser = window.localStorage.getItem("LoggedCalendarAppUser");
	//   if (loggedUser) {
	//     const user = JSON.parse(loggedUser);

	//     setTimeout(() => {
	//       navigate("/month");
	//     }, 2500);
	//   }
	// }, []);

	return (
		<div style={{ backgroundImage: `url(${Port})` }} className='bg-cover bg-center h-screen flex flex-row justify-center items-center max-w-screen-xl'>
			<div className='min-w-[50%] max-w-lg border rounded-lg bg-[#fff9]'>
				<h1 className='justify-center text-3xl flex font-bold text-indigo-600 sm:text-4xl font-[Poppins] h-20 items-end'>Calendar App</h1>
				<form action='' className='mb-0 mt-2 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8' onSubmit={handleSumbit}>
					<p className='text-center text-lg font-medium font-[Poppins]'>Sign in to your account</p>
					<div>
						<label htmlFor='username' className='sr-only'>
							username
						</label>
						<div className='relative'>
							{errorsInput === true ? (
								<input
									type='text'
									className='w-full rounded-lg border-red-500 border-2 p-4 pe-12 text-sm shadow-sm bg-white font-[Poppins]'
									placeholder='Enter username'
									onBlur={handleBlur}
									name='username'
								/>
							) : (
								<input
									type='text'
									className='w-full rounded-lg border-gray-200 border-2 p-4 pe-12 text-sm shadow-sm bg-white font-[Poppins]'
									placeholder='Enter username'
									onBlur={handleBlur}
									name='username'
								/>
							)}
						</div>
					</div>
					<div>
						<label htmlFor='password' className='sr-only'>
							Password
						</label>
						<div className='relative'>
							{showPassword === true ? (
								<input
									type='text'
									className='w-full rounded-lg border-gray-200 border-2 p-4 pe-12 text-sm shadow-sm bg-white font-[Poppins]'
									placeholder='Enter password'
									onBlur={handleBlur}
									name='password'
								/>
							) : (
								<input
									type='password'
									className='w-full rounded-lg border-gray-200 border-2 p-4 pe-12 text-sm shadow-sm bg-white font-[Poppins]'
									placeholder='Enter password'
									onBlur={handleBlur}
									name='password'
								/>
							)}
							<button onClick={handleShowPassword}>
								<span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
									<svg xmlns='http://www.w3.org/2000/svg' className='h-4 w-4 text-gray-400' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
										<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
										/>
									</svg>
								</span>
							</button>
						</div>
					</div>
					<button type='submit' className='block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white font-[Poppins]'>
						Sign in
					</button>
					{errorsInput === true ? <p className='text-center text-sm text-red-400 font-[Poppins]'>Invalid username or password.</p> : <p></p>}
					<p className='text-center text-sm text-gray-500 font-[Poppins]'>
						{`No account? `}
						<Link to='/register'>
							<button className='underline font-[Poppins]' href=''>
								Sign up
							</button>
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
