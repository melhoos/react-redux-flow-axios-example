// @flow
import AnswerAlternativeModel from './answerAlternativeModel';
import QuestionTypeModel from './questionTypeModel';

export type QuestionModel = {
    Id: number,
    QuestionText: string,
    CreatedAt: DateTime,
    CreatedBy: string,
    questionType: QuestionTypeModel,
    Unit: obj,
    AnswerAlternatives: [AnswerAlternativeModel]
};