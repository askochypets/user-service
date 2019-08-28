import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    position: { type: String, required: true },
    birthdate: { type: String, required: true },
    description: { type: String },
    worksRemotely: { type: Number },
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
