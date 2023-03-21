import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Blog } from './entities/blog.entity';
import { mkdir, writeFile } from 'fs/promises';
import path, { join } from 'path';
import { PDFDocument } from 'pdf-lib';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(Blog)
    private blogsRepository: Repository<Blog>,
  ) {}

  async create(createBlogDto: CreateBlogDto): Promise<Blog> {
    // convert base64 to file and save and upload to folder
    const base64Data = createBlogDto.fileBase64.replace(
      /^data:([A-Za-z-+/]+);base64,/,
      '',
    );
    const filePath = join(
      __dirname,
      '..',
      'uploads',
      `${createBlogDto.title.toLowerCase().replace(/\s/g, '_')}.mdx`,
    );

    // Create the uploads directory if it does not exist
    const uploadsDir = join(__dirname, '..', 'uploads');
    await mkdir(uploadsDir, { recursive: true });

    await writeFile(filePath, Buffer.from(base64Data, 'base64'));
    const createdBlog = await this.blogsRepository.create({
      title: createBlogDto.title,
      description: createBlogDto.description,
      categories: createBlogDto.categories,
      tags: createBlogDto.tags,
      file_path: filePath,
    });

    return await this.blogsRepository.save(createdBlog);
  }

  async findAll(): Promise<Blog[]> {
    return await this.blogsRepository.find({
      relations: ['tags', 'categories'],
    });
  }

  async findOne(id: number): Promise<Blog> {
    return await this.blogsRepository.findOne({
      where: { id },
      relations: ['tags', 'categories'],
    });
  }

  async update(
    id: number,
    updateBlogDto: UpdateBlogDto,
  ): Promise<UpdateResult> {
    return await this.blogsRepository.update(id, updateBlogDto);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.blogsRepository.delete(id);
  }
}
