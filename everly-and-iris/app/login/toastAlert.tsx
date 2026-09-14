"use client";
import "./toast-alert.css";

export default function ToastAlert({
	closeToast,
	open,
	status,
}: {
	closeToast: () => void;
	open: boolean;
	status: string | undefined;
}) {
	const class1 = "toast-alert";
	const class2 = open ? "show" : "hide";
	const class3 = status;

	const successMessage = "Welcome! <3";

	const failureMessage = "Please contact Aunt Mimi <3";

	return (
		<div
			id="alert"
			className={class1 + " " + class2 + " " + class3}>
			{status === "success" ? successMessage : failureMessage}
			<button
				className="close-alert-button"
				onClick={() => closeToast()}>
				X
			</button>
		</div>
	);
}
