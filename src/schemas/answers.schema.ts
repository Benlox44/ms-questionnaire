import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Answer extends Document {
  @Prop({ required: true })
  questionId!: string;

  @Prop({ required: true })
  answer!: string;

  @Prop({ required: true })
  type!: 'development' | 'choice';

  @Prop({ required: true })
  questionnaireId!: string;

  @Prop({ required: true })
  userId!: string;
}

export const AnswerSchema = SchemaFactory.createForClass(Answer);
