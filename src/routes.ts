import { GameState, InfoResponse, Move, MoveResponse } from "./types";

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

	const possibleMoves: Move[] = [ 'up', 'right', 'down', 'left' ];
	return {
		move: possibleMoves[Math.floor(Math.random() * possibleMoves.length)]
	};
}
