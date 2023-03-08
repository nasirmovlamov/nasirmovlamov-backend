import { Injectable } from '@nestjs/common';
import RefreshToken from './entity/refresh-token.entity';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { sign, verify } from 'jsonwebtoken';
import { async } from 'rxjs';

@Injectable()
export class AuthService {
  private refreshTokens: RefreshToken[] = [];

  constructor(private readonly usersService: UsersService) {}

  async refresh(refreshStr: string): Promise<string | undefined> {
    const refreshToken = await this.retrieveRefreshToken(refreshStr);
    if (!refreshToken) {
      return undefined;
    }
    const user = await this.usersService.findOne(refreshToken.userId);
    if (!user) {
      return undefined;
    }

    const accessToken = {
      userId: user.id,
    };

    return sign(accessToken, process.env.ACCESS_SECRET, {
      expiresIn: '1h',
    });
  }

  async retrieveRefreshToken(
    refreshStr: string,
  ): Promise<RefreshToken | undefined> {
    try {
      const decoded = verify(refreshStr, process.env.REFRESH_SECRET);
      if (typeof decoded === 'string') {
        return undefined;
      }
      return Promise.resolve(
        this.refreshTokens.find(
          (refreshToken) => refreshToken.id === decoded.id,
        ),
      );
    } catch (error) {}
  }

  async login(
    email: string,
    password: string,
    values: {
      userAgent: string;
      ipaddress: string;
    },
  ): Promise<{ accessToken: string; refreshToken: string } | undefined> {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      return undefined;
    }
    if (user.password !== password) {
      return undefined;
    }

    return this.createNewRefreshAndAccessToken(user, values);
  }

  private async createNewRefreshAndAccessToken(
    user: User,
    values: {
      userAgent: string;
      ipaddress: string;
    },
  ): Promise<{
    accessToken: string;
    refreshToken: string;
  }> {
    const refreshObject = new RefreshToken({
      id:
        this.refreshTokens.length === 0
          ? 0
          : this.refreshTokens[this.refreshTokens.length - 1].id + 1,
      ...values,
      userId: user.id,
    });
    this.refreshTokens.push(refreshObject);
    return {
      refreshToken: refreshObject.sign(),
      accessToken: sign(
        {
          userId: user.id,
        },
        process.env.ACCESS_SECRET,
        {
          expiresIn: '1h',
        },
      ),
    };
  }

  async logout(refreshStr: string): Promise<boolean> {
    const refreshToken = await this.retrieveRefreshToken(refreshStr);
    if (!refreshToken) {
      return false;
    }
    this.refreshTokens = this.refreshTokens.filter(
      (refreshToken) => refreshToken.id !== refreshToken.id,
    );
    return true;
  }
}
