import RSVP from '../entities/rsvp';
import Guest from '../entities/guest';

const create = request => (
  // @see https://github.com/mickhansen/ssacl-attribute-roles/issues/13
  // @see https://github.com/sequelize/sequelize/issues/9402
  RSVP.build(request.payload, {
    role: 'self',
    include: [Guest],
  }).save().then(rsvp => rsvp.get({ role: 'self' }))
);

export default create;
