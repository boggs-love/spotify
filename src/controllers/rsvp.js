import RSVP from '../entities/rsvp';

const create = request => (
  // @see https://github.com/mickhansen/ssacl-attribute-roles/issues/13
  RSVP.build().set(request.payload, { role: 'self' }).save()
    .then(rsvp => rsvp.get({ role: 'self' }))
);

export default create;
