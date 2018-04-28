import Hapi from 'hapi';
import spotifySearch from './controllers/spotify/search';

const server = Hapi.server({
  port: 80,
  host: '0.0.0.0',
});

server.route({
  method: 'GET',
  path: '/api/spotify/tracks',
  handler: spotifySearch,
});


const init = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
