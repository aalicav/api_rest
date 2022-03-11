const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [{
      nome: 'John Doe',
      email: 'alissonoliveira@gmailcom',
      password_hash: await bcrypt.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },
};
