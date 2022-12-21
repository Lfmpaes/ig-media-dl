import { Injectable } from '@nestjs/common';
import { Prisma, Links as LinksModel } from '../prisma';
import { LinksRepository } from './links.repository';

@Injectable()
export class LinksService {
  constructor(private linksRepository: LinksRepository) {}

  getLinks() {
    // return 'linksService.getLinks()';
    return this.linksRepository.getAllLinks();
  }

  createLink(url) {
    // input =
    return this.linksRepository.createLink(url);
  }
}
