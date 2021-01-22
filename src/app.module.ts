import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { FeedbacksModule } from './feedbacks/feedbacks.module';
import { Feedback } from './feedbacks/feedback.entity'

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    //port: 3306,
    username: 'root',
    password: '',
    database: 'sbpro-test',
    entities: [Feedback],
    synchronize: true,
  }), FeedbacksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
