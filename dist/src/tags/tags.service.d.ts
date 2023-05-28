import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tag } from './entities/tag.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
export declare class TagsService {
    private tagsRepository;
    constructor(tagsRepository: Repository<Tag>);
    create(createTagDto: CreateTagDto): Promise<Tag>;
    findAll(): Promise<Tag[]>;
    findOne(id: number): Promise<Tag>;
    update(id: number, updateTagDto: UpdateTagDto): Promise<UpdateResult>;
    remove(id: number): Promise<DeleteResult>;
}
