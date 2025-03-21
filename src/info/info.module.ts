import { Module } from '@nestjs/common';
import { InfoController } from './info.controller';
import { ProjectService } from 'src/project/project.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ProjectModule } from 'src/project/project.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule, ProjectModule],
  controllers: [InfoController],
  providers: [ProjectService, PrismaService],
})
export class InfoModule {}
