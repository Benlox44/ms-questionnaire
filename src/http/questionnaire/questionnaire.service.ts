import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Questionnaire, QuestionnaireDocument } from '../../schemas/questionnaire.schhema';
import { Answer } from '../../schemas/answers.schema';  // Importamos el modelo `Answer`

@Injectable()
export class QuestionnaireService {
  constructor(
    @InjectModel(Questionnaire.name)
    private readonly questionnaireModel: Model<QuestionnaireDocument>,
    @InjectModel(Answer.name)
    private readonly answerModel: Model<Answer>  // Inyectamos el modelo `Answer`
  ) {}

  async getAll(): Promise<Questionnaire[]> {
    return this.questionnaireModel.find().exec();
  }

  async getById(id: string): Promise<Questionnaire> {
    const questionnaire = await this.questionnaireModel.findById(id).exec();
    if (!questionnaire) {
      throw new NotFoundException('Questionnaire not found');
    }
    return questionnaire;
  }

  async create(questionnaireDto: any): Promise<Questionnaire> {
    const newQuestionnaire = new this.questionnaireModel(questionnaireDto);
    return newQuestionnaire.save();
  }
  
  
  async findAllCompleted(): Promise<Questionnaire[]> {
    return this.questionnaireModel.find({ status: 'completado' }).exec();
  }

}
