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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./users/entities/user.entity");
const roles_module_1 = require("./roles/roles.module");
const permissions_module_1 = require("./permissions/permissions.module");
const actions_module_1 = require("./actions/actions.module");
const permission_entity_1 = require("./permissions/entities/permission.entity");
const role_entity_1 = require("./roles/entities/role.entity");
const tag_entity_1 = require("./tags/entities/tag.entity");
const category_entity_1 = require("./categories/entities/category.entity");
const blog_entity_1 = require("./blogs/entities/blog.entity");
const typeorm_2 = require("typeorm");
const action_entity_1 = require("./actions/entities/action.entity");
const blogs_module_1 = require("./blogs/blogs.module");
const tags_module_1 = require("./tags/tags.module");
const categories_module_1 = require("./categories/categories.module");
let AppModule = class AppModule {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'hattie.db.elephantsql.com',
                port: 5432,
                database: 'dtugdfdr',
                username: 'dtugdfdr',
                password: '3wFsVVYW_bHokKTTzHKtN53KqdM2wGeX',
                entities: [tag_entity_1.Tag, category_entity_1.Category, blog_entity_1.Blog, action_entity_1.Action, permission_entity_1.Permission, role_entity_1.Role, user_entity_1.User],
                synchronize: true,
                logging: false,
            }),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            config_1.ConfigModule.forRoot(),
            roles_module_1.RolesModule,
            permissions_module_1.PermissionsModule,
            actions_module_1.ActionsModule,
            blogs_module_1.BlogsModule,
            tags_module_1.TagsModule,
            categories_module_1.CategoriesModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    }),
    __metadata("design:paramtypes", [typeorm_2.DataSource])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map