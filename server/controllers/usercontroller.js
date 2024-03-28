const { User } = require('../database-mysql/index');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const [numberOfAffectedRows, affectedRows] = await User.update(body, {
      where: { id },
      returning: true,
    });
    if (!numberOfAffectedRows) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(affectedRows[0]);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Failed to update user' });
  }
};

module.exports = {
  getAllUsers,
  updateUser
};
