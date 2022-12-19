export default function Button(props) {
	return (
		<div className="absolute flex">
			<div className="px-3 py-1 text-base font-medium text-white transition duration-300 ease-in bg-black border rounded-lg border-green font-fira hover:bg-transparent hover:cursor-pointer">
				{props.title}
			</div>
			<div className="absolute left-0 px-3 py-1 text-base font-medium text-white border rounded-lg bg-gradient-to-r from-green to-gray border-green font-fira -z-10">
				{props.title}
			</div>
		</div>
	);
}
