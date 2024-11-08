import { Module } from '@nestjs/common';
import { QuestionnaireService } from './questionnaire.service';
import { QuestionnaireController } from './questionnaire.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Questionnaire, QuestionnaireSchema } from '../../schemas/questionnaire.schhema';
import { HttpModule } from '@nestjs/axios';
import { AuthGuard } from 'src/auth/auth.guard';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: Questionnaire.name, schema: QuestionnaireSchema }]),
  ],
  controllers: [QuestionnaireController],
  providers: [QuestionnaireService, AuthGuard],
})
export class QuestionnaireModule {}
