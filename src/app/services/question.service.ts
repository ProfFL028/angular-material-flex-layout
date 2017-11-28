import { Injectable } from '@angular/core';
import {QuestionBase} from '../shared/question-base';
import {DropDownQuestion} from '../shared/question-dropdown';
import {TextboxQuestion} from '../shared/question-textbox';

@Injectable()
export class QuestionService {

  constructor() { }
  getQuestions() {

    const questions: QuestionBase<any>[] = [

      new DropDownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
