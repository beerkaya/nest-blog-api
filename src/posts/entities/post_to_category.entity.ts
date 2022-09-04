import { Category } from "src/categories/entities/category.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./post.entity";

@Entity('posts_categories')
export class PostToCategory {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    postId: string;

    @Column()
    categoryId: string;

    @ManyToOne(() => Post, (post) => post.postToCategories)
    public post!: Post;

    @ManyToOne(() => Category, (category) => category.postToCategories)
    public category!: Category;
}
