import { IsNumber, IsOptional, IsString } from 'class-validator';

export class ProjectDto {
  @IsOptional()
  @IsNumber()
  readonly id?: number;

  @IsString()
  readonly title: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsString()
  readonly detail: string;

  @IsString()
  readonly tags: string;
}
