import Image from "next/image";

export default function LoginPage() {
	return (
		<>
			<Image
				src={"/almond"}
        alt={"Almond Blossom, February 1890. Van Gogh Museum, Amsterdam"}}
				width={100}
				height={100}
			/>
			{/* <div>Image</div>{" "} */}
		</>
	);
}
