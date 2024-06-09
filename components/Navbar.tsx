import Container from "./Container";

export default function Navbar() {
	  return (
	<nav className="flex flex-col w-full justify-start">
		<div className="flex w-full justify-start items-center bg-primary py-4">
			<Container type="primary">
				<div className="flex justify-between items-center w-full">
				<p className="text-white text-2xl font-medium">KASHTI</p>
				<a className="" href="https://cal.com/chinmayshrivastava/30min">
					<button className="p-2 px-4 bg-white rounded-full text-primary-strong">
						Book a Demo
					</button>
				</a>
				</div>
			</Container>
		</div>
		<div className="flex w-full justify-start py-2 bg-secondary-strong"></div>
		<div className="flex w-full justify-start py-2 bg-secondary-light"></div>
	</nav>
  );
}