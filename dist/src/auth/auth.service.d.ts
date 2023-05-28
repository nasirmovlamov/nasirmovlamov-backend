import RefreshToken from './entity/refresh-token.entity';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
export declare class AuthService {
    private readonly usersService;
    private refreshTokens;
    constructor(usersService: UsersService);
    refresh(refreshStr: string): Promise<string | undefined>;
    retrieveRefreshToken(refreshStr: string): Promise<RefreshToken | undefined>;
    login(email: string, password: string, values: {
        userAgent: string;
        ipaddress: string;
    }): Promise<{
        accessToken: string;
        refreshToken: string;
        user: Omit<User, 'password'>;
    } | undefined>;
    private createNewRefreshAndAccessToken;
    logout(refreshStr: string): Promise<boolean>;
    checkUserExists(email: string): Promise<boolean>;
    register(name: string, email: string, password: string, values: {
        userAgent: string;
        ipaddress: string;
    }): Promise<{
        accessToken: string;
        refreshToken: string;
        user: Omit<User, 'password'>;
    } | undefined>;
}
