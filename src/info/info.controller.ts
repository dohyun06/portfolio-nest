import { Controller, Get, Render } from '@nestjs/common';

@Controller('info')
export class InfoController {
  @Get()
  @Render('info')
  renderProjects() {
    return;
  }
}
