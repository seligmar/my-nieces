import "./globals.css";

export default function RootLayout({ children }: LayoutProps<"/">) {
	console.log(children);
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
