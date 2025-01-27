import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('is-prime')
  isPrime(@Body('number') number: number): { number: number; isPrime: boolean } {
    const isPrime = this.appService.isPrime(number);
    return { number, isPrime };
  }
}
