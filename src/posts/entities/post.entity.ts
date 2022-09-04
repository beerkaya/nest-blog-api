import { PostComment } from "src/post-comments/entities/post-comment.entity";
import { PostMeta } from "src/post-metas/entities/post-meta.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PostToCategory } from "./post-to-category.entity";
import { PostToTag } from "./post-to-tag.entity";

@Entity("posts")
export class Post {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => User, user => user.posts)
    user: User;

    @OneToMany(() => PostComment, comment => comment.post)
    comments: PostComment[];

    @OneToOne(() => PostMeta)
    meta: PostMeta;

    @ManyToOne(() => Post, post => post.children)
    parent: Post;

    @OneToMany(() => Post, post => post.parent)
    children: Post[];

    @OneToMany(() => PostToTag, postToTag => postToTag.post)
    public postToTags!: PostToTag[];

    @OneToMany(() => PostToCategory, postToCategory => postToCategory.post)
    public postToCategories!: PostToCategory[];

    @Column({ type: "varchar", length: 255, nullable: true })
    title: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    summary: string;

    @Column({ type: "boolean", default: false })
    isPublished: boolean;

    @Column({ type: "datetime", nullable: true })
    publishedAt: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}
