import { Injectable } from '@nestjs/common';
import { Prisma } from 'src/modules/prisma';
import { CreateLinkDto } from './dto/create-link.dto';
import { UpdateLinkDto } from './dto/update-link.dto';
import { LinksRepository } from './links.repository';

@Injectable()
export class LinksService {
  constructor(private linksRepository: LinksRepository) {}

  async findAll() {
    // return 'linksService.getLinks()';
    const allLinks = this.linksRepository.getAllLinks();
    return allLinks;
  }

  async findOne(id: string) {
    const input: Prisma.LinksWhereUniqueInput = { id: id };
    const foundLink = await this.linksRepository.getLink(input);
    return foundLink;
  }

  create(createLinkDto: CreateLinkDto) {
    // input =
    return this.linksRepository.createLink(createLinkDto);
  }

  update(id: string, url: string) {
    const input: Prisma.LinksUpdateInput = { id: id, url: url };
    return this.linksRepository.updateLink(id, input);
  }

  remove(id: string) {
    const input: Prisma.LinksWhereUniqueInput = { id: id };
    return this.linksRepository.deleteLink(input);
  }
}
