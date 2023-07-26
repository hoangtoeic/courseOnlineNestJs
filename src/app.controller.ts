import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cat')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getHello(@Param('id') req: any): string {
    console.log('req', req);
    return this.appService.getHello();
  }

  @Post()
  Post(@Body() req: any): string {
    console.log('req2', req);
    return this.appService.getHello();
  }
}
