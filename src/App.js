import { useState } from 'react';
import PickButton from './components/PickButton';
import Score from './components/Score';
import ResultBox from './components/ResultBox';
import Button from './components/Button';

import getWinner from './utils/getWinner';
import elements from './data/elements';

function App() {
	const [score, setScore] = useState([
		{ name: 'Human', score: 0, color: 'text-emerald-300' },
		{ name: 'Machine', score: 0, color: 'text-red-300' },
	]);

	const [cpuMode, setCpuMode] = useState(false);
	/// USED TO RENDER THE MATCH RESULT
	const [result, setResult] = useState({ winner: '', pick1: '', pick2: '' });
	/// GETS A RANDOM ELEMENT FROM THE ELEMENT ARRAY
	const randomPick = () => Math.ceil(Math.random() * elements.length);

	const matchHandler = (player1Pick, player2Pick) => {
		///IF THERE IS NO PICK FROM THE USER, A RANDOM ELEMENT IS PICKED
		const player1 = !player1Pick ? randomPick() : player1Pick;
		const player2 = !player2Pick ? randomPick() : player2Pick;
		/// SAVES THE CHOICES IN THE MATCH RESULT OBJECT
		let matchResult = {
			pick1: elements[player1 - 1],
			pick2: elements[player2 - 1],
		};

		const winner = getWinner(player1, player2);
		setResult({ ...matchResult, winner });
		if (winner !== 'tie')
			setScore(
				score.map((player, i) =>
					i === winner ? { ...player, score: player.score + 1 } : player
				)
			);
	};

	const changeModeHandler = () => {
		setCpuMode((prev) => !prev);
		///IT RESETS THE SCORE AND CHANGES THE PLAYERS' NAMES
		setScore([
			{
				name: !cpuMode ? 'Good Machine' : 'Human',
				score: 0,
				color: 'text-emerald-300',
			},
			{
				name: !cpuMode ? 'Evil Machine' : 'Machine',
				score: 0,
				color: 'text-red-300',
			},
		]);
		/// IT CLEANS UP THE RESULTBOX SECTION
		setResult({ winner: '', pick1: '', pick2: '' });
	};

	const resetHandler = () => {
		setScore((prev) => prev.map((player) => ({ ...player, score: 0 })));
		setResult({ winner: '', pick1: '', pick2: '' });
	};
	return (
		<main className='bg-slate-700 min-h-screen flex p-6 md:p-10 items-center flex-col gap-16 justify-between'>
			<div className='flex gap-2 justify-center'>
				<Button
					onClick={changeModeHandler}
					color='bg-amber-600 hover:bg-amber-800'
				>
					{!cpuMode ? 'Enable' : 'Disable'} CPU Mode
				</Button>
				<Button onClick={resetHandler} color='bg-amber-600 hover:bg-amber-800'>
					Play again
				</Button>
			</div>

			<Score
				key={score[1].name}
				name={score[1].name}
				score={score[1].score}
				color={score[1].color}
			/>

			<ResultBox
				winner={score[result.winner] || result.winner}
				pick1={result.pick1}
				pick2={result.pick2}
			/>
			<Score
				key={score[0].name}
				name={score[0].name}
				score={score[0].score}
				color={score[0].color}
			/>

			<div className='flex justify-center items-center gap-4'>
				{!cpuMode ? (
					elements.map((el, i) => (
						<PickButton
							onClick={() => matchHandler(i + 1)}
							key={el.label}
							icon={el.icon}
							label={el.label}
						/>
					))
				) : (
					<Button onClick={() => matchHandler()} className=''>
						Run simulation
					</Button>
				)}
			</div>
		</main>
	);
}

export default App;
