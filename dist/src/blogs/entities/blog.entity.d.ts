import { Category } from 'src/categories/entities/category.entity';
import { Tag } from 'src/tags/entities/tag.entity';
export declare class Blog {
    id: number;
    title: string;
    description: string;
    file_path: string;
    categories: Category[];
    tags: Tag[];
}
