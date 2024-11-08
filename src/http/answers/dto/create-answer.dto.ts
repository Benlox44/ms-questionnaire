export class CreateAnswerDto {
    questionId!: string;
    answer!: string;
    type!: 'development' | 'choice';
    questionnaireId!: string;
    userId!: string;
  }
  