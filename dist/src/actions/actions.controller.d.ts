import { ActionsService } from './actions.service';
import { CreateActionDto } from './dto/create-action.dto';
import { UpdateActionDto } from './dto/update-action.dto';
export declare class ActionsController {
    private readonly actionsService;
    constructor(actionsService: ActionsService);
    create(createActionDto: CreateActionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateActionDto: UpdateActionDto): string;
    remove(id: string): string;
}
