import "./globals.css";

export default function RootLayout({ children }: LayoutProps<"/">) {
	console.log(children);
	return (
		<html lang="en">
			<link
				rel="icon"
				href="/icon?<generated>"
				type="image/<generated>"
				sizes="<generated>"
			/>
			<body>
				<title>Everly & Iris</title>
				{children}
			</body>
		</html>
	);
}
