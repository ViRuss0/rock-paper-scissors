export default function getWinner(player1, player2) {
	const difference = player1 - player2;
	/// RETURN THE WINNER BASED ON THE CORRESPONDING INDEX IN SCORE ARRAY (0 IS PLAYER1, 1 IS PLAYER2) - IF THE INDEX OF PLAYER1 PICK IS GREATER THAN PLAYER 2 PICK, ODD VALUES GRANT PLAYER1 VICTORY - IF PLAYER1 PICK INDEX IS LOWER THAN PLAYER2 PICK INDEX, EVEN VALUES GRANT PLAYER1 VICTORY
	if (difference === 0) return 'tie';
	if (difference > 0) return difference % 2 !== 0 ? 0 : 1;
	return difference % 2 === 0 ? 0 : 1;
}
