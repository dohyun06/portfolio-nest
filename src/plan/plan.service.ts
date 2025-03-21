import { Injectable } from '@nestjs/common';
import { spawn } from 'child_process';
import { PrismaService } from 'src/prisma/prisma.service';
import * as iconv from 'iconv-lite';

@Injectable()
export class PlanService {
  constructor(private readonly prisma: PrismaService) {}

  getTable() {
    return new Promise((resolve, reject) => {
      const python = spawn('py', [
        'C:\\Users\\Dohyun\\Desktop\\Develop\\Web\\portfolio-nest\\src\\plan\\crawling.py',
      ]);
      let subjects: string[] = [];
      // const python = spawn('py', [join(__dirname, ./crawling.py)]);
      python.stdout.on('data', (data: Buffer) => {
        subjects = iconv
          .decode(data, 'euc-kr')
          .replace(/\[|\]/g, '')
          .split(',');
        console.log(subjects);
      });
      python.stderr.on('data', (data: Buffer) => {
        console.error(data.toString('utf-8'));
      });

      python.on('close', (code) => {
        if (code === 0) {
          resolve(subjects);
        } else {
          reject(new Error(`Python script exited with code ${code}`));
        }
      });
    });
  }

  async getGoal() {
    return await this.prisma.plan.findMany({
      select: {
        goal: true,
      },
    });
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
