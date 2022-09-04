import { Post } from "src/posts/entities/post.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("post_comments")
export class PostComment {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => Post, post => post.comments)
    post: Post;

    @ManyToOne(() => PostComment, comment => comment.children)
    parent: PostComment;

    @OneToMany(() => PostComment, comment => comment.parent)
    children: PostComment[];

    @Column({ type: "varchar", length: 255, nullable: true })
    title: string;

    @Column({ type: "text", nullable: true })
    content: string;

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
