function Score({ name, score, color }) {
	return (
		<p
			className={`flex md:text-xl lg:text-2xl gap-2 items-center justify-center ${color}`}
		>
			<span>{name}</span>
			<span>- {score}</span>
		</p>
	);
}

export default Score;
