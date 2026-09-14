import "./login.css";

export default function LoginForm() {
	return (
		<form className="form-box login-background">
			<div className="container">
				<div>LogIn</div>
				<label htmlFor="uname">
					<div>Username</div>
				</label>
				<input
					type="text"
					placeholder="Enter Username"
					name="uname"
					required
				/>
				<label htmlFor="psw">
					<div>Password</div>
				</label>
				<input
					type="password"
					placeholder="Enter Password"
					name="psw"
					required
				/>
				<button type="submit">Login</button>
			</div>
		</form>
	);
}
