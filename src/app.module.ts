import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { InfoModule } from './info/info.module';
import { ProjectModule } from './project/project.module';
import { PlanModule } from './plan/plan.module';

@Module({
  imports: [InfoModule, ProjectModule, PlanModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
