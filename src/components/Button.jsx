function Button({ color, children, ...rest }) {
	return (
		<button
			{...rest}
			className={`p-2 w-40 rounded-full text-slate-100 transition-all duration-150 ${
				color ? color : 'bg-emerald-600 hover:bg-emerald-800'
			}`}
		>
			{children}
		</button>
	);
}

export default Button;
