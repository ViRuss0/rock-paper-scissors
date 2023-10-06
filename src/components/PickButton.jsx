function PickButton({ icon, label, ...rest }) {
	return (
		<div className='flex flex-col gap-2 items-center justify-center text-center'>
			<button {...rest} className='text-3xl rounded-full'>
				<img className='rounded-full w-16 md:w-24' src={icon} alt={label} />
			</button>
			<p className='text-slate-100'>
				{label && label[0].toUpperCase() + label.slice(1)}
			</p>
		</div>
	);
}

export default PickButton;
