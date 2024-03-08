import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/hello') // si les parenthèses sont vides alors la route sera la racine du serveur '/'.
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
