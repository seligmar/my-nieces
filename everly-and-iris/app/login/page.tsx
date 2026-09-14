import LoginForm from "./loginForm";
import Image from "next/image";
import "./login.css";

export default function LoginPage() {
	return (
		<div className="almond-blossom login-background">
			<Image
				// src='https://seligmar.github.io/robert-a-selig/route-map-vertical.jpg'
				src={"/blossoms.png"}
				alt={"Almond Blossom, February 1890. Van Gogh Museum, Amsterdam"}
				layout="fill"
				objectFit="contain"
			/>
			<LoginForm />
			{/* <form className="form-box login-background">This is my div</form> */}
		</div>
	);
}
