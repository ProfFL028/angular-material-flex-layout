import {Component, Input, OnInit} from '@angular/core';
import {QuestionControlService} from '../services/question-control.service';
import {QuestionBase} from '../shared/question-base';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

  @Input()
  questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
