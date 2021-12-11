import { Component, OnInit } from '@angular/core';
import { Answer } from '../model/answer.model';
import { Quiz } from '../model/quiz.model';
import { QuizService } from '../service/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizzes: Quiz[] = [];
  quiz: Quiz = new Quiz();

  result = false;

  currentQuiz = 0;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.quizzes = this.quizService.getQuizzez();
  }


  onAnswer(quiz: Quiz, answer: Answer) {
    quiz.answer.forEach((x) => { if (x.id == answer.id) { x.selected = true } else { x.selected = false } });
    setTimeout(() => {
      if (this.currentQuiz < 7) {
        this.next();
      }
    }, 1000);
  }

  prev() {
    this.currentQuiz--;
  }

  next() {
    this.currentQuiz++;
  }

  isAnswered(question: Quiz) {
    return question.answer.find(x => x.selected) ? 'Answered' : 'Not Answered';
  };



  goToQuestion(index: number) {
    this.currentQuiz = index;
  }


  showResult() {
    let answers = [];
    this.quiz.answer.forEach(x => answers.push({ 'quizId': this.quiz.id, 'questionId': x.id, 'selected': x.selected }));
    this.result = true;
  }

}
