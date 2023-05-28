import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RefreshTokenDto } from './dto/refresh.dto';
import { RegisterDto } from './dto/register.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(request: any, ip: string, body: LoginDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: Omit<import("../users/entities/user.entity").User, "password">;
    }>;
    register(request: any, ip: string, body: RegisterDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: Omit<import("../users/entities/user.entity").User, "password">;
    }>;
    refreshToken(body: RefreshTokenDto): Promise<string>;
    logout(body: RefreshTokenDto): Promise<boolean>;
}
