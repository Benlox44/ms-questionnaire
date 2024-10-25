import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Questionnaire, QuestionnaireDocument } from '../../schemas/questionnaire.schhema';

@Injectable()
export class QuestionnaireService {
  constructor(
    @InjectModel(Questionnaire.name)
    private readonly questionnaireModel: Model<QuestionnaireDocument>
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
}
