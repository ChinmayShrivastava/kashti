"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const buttonClasses: Record<string, string> = {
	"primary": "bg-primary text-white",
	"secondary": "bg-secondary-light text-white",
}

export default function Button({
	href,
	className,
	type = "primary",
	children,
}: Readonly<{
	href: string;
	className?: string;
	type?: string;
	children: React.ReactNode;
}>) {
	return (
		<Link href={href}>
			<button className={`relative bg-secondary-strong rounded-md ${className}`}>
				<motion.div
				className={'absolute flex w-full h-full justify-center items-center rounded-md ' + buttonClasses[type]}
				initial={{ top: -10, left: -10 }}
				whileHover={{ top: 0, left: 0 }}
				transition={{ duration: 0.3 }}
				>
					{children}
				</motion.div>
			</button>
		</Link>
	);
}