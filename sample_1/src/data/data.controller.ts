import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('data')
export class DataController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getData(): Promise<any> {
    return await this.appService.getData();
  }
}
