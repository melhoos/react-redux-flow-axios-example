// @flow
import AnswerAlternativeModel from './answerAlternativeModel';
import QuestionTypeModel from './questionTypeModel';

export type QuestionModel = {
    id: int,
    questionText: string,
    createdAt: obj,
    createdBy: obj,
    questionType: QuestionTypeModel,
    unit: [obj],
    answerAlternatives: [AnswerAlternativeModel]
};