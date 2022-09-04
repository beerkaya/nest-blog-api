import { Post } from "src/posts/entities/post.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("post-metas")
export class PostMeta {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @OneToOne(() => Post)
    @JoinColumn()
    post: Post;

    @Column({ type: "varchar", length: 255, nullable: true })
    key: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    content: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
