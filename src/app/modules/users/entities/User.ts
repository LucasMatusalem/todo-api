import { hashSync } from "bcryptjs";
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  id: string;
  @Column()
  username: string;
  @Column()
  pin: string;
  @CreateDateColumn()
  created_at: Date;
  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  @BeforeUpdate()
  hashpin(): void {
    this.pin = hashSync(this.pin, 8);
  }

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
