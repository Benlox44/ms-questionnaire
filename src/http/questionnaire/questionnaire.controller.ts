import { Controller, Get, Post, Param, Body, UseGuards } from '@nestjs/common';
import { QuestionnaireService } from './questionnaire.service';
import { AuthGuard } from '../../auth/auth.guard';
import { Questionnaire } from 'src/schemas/questionnaire.schhema';

@Controller('questionnaires')
export class QuestionnaireController {
  constructor(private readonly questionnaireService: QuestionnaireService) {}

  @UseGuards(AuthGuard)
  @Get()
  async getAll() {
    return this.questionnaireService.getAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.questionnaireService.getById(id);
  }

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() questionnaireDto: any) {
    return this.questionnaireService.create(questionnaireDto);
  }
  
  @Get('completed')
  async getAllCompleted(): Promise<Questionnaire[]> {
    return this.questionnaireService.findAllCompleted();
  }
  
}
