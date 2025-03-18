import { Injectable } from '@nestjs/common';
import { spawn } from 'child_process';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PlanService {
  constructor(private readonly prisma: PrismaService) {}

  getTable() {
    const python = spawn('py', [
      'C:\\Users\\Dohyun\\Desktop\\Develop\\Web\\portfolio-nest\\src\\plan\\crawling.py',
    ]);
    // const python = spawn('py', [join(__dirname, ./crawling.py)]);
    console.log('test');
    python.stdout.on('data', (data: Buffer) => {
      console.log(data.toString());
    });
    python.stderr.on('data', (data: Buffer) => {
      console.error(data.toString());
    });
  }

  async getGoal() {
    return await this.prisma.plan.findMany({
      select: {
        goal: true,
      },
    });
  }
}
