const containerTypes: Record<string, string> = {
	"primary": "w-full max-w-5xl mx-auto px-4",
	"hero": "py-12",
	"feature": "py-12",
}

export default function Container({
	  type = "primary",
	  children,
}: Readonly<{
  type?: string;
  children: React.ReactNode;
}>) {
  return (
	<div className={"flex h-full w-full " + containerTypes[type]}>
	  {children}
	</div>
  );
}