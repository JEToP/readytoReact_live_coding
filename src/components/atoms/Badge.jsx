export default function Badge(props) {
	return (
		<div>
			<div className="py-4 my-2 text-lg font-medium text-center text-white border-2 border-green rounded-2xl bg-gradient-to-r from-green to-gray">
				{props.badgeTitle}
			</div>
			<div className="my-2 border-2 rounded-2xl border-green py-4 text-lg text-white font-medium text-center hover:border-transparent bg-black hover:bg-transparent transition duration-500 ease-in-out mt-[-72px]">
				{props.badgeTitle}
			</div>
		</div>
	);
}
