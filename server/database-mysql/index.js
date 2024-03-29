// Import Sequelize and define connection
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('edoctor', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});


const User = sequelize.define('User', {

  Username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  UserType: {
    type: DataTypes.ENUM('Patient', 'Doctor'),
    allowNull: false,
  },
});


const Doctor = sequelize.define('Doctor', {
  imageUrl: {
    type: DataTypes.STRING,
    defaultValue: '',
    allowNull:true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reviews: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: []
  },
  appointments: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: []
  },
});


const Appointment = sequelize.define('Appointment', {

  AppointmentTime: {
    type: DataTypes.DATE,
  },
  Status: {
    type: DataTypes.ENUM('Pending', 'Accepted', 'Rejected'),
    defaultValue: 'Pending',
  },
  PaymentStatus: {
    type: DataTypes.ENUM('Paid', 'Unpaid'),
    defaultValue: 'Unpaid',
  },
});


const RatingsComments = sequelize.define('RatingsComments', {
  
  Rating: {
    type: DataTypes.INTEGER,
  },
  Comment: {
    type: DataTypes.TEXT,
  },
});


const Admin = sequelize.define('Admin', {
 
  Username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


const Payments = sequelize.define('Payments', {

  Amount: {
    type: DataTypes.DECIMAL(10, 2),
  },
  PaymentDate: {
    type: DataTypes.DATE,
  },
});

User.hasOne(Doctor);
Doctor.belongsTo(User);

User.hasMany(Appointment, { as: 'PatientAppointments', foreignKey: 'PatientID' });
User.hasMany(Appointment, { as: 'DoctorAppointments', foreignKey: 'DoctorID' });
Appointment.belongsTo(User, { as: 'Patient', foreignKey: 'PatientID' });
Appointment.belongsTo(User, { as: 'Doctor', foreignKey: 'DoctorID' });

User.hasMany(RatingsComments);
Doctor.hasMany(RatingsComments);
RatingsComments.belongsTo(User);
RatingsComments.belongsTo(Doctor);

// sequelize.sync()
//   .then(() => {
//     console.log('Database and tables created!');
//   })
//   .catch((error) => {
//     console.error('Error creating database and/or tables:', error);
//   });

module.exports = {
  User,
  Doctor,
  Appointment,
  RatingsComments,
  Admin,
  Payments,
};
