import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'; 
import { AnswersService } from './answers.service';
import { AnswerController } from './answers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Answer, AnswerSchema } from '../../schemas/answers.schema';  
import { AuthGuard } from 'src/auth/auth.guard';  // Importamos el AuthGuard

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Answer.name, schema: AnswerSchema }]),  // Conexión con la base de datos
    HttpModule,  // Importamos HttpModule para que AuthGuard pueda hacer solicitudes HTTP
  ],
  controllers: [AnswerController],
  providers: [AnswersService, AuthGuard],  // Registramos el servicio y el guard
  exports: [AnswersService],  // Exportamos el servicio si es necesario
})
export class AnswersModule {}
