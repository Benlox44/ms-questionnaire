import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuestionnaireDocument = Questionnaire & Document;

@Schema()
export class MachineEmbedded {
  @Prop({ required: true })
  plate!: string;

  @Prop({ required: true, enum: ['Car', 'Truck', 'Motorcycle', 'Bus', 'Bicycle', 'Tractor', 'Excavator', 'Forklift', 'Drone'] })
  type!: 'Car' | 'Truck' | 'Motorcycle' | 'Bus' | 'Bicycle' | 'Tractor' | 'Excavator' | 'Forklift' | 'Drone';

  @Prop({ required: true })
  brand!: string;

  @Prop({ required: true })
  model!: string;
}

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

  @Prop({ required: true, default: 'incompleto' })
  status!: 'completado' | 'incompleto';

  @Prop({ type: MachineEmbedded, required: true }) // Atributo embebido con los datos de la máquina
  machine!: MachineEmbedded;
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
