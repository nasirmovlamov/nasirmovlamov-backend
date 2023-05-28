"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const refresh_token_entity_1 = require("./entity/refresh-token.entity");
const users_service_1 = require("../users/users.service");
const jsonwebtoken_1 = require("jsonwebtoken");
let AuthService = class AuthService {
    constructor(usersService) {
        this.usersService = usersService;
        this.refreshTokens = [];
    }
    async refresh(refreshStr) {
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
            roles: user.roles,
        };
        return (0, jsonwebtoken_1.sign)(accessToken, process.env.ACCESS_SECRET, {
            expiresIn: '1h',
        });
    }
    async retrieveRefreshToken(refreshStr) {
        try {
            const decoded = (0, jsonwebtoken_1.verify)(refreshStr, process.env.REFRESH_SECRET);
            if (typeof decoded === 'string') {
                return undefined;
            }
            return Promise.resolve(this.refreshTokens.find((refreshToken) => refreshToken.id === decoded.id));
        }
        catch (error) { }
    }
    async login(email, password, values) {
        const user = await this.usersService.findByEmailAndGetPassword(email);
        if (!user) {
            return undefined;
        }
        if (user.password !== password) {
            return undefined;
        }
        const token = await this.createNewRefreshAndAccessToken(user, values);
        return Object.assign(Object.assign({}, token), { user: {
                id: user.id,
                name: user.name,
                email: user.email,
                roles: user.roles,
                permissions: user.permissions,
            } });
    }
    async createNewRefreshAndAccessToken(user, values) {
        const refreshObject = new refresh_token_entity_1.default(Object.assign(Object.assign({ id: this.refreshTokens.length === 0
                ? 0
                : this.refreshTokens[this.refreshTokens.length - 1].id + 1 }, values), { userId: user.id, roles: user.roles, permissions: user.roles.map((role) => role.permissions).flat() }));
        this.refreshTokens.push(refreshObject);
        return {
            refreshToken: refreshObject.sign(),
            accessToken: (0, jsonwebtoken_1.sign)({
                userId: user.id,
                roles: user.roles,
                permissions: user.roles.map((role) => role.permissions).flat(),
            }, process.env.ACCESS_SECRET, {
                expiresIn: '1h',
            }),
        };
    }
    async logout(refreshStr) {
        const refreshToken = await this.retrieveRefreshToken(refreshStr);
        if (!refreshToken) {
            return false;
        }
        this.refreshTokens = this.refreshTokens.filter((refreshToken) => refreshToken.id !== refreshToken.id);
        return true;
    }
    async checkUserExists(email) {
        const user = await this.usersService.findByEmail(email);
        return Boolean(user);
    }
    async register(name, email, password, values) {
        const createdUser = await this.usersService.create({
            name,
            email,
            password,
            roles: [],
        });
        const tokens = await this.createNewRefreshAndAccessToken(createdUser, values);
        return Object.assign(Object.assign({}, tokens), { user: Object.assign({}, createdUser) });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map