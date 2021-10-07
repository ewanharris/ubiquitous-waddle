import { GameState, InfoResponse, Move, MoveResponse } from './types';

/**
 * Returns the snakes information
 *
 * @export
 * @returns {InfoResponse}
 */
export function snakeInfo (): InfoResponse {
	return {
		apiversion: '1',
		author: 'Ewan Harris',
		color: '#46b1d3',
		head: 'default',
		tail: 'default'
	};
}

/**
 * Things we want to run on game start.
 *
 * @export
 * @param {GameState} state
 */
export function start (state: GameState): void {
	console.log(`Starting ${state.game.id}`);
}

/**
 * Things we want to run on game start.
 *
 * @export
 * @param {GameState} state
 */
export function end (state: GameState): void {
	console.log(`Stopping ${state.game.id}`);
}

/**
 * Determine the correct move to make
 *
 * @export
 * @param {GameState} state
 * @returns {MoveResponse}
 */
export function move (state: GameState): MoveResponse {
	/**
	 * Pick a random move, because that's fun! The next steps to take are:
	 *
	 * 1. Don't move back onto our neck
	 * 2. Make sure we're not going to go outside the walls
	 * 3. Don't hit any of our body parts
	 * 4. Hungry? Best find food
	 */

	const possibleMoves: Record<Move, boolean> = {
		up: true,
		right: true,
		down: true,
		left: true
	};

	const { head, body } = state.you;
	const neck = body[0];

	if (neck.x < head.x) {
		possibleMoves.left = false;
	} else if (neck.x > head.x) {
		possibleMoves.right = false;
	} else if (neck.y < head.y) {
		possibleMoves.down = false;
	} else if (neck.y > head.y) {
		possibleMoves.up = false;
	}

	const validMoves = (Object.keys(possibleMoves) as Move[]).filter(move => possibleMoves[move]);
	return {
		move: validMoves[Math.floor(Math.random() * validMoves.length)]
	};
}
