import "./login.css";

export default function LoginForm() {
	return (
		<form className="form-box login-background">
			<div className="container">
				<div className="form-title">LogIn</div>
				<label htmlFor="username">
					<div>User Name</div>
				</label>
				<input
					type="text"
					placeholder="User Name"
					name="username"
					required
				/>
				<label htmlFor="password">
					<div>Password</div>
				</label>
				<input
					type="password"
					placeholder="Password"
					name="password"
					required
				/>
				<button
					type="submit"
					className="login-button">
					Login
				</button>
			</div>
		</form>
	);
}
