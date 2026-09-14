import Image from "next/image";

export default function LoginPage() {
	return (
		<>
			<Image
				//              src='https://seligmar.github.io/robert-a-selig/route-map-vertical.jpg'
				src={"/almond.jpeg"}
				alt={"Almond Blossom, February 1890. Van Gogh Museum, Amsterdam"}
				width={100}
				height={100}
			/>
			{/* <div>Image</div>{" "} */}
		</>
	);
}
