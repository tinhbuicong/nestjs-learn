import { Expose, Transform } from "class-transformer";
export class PostDto {
  @Expose()
  id: number;

  @Expose()
  title: string;

  @Expose()
  createAt: Date;

  @Expose()
  description: string;

  @Transform(({ obj }) => obj.category.id)
  @Expose()
  categoryId: number;

  @Transform(({ obj }) => obj.category.name)
  @Expose()
  name: string;

  @Transform(({ obj }) => obj.user.id)
  @Expose()
  userId: number;

  @Transform(({ obj }) => obj.user.email)
  @Expose()
  email: number;
}
