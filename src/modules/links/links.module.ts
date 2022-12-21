import { Module } from '@nestjs/common';
import { LinksController } from './links.controller';
import { LinksRepository } from './links.repository';
import { LinksService } from './links.service';

@Module({
  controllers: [LinksController],
  providers: [LinksRepository, LinksService],
})
export class LinksModule {}
