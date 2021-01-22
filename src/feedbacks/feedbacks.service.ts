import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feedback } from './feedback.entity';

@Injectable()
export class FeedbacksService {
  constructor(
    @InjectRepository(Feedback)
    private feedbacksRepository: Repository<Feedback>,
  ) {}

  async findAll(): Promise<Feedback[]> {
    console.log(await this.feedbacksRepository.count())
    console.log(await this.feedbacksRepository.find())
    return await this.feedbacksRepository.find();
  }

  async findOne(id: string): Promise<Feedback> {
    return await this.feedbacksRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.feedbacksRepository.delete(id);
  }
}
