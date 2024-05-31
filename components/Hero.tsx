import Container from "./Container";
import Button from "./Button";
import Stack from "./stack";

export default function Hero() {
	return (
		<Container type="hero">
			<div className="flex justify-start w-full gap-8 h-fit">
				<div className="flex flex-col w-full sm:w-3/5">
					<h1 className="text-4xl text-center sm:text-left font-normal text-primary py-8">DON’T OVERWHELM YOUR USERS <br /> FOR YOUR RESEARCH.</h1>
					<Button
						href="https://app.kashti.io/1f6af1a5-51b3-484a-bc73-4c6a56594c72"
						className="w-full h-56"
					>
						<p className="text-3xl text-white">
							TRY IT NOW!
						</p>
					</Button>
				</div>
				<div className="hidden sm:block sm:h-full sm:w-2/5 mt-auto">
					<Stack
						items={[
							"Usability Testing",
							"Diary Studies",
							"Heuristic Evaluation",
							"Cognitive Walkthrough",
							"Feature Requests",
						]}
						selected={1}
					/>
				</div>
			</div>
		</Container>
	);
}