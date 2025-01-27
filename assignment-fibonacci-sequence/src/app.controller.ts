import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // New endpoint for Fibonacci sequence
  @Get('fibonacci/:number')
  getFibonacci(@Param('number') number: string): number[] {
    const n = parseInt(number, 10);
    return this.appService.getFibonacci(n);
  }
}
