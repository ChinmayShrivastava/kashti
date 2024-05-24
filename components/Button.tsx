"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Button({
	href,
	className,
	children,
}: Readonly<{
	href: string;
	className?: string;
	children: React.ReactNode;
}>) {
	return (
		<Link href={href}>
			<button className={`relative bg-secondary-strong rounded-md ${className}`}>
				<motion.div
				className='absolute flex w-full h-full justify-center items-center bg-primary rounded-md'
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