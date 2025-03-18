import { Controller, Get, Redirect } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Redirect('/info')
  getHello(): string {
    return 'redirect PORT/info';
  }
}
