import { Controller, Get, Render } from '@nestjs/common';
import { ProjectService } from 'src/project/project.service';

@Controller('info')
export class InfoController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  @Render('info')
  renderInfo() {}

  @Get('data')
  async sendProjects() {
    return await this.projectService.getProjects();
  }
}
