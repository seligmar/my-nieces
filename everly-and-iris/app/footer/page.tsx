import {
	ForwardButton,
	BackButton,
} from "../forwardbackbuttons/forwardbackbutton";
import "./footer.css";

export default function Footer() {
	return (
		<footer className="footer">
			<BackButton />
			<ForwardButton />
		</footer>
	);
}
