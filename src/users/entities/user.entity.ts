import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ name: "first_name", type: "varchar", length: 255, nullable: true })
    firstName: string

    @Column({ name: "last_name", type: "varchar", length: 255, nullable: true })
    lastName: string

    @Column({ type: "varchar", length: 255, nullable: true, unique: true })
    username: string

    @Column({ type: "varchar", length: 255, nullable: true, unique: true })
    email: string

    @Column({ type: "varchar", length: 255, nullable: true })
    password: string

    @CreateDateColumn({ name: 'last_registered', nullable: true })
    lastRegistered: Date

    @CreateDateColumn({ name: 'last_login', nullable: true })
    lastLogin: Date
}
