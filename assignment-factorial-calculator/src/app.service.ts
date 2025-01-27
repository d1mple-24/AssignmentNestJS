import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  calculateFactorial(number: number): number {
    if (number < 0) {
      throw new Error('Number must be non-negative');
    }
    return number === 0 ? 1 : number * this.calculateFactorial(number - 1);
  }
}
