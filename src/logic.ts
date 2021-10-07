import { Coord, Move } from './types';

/**
 * Avoids a snake, snake could be yourself or another snake on the board.
 *
 * @export
 * @param {Record<Move, boolean>} possibleMoves
 * @param {Coord} head
 * @param {Coord[]} snake
 * @returns {Record<Move, boolean>}
 */
export function avoidSnake (possibleMoves: Record<Move, boolean>, head: Coord, snake: Coord[]): Record<Move, boolean> {
	const { x: headX, y: headY } = head;


	for (const piece of snake) {
		const { x: pieceX, y: pieceY} = piece;

		if (headX === pieceX -1 && headY === pieceY) {
			possibleMoves.right = false;
		}

		if (headX === pieceX + 1 && headY === pieceY) {
			possibleMoves.left = false;
		}

		if (headY === pieceY - 1 && headX === pieceX) {
			possibleMoves.up = false;
		}

		if (headY === pieceY + 1 && headX === pieceX) {
			possibleMoves.down = false;
		}
	}

	return possibleMoves;
}
