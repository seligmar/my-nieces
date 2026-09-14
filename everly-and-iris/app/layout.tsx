import "./globals.css";

export default function RootLayout({ children }: LayoutProps<"/">) {
	console.log(children);
	return (
		<html lang="en">
			<body>
				<title>A gift to my nieces</title>
				{children}
			</body>
		</html>
	);
}
