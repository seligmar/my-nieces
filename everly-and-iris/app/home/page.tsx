"use client";
import Image from "next/image";
import Header from "../header/page";
import "./home.css";

export default function HomePage() {
	function enterStory() {
		console.log("click?");
	}

	return (
		<>
			<Header />
			<div
				className="homepage-background"
				role="button"
				onClick={() => enterStory()}>
				<Image
					// src='https://seligmar.github.io/robert-a-selig/route-map-vertical.jpg'
					src={"/iris.png"}
					alt={"Almond Blossom, February 1890. Van Gogh Museum, Amsterdam"}
					width={600}
					height={600}
					//	layout="fill"
					//	objectFit="contain"
				/>
				<Image // src='https://seligmar.github.io/robert-a-selig/route-map-vertical.jpg'
					src={"/forest.png"}
					alt={"Almond Blossom, February 1890. Van Gogh Museum, Amsterdam"}
					width={600}
					height={600}
					//layout="fill"
					//	objectFit="contain"
				/>
				<div className="enter-text">Go To The Zoo</div>
			</div>
		</>
	);
}
