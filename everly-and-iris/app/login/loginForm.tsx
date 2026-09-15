"use client";
import "./login.css";

export default function LoginForm({
	onSubmit,
}: {
	onSubmit: (e: any) => void;
}) {
	return (
		<form
			className="form-box login-background"
			onSubmit={onSubmit}>
			<div className="container">
				<div className="form-title">LogIn</div>
				<label htmlFor="username">
					<div>User Name</div>
				</label>
				<input
					type="text"
					placeholder="User Name"
					name="username"
					id="username"
					required
				/>
				<label htmlFor="password">
					<div>Password</div>
				</label>
				<input
					type="password"
					placeholder="Password"
					name="password"
					id="password"
					required
				/>
				<button
					type="submit"
					className="login-button">
					LogIn
				</button>
			</div>
		</form>
	);
}
