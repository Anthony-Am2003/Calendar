import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Login = () => {
	const dispatch = useDispatch();
	const [errors, setErrors] = useState({});
	const [user, setUser] = useState({
		username: "",
		password: "",
	});

	useEffect(()=> {
		setErrors(validation(user))
}, [user])

	const handleBlur = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
		setErrors(validation({...user, [e.target.name]: e.target.value}))
		console.log(user);
	};

	const handleSumbit = (e) => {
		e.preventDefault();
		dispatch("action login");
	};

	const validation = (data) => {
		let errors = {};
		return errors;
	};

	return (
		<div class='mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-white'>
			<div class='mx-auto max-w-lg'>
				<h1 class='text-center text-2xl font-bold text-indigo-600 sm:text-3xl'>
					Calendar App
				</h1>

				<form
					action=''
					class='mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8'
					onSubmit={handleSumbit}
				>
					<p class='text-center text-lg font-medium'>Sign in to your account</p>
					<div>
						<label for='username' class='sr-only'>
							username
						</label>
						<div class='relative'>
							<input
								type='text'
								class='w-full rounded-lg border-gray-200 border-2 p-4 pe-12 text-sm shadow-sm bg-white'
								placeholder='Enter username'
								onBlur={handleBlur}
								name='username'
							/>
						</div>
					</div>

					<div>
						<label for='password' class='sr-only'>
							Password
						</label>

						<div class='relative'>
							<input
								type='password'
								class='w-full rounded-lg border-gray-200  border-2 p-4 pe-12 text-sm shadow-sm bg-white'
								placeholder='Enter password'
								onBlur={handleBlur}
								name='password'
							/>

							<span class='absolute inset-y-0 end-0 grid place-content-center px-4'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									class='h-4 w-4 text-gray-400'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
									/>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
									/>
								</svg>
							</span>
						</div>
					</div>

					<button
						type='submit'
						class='block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white'
					>
						Sign in
					</button>

					<p class='text-center text-sm text-gray-500'>
						No account?
						<Link to='/register'>
							<button class='underline' href=''>
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
