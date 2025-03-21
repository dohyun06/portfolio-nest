import { Controller, Get, Param, Render } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectDto } from './dto/project.dto';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  @Render('projects')
  renderProjects() {}

  @Get('data')
  async sendDatas(): Promise<ProjectDto[]> {
    return await this.projectService.getProjects();
  }

  @Get(':id')
  @Render('project')
  renderProject() {}

  @Get(':id/data')
  async sendData(@Param() data: { id: string }): Promise<ProjectDto[]> {
    return await this.projectService.getProject(data);
  }
}
