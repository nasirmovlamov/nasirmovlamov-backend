import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { Permission } from './entities/permission.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
export declare class PermissionsService {
    private permissionsRepository;
    constructor(permissionsRepository: Repository<Permission>);
    create(createPermissionDto: CreatePermissionDto): Promise<Permission>;
    findAll(): Promise<Permission[]>;
    findOne(id: number): Promise<Permission>;
    findWithIds(ids: Permission[]): Promise<Permission[]>;
    update(id: number, updatePermissionDto: UpdatePermissionDto): Promise<UpdateResult>;
    remove(id: number): Promise<DeleteResult>;
}
