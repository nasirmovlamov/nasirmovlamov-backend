import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Blog } from './entities/blog.entity';
import { CategoryService } from 'src/categories/categories.service';
import { TagsService } from 'src/tags/tags.service';
export declare class BlogsService {
    private blogsRepository;
    private categoriesService;
    private tagsService;
    constructor(blogsRepository: Repository<Blog>, categoriesService: CategoryService, tagsService: TagsService);
    create(createBlogDto: CreateBlogDto): Promise<Blog>;
    findAll(): Promise<Blog[]>;
    findOne(id: number): Promise<Blog>;
    update(id: number, updateBlogDto: UpdateBlogDto): Promise<UpdateResult>;
    remove(id: number): Promise<DeleteResult>;
}
