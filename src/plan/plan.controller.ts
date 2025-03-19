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
    return this.planService.getTable();
  }

  @Get('goal')
  async renderGoal() {
    return await this.planService.getGoal();
  }
}
