import "./login.css";

export default function LoginForm() {
	return (
		<form className="form-box login-background">
			<div className="container">
				<div className="form-title">LogIn</div>
				<label htmlFor="uname">
					<div>UserName</div>
				</label>
				<input
					type="text"
					placeholder="UserName"
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
