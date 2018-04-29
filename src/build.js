import RSVP from './entities/rsvp';

RSVP.sync().then(() => {
  process.exit(0);
});
