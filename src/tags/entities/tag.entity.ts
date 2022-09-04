import { PostToTag } from "src/posts/entities/post_to_tag.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("tags")
export class Tag {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @OneToMany(() => PostToTag, postToTag => postToTag.tag)
    public postToTags!: PostToTag[];

    @Column({ type: "varchar", length: 255, nullable: true })
    title: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    content: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
