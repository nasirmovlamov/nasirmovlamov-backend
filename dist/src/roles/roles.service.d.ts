import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
import { DeleteResult, Repository } from 'typeorm';
import { PermissionsService } from 'src/permissions/permissions.service';
export declare class RolesService {
    private rolesRepository;
    private permissionsService;
    constructor(rolesRepository: Repository<Role>, permissionsService: PermissionsService);
    create(createRoleDto: CreateRoleDto): Promise<Role>;
    findAll(): Promise<Role[]>;
    findOne(id: number): Promise<Role>;
    findWithIds(ids: Role[]): Promise<Role[]>;
    update(id: number, updateRoleDto: UpdateRoleDto): Promise<any>;
    remove(id: number): Promise<DeleteResult>;
}
