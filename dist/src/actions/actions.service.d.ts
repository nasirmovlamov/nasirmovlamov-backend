import { CreateActionDto } from './dto/create-action.dto';
import { UpdateActionDto } from './dto/update-action.dto';
export declare class ActionsService {
    create(createActionDto: CreateActionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateActionDto: UpdateActionDto): string;
    remove(id: number): string;
}
