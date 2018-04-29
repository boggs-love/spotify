import Sequelize from 'sequelize';
import { monotonicFactory } from 'ulid';
import sequelize from '../utils/sequelize';

const ulid = monotonicFactory();

const RSVP = sequelize.define('rsvp', {
  id: {
    type: Sequelize.CHAR(26),
    field: 'rsvp_id',
    defaultValue: () => ulid().toLowerCase(),
    primaryKey: true,
    allowNull: false,
    validate: {
      isLowercase: true,
    },
    roles: {
      self: {
        get: true,
        set: false,
      },
    },
  },
  attending: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name',
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    field: 'last_name',
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  phone: {
    type: Sequelize.STRING(20),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  note: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
}, {
  underscored: true,
  timestamps: true,
  createdAt: 'created',
  updatedAt: false,
  freezeTableName: true,
});

export default RSVP;
