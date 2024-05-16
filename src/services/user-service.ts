import { TokenRepository } from './../repositories/token-repository';
import { UserRepository } from './../repositories/user-repository';
import { ResponseError } from '../handlers/response-error';
import { LoginUserRequest } from '../models/request/user-request';
import { UserResponse } from '../models/response/user-response';
import { UserValidation } from '../validations/user-validation';
import { Validation } from '../validations/validation';
import bcrypt from 'bcrypt';

export class UserService {
  public static async login(req: LoginUserRequest): Promise<UserResponse> {
    const loginRequest = Validation.validate(UserValidation.LOGIN, req);
    let user = await UserRepository.findUserByUsername(loginRequest.username);

    if (
      !user ||
      !(await bcrypt.compare(loginRequest.password, user.password))
    ) {
      throw new ResponseError(401, 'Invalid username or password');
    }

    const token = await TokenRepository.generate(user);
    return {
      username: user.username,
      name: user.name,
      token: token!,
    };
  }

  public static async logout(token: string): Promise<void> {
    await TokenRepository.deleteByToken(token);
  }
}
