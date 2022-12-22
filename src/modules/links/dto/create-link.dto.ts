import { IsUrl } from 'class-validator';

export class CreateLinkDto {
  @IsUrl({ protocols: ['http', 'https'] }, { message: 'Insira uma URL válida' })
  url: string;
}
