import { Controller, Get, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { CreateLinkDto } from './dto/CreateLink.dto';
import { LinksService } from './links.service';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Get()
  async getLinks() {
    return this.linksService.getLinks();
    // return 'this.linksService.getLinks()';
  }

  @Post()
  async createLink(@Body() data: CreateLinkDto) {
    return data;
  }
}
