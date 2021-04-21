import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid"


@Entity("Users")
class User {

    @PrimaryColumn()
    id: string;

    @Column()
    email: string;

    @CreateDateColumn()
    create_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { User }