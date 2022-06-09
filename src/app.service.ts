import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello! Go to /login to login with your email and password and  Go to /news to create and post news article';
  }
}
