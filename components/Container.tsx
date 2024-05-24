const containerTypes: Record<string, string> = {
	"primary": "px-96",
	"hero": "py-12",
}

export default function Container({
	  type = "primary",
	  children,
}: Readonly<{
  type: string;
  children: React.ReactNode;
}>) {
  return (
	<div className={"flex h-full w-full " + containerTypes[type]}>
	  {children}
	</div>
  );
}