import Sequelize, { Model } from 'sequelize'
import bcrypt from 'bcrypt'

class User extends Model {
  // User herdando características do Model
  static init(sequelize) {
    // static não precisa instanciar a classe (new ..)
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL, // campo apenas dentro da aplicação, sem gravar no BD
        password_hash: Sequelize.STRING,
        admin: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      },
    )

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 10)
      }
    })

    return this
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash)
  }
}

export default User
