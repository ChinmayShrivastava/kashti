import Container from "./Container";

export default function Navbar() {
	  return (
	<nav className="flex flex-col w-full justify-start">
		<div className="flex w-full justify-start items-center bg-primary py-4">
			<Container type="primary">
				<p className="text-white text-2xl font-medium">KASHTI</p>
			</Container>
		</div>
		<div className="flex w-full justify-start py-2 bg-secondary-strong"></div>
		<div className="flex w-full justify-start py-2 bg-secondary-light"></div>
	</nav>
  );
}