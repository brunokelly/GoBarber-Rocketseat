import User from '../models/User';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { getRepository } from 'typeorm';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error('Incorrect email/password combination.');
    }

    const passwordMatche = await compare(password, user.password);

    if (!passwordMatche) {
      throw new Error('Incorrect email/password combination.');
    }

    const token = sign({}, '84965ae2684d1200604b09122b3fb667', {
      subject: user.id,
      expiresIn: '1d',
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
