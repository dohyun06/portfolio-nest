import { Controller, Get, Render } from '@nestjs/common';
import { PlanService } from './plan.service';

@Controller('plan')
export class PlanController {
  constructor(private readonly planService: PlanService) {}

  @Get()
  @Render('plan')
  renderPlan() {}

  @Get('table')
  renderTable() {
    this.planService.getTable();
    return;
  }

  @Get('goal')
  async renderGoal() {
    return await this.planService.getGoal();
  }
}
