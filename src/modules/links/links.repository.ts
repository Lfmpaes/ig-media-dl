import { Injectable } from '@nestjs/common';
import { Prisma, PrismaService } from 'src/modules/prisma';

@Injectable()
export class LinksRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllLinks() {
    return await this.prismaService.links.findMany();
  }

  getLink(input: Prisma.LinksWhereUniqueInput) {
    return this.prismaService.links.findUnique({
      where: input,
    });
  }

  updateLink(id: string, input: Prisma.LinksUpdateInput) {
    return this.prismaService.links.update({
      data: input,
      where: {
        id: id,
      },
    });
  }

  createLink(input: Prisma.LinksCreateInput) {
    return this.prismaService.links.create({
      data: input,
    });
  }

  deleteLink(input: Prisma.LinksWhereUniqueInput) {
    return this.prismaService.links.delete({
      where: {
        id: input.id,
      },
    });
  }
}
