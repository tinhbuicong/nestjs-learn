import { Transform } from "class-transformer";
import { IsString, IsNumber, IsDate } from "class-validator";
export class CreatePostDto {
  @IsString()
  title: string;

  @IsNumber()
  categoryId: number;

  @IsString()
  image: string;

  @IsString()
  description: string;

  @IsDate()
  createdAt: Date = new Date();
}
