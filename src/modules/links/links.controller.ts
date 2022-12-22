import { Controller, Get, Post } from '@nestjs/common';
import { Body, Delete, Param, Query } from '@nestjs/common/decorators';
// import { CreateLinkDto } from './dto/CreateLink.dto';
import { LinksService } from './links.service';

@Controller('/links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Get()
  async getLinks() {
    const allLinks = await this.linksService.findAll();
    return allLinks;
    // return 'this.linksService.getLinks()';
  }

  @Get('/:id')
  async getLink(@Param('id') id: string) {
    const returnedLink = await this.linksService.findOne(id);
    // if (query) console.log(query);
    return returnedLink;
  }

  @Get('/:id/urlonly')
  async getLinkUrlOnly(@Param('id') id: string) {
    const returnedLink = await this.linksService.findOne(id);
    return returnedLink.url;
  }

  @Post()
  async createLink(@Body() data) {
    const createdLink = await this.linksService.create(data);
    return createdLink;
  }

  @Delete('/:id')
  deleteLink(@Param('id') id: string) {
    // console.log('deleting');
    // return { message: id };
    return this.linksService.remove(id);
  }
}
