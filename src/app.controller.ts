import { Controller, Request, Post, UseGuards } from '@nestjs/common';


@Controller()
export class AppController {
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
}
