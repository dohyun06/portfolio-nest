import { Controller, Get, Render } from '@nestjs/common';
import { PlanService } from './plan.service';

@Controller('plan')
export class PlanController {
  constructor(private readonly planService: PlanService) {}

  @Get()
  @Render('plan')
  renderPlan() {}

  @Get('table')
  async sendTable() {
    const data = await this.planService.getTable();
    console.log(data);
    return data;
  }

  @Get('goal')
  async sendGoal() {
    return await this.planService.getGoal();
  }
}
