import Link from "next/link";
import Image from "next/image";
import "./forwardbackbutton.css";

// buttonText: {buttonText: string}
export function ForwardButton() {
	const forwardButton = (
		<Link
			href=""
			className="forward-button">
			<div className="forward-back-button">
				<Image
					src={"/toucan2.png"}
					alt={""}
					width={150}
					height={100}
				/>
			</div>
		</Link>
	);
	return forwardButton;
}

export function BackButton() {
	const backButton = (
		<Link
			href=""
			className="forward-button">
			<div className="back-button forward-back-button">
				<Image
					src={"/toucanLeft.png"}
					alt={"previous page"}
					width={150}
					height={100}
					className="button-radius"
				/>
				<div className="back-button-text">Back</div>
			</div>
		</Link>
	);
	return backButton;
}
