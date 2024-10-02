import User from "../models/user";

export class UserRepository {
  public async create(user: any): Promise<User> {
    return await User.create(user);
  }

  public async findByEmail(email: string): Promise<User | null> {
    return await User.findOne({
      where: { email: email.toLowerCase() },
    });
  }

  public async findByEmailWithPassword(email: string): Promise<User | null> {
    return await User.findOne({
      where: { email: email.toLowerCase(), is_deleted: false },
    });
  }

  public async findById(id: string): Promise<User | null> {
    const user = await User.findByPk(id);
    if (user?.is_deleted === false) return user;
    return null;
  }


}

export default new UserRepository();
