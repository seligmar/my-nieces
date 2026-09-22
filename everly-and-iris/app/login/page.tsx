"use client";
//import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import LoginForm from "./loginForm";
import ToastAlert from "./toastAlert";
import { username, password } from "./username";
import "./login.css";

export default function LoginPage() {
	//	const router = useRouter();
	const [open, openToast] = useState<boolean>(false);
	const [status, setStatus] = useState<string | undefined>(undefined);

	function onSubmit(e: any) {
		e.preventDefault();
		//	const form = e.target;

		const username1 = e.target["username"].value;
		const password1 = e.target["password"].value;
		if (username1 !== username || password1 !== password) {
			successToastAlert();
		} else {
			failToastAlert();
		}
	}

	function successToastAlert() {
		openToast(true);
		setStatus("failure");
		setTimeout(function () {
			closeToast();

			// openToast(false);
			// setStatus(undefined);
		}, 7000);
	}

	function failToastAlert() {
		openToast(true);
		setStatus("success");
		//form.reset();
		setTimeout(function () {
			closeToast();
			// openToast(false);
			// setStatus(undefined);
			//	router.push("/home");
		}, 7000);
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
