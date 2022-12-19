import Badge from "../atoms/Badge";

export default function Container(props) {
	const centerStyle = "flex flex-1 flex-col mx-[60px]";
	const defaultStyle = "flex flex-1 flex-col h-[600px]";
	return (
		<div className={props.variant === "center" ? centerStyle : defaultStyle}>
			<div className="place-self-center w-fit mb-[-25px] py-2 px-[10px] text-2xl bg-black text-white font-fira font-medium text-center z-10">
				{props.containerTitle}
			</div>

			<div
				className={
					props.variant === "center"
						? "flex justify-center flex-col border-2 border-gray rounded-[30px] px-4 py-4 h-[470px]"
						: "flex justify-center flex-col border-2 border-gray rounded-[30px] px-4 py-4 h-[600px]"
				}
			>
				{props.elements.map((el) => {
					return <Badge badgeTitle={el} />;
				})}
			</div>
		</div>
	);
}
