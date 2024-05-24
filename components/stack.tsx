function StackItem({ text , selected = false }: { text: string , selected?: boolean }) {
  return(
	<div className="relative w-full h-14"
	// transform if selected, X and Y 10px
	style={{transform: selected ? "translate(6px, -6px)" : ""}}
	>
		<div 
		className={"h-3/4 rounded-md" + (selected ? " bg-secondary-strong" : " bg-secondary-light")}
		></div>
		<div className="absolute -top-3 left-4 text-xl">
			{text}
		</div>
	</div>
  )
}

export default function Stack({ items , selected }: { items: string[] , selected: number }) {
  return (
	<div className="relative flex flex-col gap-4 w-full">
	  {items.map((item, index) => (
		<StackItem key={item} text={item} selected={selected === index} />
	  ))}
	</div>
  );
}