import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tags")
export class Tag {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    title: string;

    @Column({ type: "varchar", length: 255, nullable: true })
    content: string;
}
