import PickButton from './PickButton';

function ResultBox({ winner, pick1, pick2 }) {
	return (
		<div className='flex items-center justify-center h-40 md:h-64 gap-6 text-center flex-col'>
			<p className={`md:text-lg ${winner?.color || 'text-slate-100'}`}>
				{winner && (winner === 'tie' ? 'TIE' : `${winner?.name} wins`)}
			</p>
			{pick2 && <PickButton disabled icon={pick2.icon} />}
			{pick1 && <PickButton disabled icon={pick1.icon} />}
		</div>
	);
}

export default ResultBox;
