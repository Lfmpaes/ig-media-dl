import { Injectable } from '@nestjs/common';
import { Prisma, PrismaService } from 'src/modules/prisma';

@Injectable()
export class LinksRepository {
  constructor(private readonly prismaService: PrismaService) {}

  getAllLinks() {
    return this.prismaService.links.findMany();
  }

  getLink(input: Prisma.LinksWhereUniqueInput) {
    return this.prismaService.links.findUnique({
      where: input,
    });
  }

  createLink(input: Prisma.LinksCreateInput) {
    return this.prismaService.links.create({
      data: input,
    });
  }

  deleteLink(id: string) {
    return this.prismaService.links.delete({
      where: {
        id,
      },
    });
  }
}
