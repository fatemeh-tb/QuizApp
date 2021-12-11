import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Answer } from '../model/answer.model';
import { Quiz } from '../model/quiz.model';
import { QuizService } from '../service/quiz.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ResultComponent implements OnInit {
  quizzes: Quiz[] = [];


  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizzes = this.quizService.getQuizzez();
  }

  isCorrect(question: Quiz) {
    return question.answer.every(x => x.selected === x.correct) ? 'correct' : 'wrong';
  }

}
