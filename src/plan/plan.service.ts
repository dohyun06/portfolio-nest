import { Injectable } from '@nestjs/common';
import { spawn } from 'child_process';
import { PrismaService } from 'src/prisma/prisma.service';
import iconv from 'iconv-lite';
import { buffer } from 'stream/consumers';

@Injectable()
export class PlanService {
  constructor(private readonly prisma: PrismaService) {}

  getTable() {
    const python = spawn('py', [
      'C:\\Users\\Dohyun\\Desktop\\Develop\\Web\\portfolio-nest\\src\\plan\\crawling.py',
    ]);
    // const python = spawn('py', [join(__dirname, ./crawling.py)]);
    python.stdout.on('data', (data: Buffer) => {
      console.log(data.toString('utf8'));
      console.log(data.toString('utf-8'));
      console.log(iconv.decode(data, 'euc-kr'));
    });
    python.stderr.on('data', (data: Buffer) => {
      console.error(data.toString('utf-8'));
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
