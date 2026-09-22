"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import LoginForm from "./loginForm";
import ToastAlert from "./toastAlert";
import { username, password } from "./username";
import "./login.css";

export default function LoginPage() {
	const router = useRouter();
	const [open, openToast] = useState<boolean>(false);
	const [status, setStatus] = useState<string | undefined>(undefined);

	function onSubmit(e: any) {
		e.preventDefault();
		const form = e.target;
		const username1 = e.target["username"].value;
		const password1 = e.target["password"].value;
		if (username1 !== username || password1 !== password) {
			successToastAlert();
		} else {
			failToastAlert();
		}
		form.reset();
	}

	function successToastAlert() {
		openToast(true);
		setStatus("failure");
		setTimeout(function () {
			closeToast();
		}, 7000);
	}

	function failToastAlert() {
		openToast(true);
		setStatus("success");
		setTimeout(function () {
			closeToast();
			router.push("/home");
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
