import { TagsService } from './tags.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
export declare class TagsController {
    private readonly tagsService;
    constructor(tagsService: TagsService);
    create(createTagDto: CreateTagDto): Promise<import("./entities/tag.entity").Tag>;
    findAll(): Promise<import("./entities/tag.entity").Tag[]>;
    findOne(id: string): Promise<import("./entities/tag.entity").Tag>;
    update(id: string, updateTagDto: UpdateTagDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
