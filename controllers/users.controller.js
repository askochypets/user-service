import User from '../models/users.model';

export default {
  getAll: async (req, res) => {
    try {
      const users = await User.getAll();
      console.info('sending all users...');
      res.send(users);
    } catch (err) {
      console.error(`Error in getting users- ${err}`);
      res.send('Got error in getAll');
    }
  },

  addUser: async (req, res) => {
    const userToAdd = User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      city: req.body.city,
      email: req.body.email,
      phone: req.body.phone,
      notes: req.body.notes,
    });
    try {
      const result = await User.addUser(userToAdd);
      console.info('Adding User...');
      res.json(result);
    } catch (err) {
      console.error(`Error in adding user- ${err}`);
      res.send('Got error in addUser');
    }
  },

  deleteUser: async (req, res) => {
    const userId = req.params.id;
    try {
      const result = await User.deleteUser(userId);
      res.send(result);
    } catch (err) {
      console.error(`Error in deleting user- ${err}`);
      res.send('Got error in deleteUser');
    }
  },

  deleteAllUsers: async (req, res) => {
    try {
      const result = await User.deleteAll();
      res.send(result);
    } catch (err) {
      console.error(`Error in deleting users- ${err}`);
      res.send('Got error in deleteAllUsers');
    }
  },
};
