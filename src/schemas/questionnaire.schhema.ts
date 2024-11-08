import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuestionnaireDocument = Questionnaire & Document;

@Schema()
export class Questionnaire {
  @Prop({ required: true })
  name!: string;

  @Prop({ type: Array })
  sections?: QuestionnaireSection[];

  @Prop()
  createdAt?: string;

  @Prop()
  updateAt?: string;
}

@Schema()
export class QuestionnaireSection {
  @Prop({ required: true })
  title!: string;

  @Prop({ type: Array })
  questions?: QuestionnaireQuestion[];
}

@Schema()
export class QuestionnaireQuestion {
  @Prop()
  number?: number;

  @Prop({ required: true })
  title!: string;

  @Prop()
  observations?: string;

  @Prop({ type: [String] })
  alternatives?: string[];

  @Prop({ required: true })
  type!: 'development' | 'choice';
}

export const QuestionnaireSchema = SchemaFactory.createForClass(Questionnaire);
