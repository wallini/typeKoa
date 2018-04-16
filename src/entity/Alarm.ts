import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  BaseEntity
} from "typeorm";

@Entity()
export class Alarm extends BaseEntity {
  @PrimaryGeneratedColumn() id: number;

  @Column({ type: "varchar", length: 255 })
  systemLabel: string;

  @Column({ type: "varchar", length: 255 })
  lineLabel: string;

  @Column() alarmLevel: number;

  @Column() alarmStatus: number;

  @Column({ type: "varchar", length: 255 })
  deviceNo: string;

  @Column() stamp: number;

  @Column({ type: "varchar", length: 255 })
  status: string; //对应数组
}
