import { Controller, Get, Post, Param, Body, UseGuards } from '@nestjs/common';
import { QuestionnaireService } from './questionnaire.service';
import { AuthGuard } from '../../auth/auth.guard';

@Controller('questionnaires')
export class QuestionnaireController {
  constructor(private readonly questionnaireService: QuestionnaireService) {}

  @UseGuards(AuthGuard)  // Proteger con AuthGuard
  @Get()
  async getAll() {
    return this.questionnaireService.getAll();
  }

  @UseGuards(AuthGuard)  // Proteger con AuthGuard
  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.questionnaireService.getById(id);
  }

  @UseGuards(AuthGuard)  // Proteger con AuthGuard
  @Post()
  async create(@Body() questionnaireDto: any) {
    return this.questionnaireService.create(questionnaireDto);
  }
}
