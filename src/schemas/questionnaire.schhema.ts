import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuestionnaireDocument = Questionnaire & Document;

@Schema()
export class Questionnaire {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Array })
  sections?: QuestionnaireSection[];

  @Prop()
  createdAt?: string;

  @Prop()
  updateAt?: string;

  constructor(
    name: string,
    sections?: QuestionnaireSection[],
    createdAt?: string,
    updateAt?: string,
  ) {
    this.name = name;
    this.sections = sections;
    this.createdAt = createdAt;
    this.updateAt = updateAt;
  }
}

@Schema()
export class QuestionnaireSection {
  @Prop({ required: true })
  title: string;

  @Prop({ type: Array })
  questions?: QuestionnaireQuestion[];

  constructor(title: string, questions?: QuestionnaireQuestion[]) {
    this.title = title;
    this.questions = questions;
  }
}

@Schema()
export class QuestionnaireQuestion {
  @Prop()
  number?: number;

  @Prop({ required: true })
  title: string;

  @Prop()
  observations?: string;

  @Prop({ type: [String] })
  alternatives?: string[];

  constructor(
    title: string,
    number?: number,
    observations?: string,
    alternatives?: string[],
  ) {
    this.title = title;
    this.number = number;
    this.observations = observations;
    this.alternatives = alternatives;
  }
}

export const QuestionnaireSchema = SchemaFactory.createForClass(Questionnaire);
