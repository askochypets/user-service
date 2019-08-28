import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    notes: { type: String },
  },
  { collection: 'User' },
);

const UsersModel = mongoose.model('User', UserSchema);

UsersModel.getAll = () => {
  return UsersModel.find({});
};

UsersModel.addUser = (userToAdd) => {
  return userToAdd.save();
};

UsersModel.deleteUser = (userId) => {
  return UsersModel.remove({ _id: userId });
};

UsersModel.deleteAll = () => {
  return UsersModel.remove({});
};

export default UsersModel;
