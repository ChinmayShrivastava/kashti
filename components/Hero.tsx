import Container from "./Container";
import Button from "./Button";
import Stack from "./stack";

export default function Hero() {
	return (
		<Container type="hero">
			<div className="flex justify-start w-full">
				<div className="flex flex-col w-full">
					<h1 className="text-4xl font-normal text-primary py-8">DON’T OVERWHELM YOUR USERS <br /> FOR YOUR RESEARCH.</h1>
					<Button
						href="/"
						className="w-full h-48"
					>
						<p className="text-3xl text-white">
							TRY IT NOW!
						</p>
					</Button>
				</div>
				<div className="w-1/2">
					<Stack
						items={[
							"Create your own research",
							"Invite your team",
							"Collect feedback",
							"Analyze the results",
						]}
					/>
				</div>
			</div>
		</Container>
	);
}