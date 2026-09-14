"use client";
import { useState } from "react";
import Image from "next/image";
import LoginForm from "./loginForm";
import ToastAlert from "./toastAlert";
import { username, password } from "./username";
import "./login.css";

export default function LoginPage() {
	const [open, openToast] = useState<boolean>(false);
	const [status, setStatus] = useState<string | undefined>(undefined);

	function onSubmit(e: any) {
		e.preventDefault();
		const username1 = e.target["username"].value;
		const password1 = e.target["password"].value;
		if (username1 !== username || password1 !== password) {
			openToast(true);
			setStatus("failure");
			setTimeout(function () {
				openToast(false);
				setStatus(undefined);
			}, 7000);
		} else {
			openToast(true);
			setStatus("success");
			//  form.reset();
			setTimeout(function () {
				openToast(false);
				setStatus(undefined);
			}, 7000);
		}
	}

	function closeToast() {
		setStatus(undefined);
		openToast(false);
	}

	return (
		<div className="almond-blossom login-background">
			<ToastAlert
				closeToast={closeToast}
				open={open}
				status={status}
			/>
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
