import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';
import { ActionsModule } from './actions/actions.module';
import { Permission } from './permissions/entities/permission.entity';
import { Role } from './roles/entities/role.entity';
import { Tag } from './tags/entities/tag.entity';
import { Task } from './tasks/entities/task.entity';
import { Blog } from './blogs/entities/blog.entity';
import { DataSource } from 'typeorm';
import { Action } from './actions/entities/action.entity';
import { BlogsModule } from './blogs/blogs.module';
import { TagsModule } from './tags/tags.module';
import { TasksModule } from './tasks/task.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // connectString: 'postgres://postgres:postgrespw@localhost:32768',
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'mysecretpassword',
      database: 'postgres',
      // entities: [Tag, Task, Blog, Action, Permission, Role, User],
      // synchronize: true,
      // dropSchema: true,
      // url: 'postgres://dtugdfdr:3wFsVVYW_bHokKTTzHKtN53KqdM2wGeX@hattie.db.elephantsql.com/dtugdfdr',
      // type: 'postgres',
      // host: 'hattie.db.elephantsql.com',
      // port: 5432,
      // database: 'dtugdfdr',
      // username: 'dtugdfdr',
      // password: '3wFsVVYW_bHokKTTzHKtN53KqdM2wGeX',
      entities: [Tag, Action, Permission, Role, User, Task],
      synchronize: true,
      logging: false,
    }),
    UsersModule,
    AuthModule,
    ConfigModule.forRoot(),
    RolesModule,
    PermissionsModule,
    ActionsModule,
    BlogsModule,
    TagsModule,
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
