import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Gender, UserStatus } from 'src/entity/types/UserTableTypes'

@Entity()
export class User {
  /** id */
  @PrimaryGeneratedColumn()
  id: number

  /** IDaaSにて作成されたidを登録 */
  @Column()
  userId: string

  /** IDaaSにて作成されたemailを登録 */
  @Column()
  email: string

  /** 姓 */
  @Column()
  lastName: string

  /** 名 */
  @Column()
  first_name: string

  /** 性別 */
  /** nullは許可せず、回答なしの場合は'0'とする */
  @Column({ default: '0' })
  gender: Gender

  /** ユーザーステータス */
  @Column({ default: '0' })
  userStatus: UserStatus

  /** 新規登録日時 */
  @CreateDateColumn({ name: 'created_at', type: 'timestamp', precision: 0 })
  readonly createdAt: Date

  /** 最終更新日時 */
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', precision: 0 })
  readonly updatedAt: Date
}
