import { Component, OnInit } from '@angular/core';
import { Quiz } from '../model/quiz.model';
import { QuizService } from '../service/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quizzes: Quiz[] = [];

  currentQuiz = 0;
  answerSelected = false;
  result = false;

  correctAnswer = 0;
  inCorrectAnswer = 0;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizzes = this.quizService.getQuizzez();
  }


  onAnswer(option: boolean, choice: any) {
    setTimeout(() => {
      this.currentQuiz++;
    }, 1000);

    if (option) {
      this.correctAnswer++;
    } else {
      this.inCorrectAnswer++;
    }
  }

  prev() {
    this.currentQuiz--;
  }

  next() {
    this.currentQuiz++;

  }

  showResult() {
    this.result = true;
  }

}
