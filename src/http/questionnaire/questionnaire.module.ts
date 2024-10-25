import { Module } from '@nestjs/common';
import { QuestionnaireService } from './questionnaire.service';
import { QuestionnaireController } from './questionnaire.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Questionnaire, QuestionnaireSchema } from '../../schemas/questionnaire.schhema';
import { HttpModule } from '@nestjs/axios';
import { AuthGuard } from 'src/auth/auth.guard';

@Module({
  imports: [
    HttpModule,  // Importamos HttpModule para que esté disponible en este módulo
    MongooseModule.forFeature([{ name: Questionnaire.name, schema: QuestionnaireSchema }]),
  ],
  controllers: [QuestionnaireController],
  providers: [QuestionnaireService, AuthGuard],  // Asegúrate de incluir tu AuthGuard en los providers
})
export class QuestionnaireModule {}