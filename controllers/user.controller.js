import users from '../dev-data/data/users.json' assert { type: 'json' };
import bcrypt from 'bcrypt';

export const getUsers = async (req, res) => {
  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
};

export const getUserById = async (req, res) => {
  const { id } = req.params;

  const user = users.find((user) => user._id === id);

  if (!user) {
    return res.status(404).json({
      status: 'fail',
      message: 'User not found',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
};

export const createUser = async (req, res) => {
  const { name, email, role, active, photo, password } = req.body;
  const newId = Date.now().toString();

  const hashedPassword = await bcrypt.hash(password, 10);

  const userData = {
    name,
    email,
    role,
    active,
    photo,
    password: hashedPassword,
  };

  const newUser = {
    _id: newId,
    ...userData,
    role: userData.role || 'user',
    active: true,
  };

  users.push(newUser);

  res.status(201).json({
    status: 'success',
    data: {
      user: newUser,
    },
  });
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, role, active, photo, password } = req.body;

  const userIndex = users.findIndex((user) => user._id === id);

  if (userIndex === -1) {
    return res.status(404).json({
      status: 'fail',
      message: 'User not found',
    });
  }

  const userData = {};
  if (name !== undefined) userData.name = name;
  if (email !== undefined) userData.email = email;
  if (role !== undefined) userData.role = role;
  if (active !== undefined) userData.active = active;
  if (photo !== undefined) userData.photo = photo;

  if (password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    userData.password = hashedPassword;
  }

  const updatedUser = {
    ...users[userIndex],
    ...userData,
  };

  updatedUser._id = id;

  users[userIndex] = updatedUser;

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser,
    },
  });
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  const userIndex = users.findIndex((user) => user._id === id);

  if (userIndex === -1) {
    return res.status(404).json({
      status: 'fail',
      message: 'User not found',
    });
  }

  users.splice(userIndex, 1);

  res.status(204).end();
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  
};
