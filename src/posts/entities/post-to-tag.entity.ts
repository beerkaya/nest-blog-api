import { Tag } from "src/tags/entities/tag.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./post.entity";

@Entity('posts-tags')
export class PostToTag {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    postId: string;

    @Column()
    tagId: string;

    @ManyToOne(() => Post, (post) => post.postToTags)
    public post!: Post;

    @ManyToOne(() => Tag, (tag) => tag.postToTags)
    public tag!: Tag;
}
