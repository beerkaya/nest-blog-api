import { Post } from "src/posts/entities/post.entity";
import * as bcrypt from 'bcrypt';
import { AfterLoad, BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    private tempPassword: string
    @AfterLoad()
    private loadTempPassword(): void {
        this.tempPassword = this.password;
    }

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword() {
        const isMatch = await bcrypt.compare(this.password, this.tempPassword);
        if (isMatch) {
            this.password = this.tempPassword;
        } else {
            this.password = await bcrypt.hash(this.password, 10);
        }
    }
}
