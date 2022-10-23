import * as express from 'express';
import { Application } from 'express';
import { loginUser } from './users/auth.route';
import { deleteCourse } from './podcasts/delete-podcast.route';
import { getAllPodcasts, getPodcastByUrl } from './podcasts/get-podcasts.route';
import { createPodcast } from './podcasts/create-podcast.route';
import { savePodcast } from './podcasts/save-podcast.route';
import { getAllEpisodes } from './episodes/get-episodes.route';
import { getAllUsers } from './users/get-users.route';

const bodyParser = require('body-parser');
const app: Application = express();
const cors = require('cors');

app.use(cors({ origin: true }));
app.use(bodyParser.json());

app.route('/api/login').post(loginUser);
app.route('/api/users').post(getAllUsers);
app.route('/api/podcasts').get(getAllPodcasts);
app.route('/api/episodes').get(getAllEpisodes);
app.route('/api/podcast').post(createPodcast);
app.route('/api/podcast/:id').put(savePodcast);
app.route('/api/podcast/:id').delete(deleteCourse);
app.route('/api/podcast/:podcastUrl').get(getPodcastByUrl);
/* app.route('/api/lessons').get(searchLessons); */

const httpServer: any = app.listen(9000, () =>
  console.info('Simple HTTP REST API Server running at http://localhost:' + httpServer.address().port)
);

/**
 * Dummy data got from https://taddy.org/developers
 */
