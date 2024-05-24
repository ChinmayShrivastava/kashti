import Hero from "./Hero";
import Features from "./Features";

export default function Base() {
	return (
		<div className="w-full h-fit">
			<Hero />
			<Features />
		</div>
	);
}