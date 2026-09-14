"use client";
import LoginForm from "./loginForm";
import Image from "next/image";
import { username, password } from "./username";
//import password from "./username";
import "./login.css";

export default function LoginPage() {
	function onSubmit(e: any) {
		e.preventDefault();
		const username1 = e.target["username"].value;
		const password1 = e.target["password"].value;
		console.log(e.target);
		if (username1 !== username || password1 !== password) console.log("nope");
		else {
			console.log("hooray!");
		}
	}

	return (
		<div className="almond-blossom login-background">
			<Image
				// src='https://seligmar.github.io/robert-a-selig/route-map-vertical.jpg'
				src={"/blossoms.png"}
				alt={"Almond Blossom, February 1890. Van Gogh Museum, Amsterdam"}
				layout="fill"
				objectFit="contain"
			/>
			<LoginForm onSubmit={onSubmit} />
		</div>
	);
}
