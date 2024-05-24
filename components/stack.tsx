function StackItem({ text }: { text: string }) {
  return(
	<div className="relative w-full">
		<div className="top-0">{text}</div>
		<div className="absolute top-0 h-2"></div>
	</div>
  )
}

export default function Stack({ items }: { items: string[] }) {
  return (
	<div className="relative">
	  {items.map((item) => (
		<StackItem key={item} text={item} />
	  ))}
	</div>
  );
}