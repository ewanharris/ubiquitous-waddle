import fastify from 'fastify';
import { end, move, snakeInfo, start } from './routes';
import { GameState } from './types';

const server = fastify();

server.get('/', async () => {
	return snakeInfo();
});

server.post<{ Body: GameState }>('/start', async (request) => {
	start(request.body);
	return {};
});

server.post<{ Body: GameState }>('/move', async (request) => {
	return move(request.body);
});

server.post<{ Body: GameState }>('/end', async (request) => {
	end(request.body);
	return {};
});

server.listen(8080, (err, address) => {
	if (err) {
		console.error(err);
		process.exit(1);
	}
	console.log(`Server listening at ${address}`);
});
