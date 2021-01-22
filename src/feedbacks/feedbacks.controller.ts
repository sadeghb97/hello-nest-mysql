import { Controller, Get } from '@nestjs/common';
import { Feedback } from './feedback.entity';
import { FeedbacksService } from './feedbacks.service';

@Controller('feedbacks')
export class FeedbacksController {
  constructor(private readonly appService: FeedbacksService) {}

  @Get()
  async getHello(): Promise<Feedback[]> {
    return this.appService.findAll();
  }
}
