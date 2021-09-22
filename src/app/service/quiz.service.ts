import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quiz } from '../model/quiz.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  quizzes: Quiz[] = [
    {
      id: 1010,
      question: "HTML stands for what?",
      questionTypeId: 1,
      answer: [
        { id: 1055, questionId: 1010, option: 'Hypertrophic Management Language', selected: false, correct: false },
        { id: 1056, questionId: 1010, option: 'Hyperberic Tertiary Logrithm', selected: false, correct: false },
        { id: 1057, questionId: 1010, option: 'Hypertext Markup Language', selected: false, correct: true },
        { id: 1058, questionId: 1010, option: 'Hyperresonant Marginal Logrithm', selected: false, correct: false },
      ]
    },
    {
      id: 1011,
      question: "Every HTML document should have what?",
      questionTypeId: 1,
      answer: [
        { id: 1055, questionId: 1011, option: 'A head section, and within it a title, followed by a body', selected: false, correct: false },
        { id: 1056, questionId: 1011, option: 'A title section, and within it a header, followed by a body', selected: false, correct: false },
        { id: 1057, questionId: 1011, option: 'A body and header', selected: false, correct: true },
        { id: 1058, questionId: 1011, option: 'None of these', selected: false, correct: false },
      ]
    },
    {
      id: 1012,
      question: "What is the tag beginning the section of the Web page that is visible to the viewer/user?",
      questionTypeId: 1,
      answer: [
        { id: 1055, questionId: 1012, option: '<Title>', selected: false, correct: false },
        { id: 1056, questionId: 1012, option: '</Title>', selected: false, correct: false },
        { id: 1057, questionId: 1012, option: '<Body>', selected: false, correct: true },
        { id: 1058, questionId: 1012, option: '</Body>', selected: false, correct: false },
      ]
    },
    {
      id: 1013,
      question: "Which tag would insert a graphic into a Web page?",
      questionTypeId: 1,
      answer: [
        { id: 1055, questionId: 1013, option: 'Img src=Glass.jpeg', selected: false, correct: true },
        { id: 1056, questionId: 1013, option: 'P....Glass.jpeg..../p', selected: false, correct: false },
        { id: 1057, questionId: 1013, option: 'Img file=Glass.jpeg', selected: false, correct: false },
        { id: 1058, questionId: 1013, option: 'Picture=Glass.jpeg', selected: false, correct: false },
      ]
    },
    {
      id: 1014,
      question: "Use this tag to emphasize text.",
      questionTypeId: 1,
      answer: [
        { id: 1055, questionId: 1014, option: 'A', selected: false, correct: false },
        { id: 1056, questionId: 1014, option: 'M', selected: false, correct: false },
        { id: 1057, questionId: 1014, option: 'Em', selected: false, correct: true },
        { id: 1058, questionId: 1014, option: 'Tb', selected: false, correct: false },
      ]
    },
    {
      id: 1015,
      question: "What is the tag that begins a list of items?",
      questionTypeId: 1,
      answer: [
        { id: 1055, questionId: 1015, option: 'll', selected: false, correct: false },
        { id: 1056, questionId: 1015, option: 'ls', selected: false, correct: false },
        { id: 1057, questionId: 1015, option: 'ol or ul', selected: false, correct: true },
        { id: 1058, questionId: 1015, option: 'ul or ls', selected: false, correct: false },
      ]
    },
    {
      id: 1016,
      question: "Which format is best for high quality Web photos?",
      questionTypeId: 1,
      answer: [
        { id: 1055, questionId: 1016, option: 'TIF', selected: false, correct: false },
        { id: 1056, questionId: 1016, option: 'GIF', selected: false, correct: false },
        { id: 1057, questionId: 1016, option: 'JPEG', selected: false, correct: true },
        { id: 1058, questionId: 1016, option: 'QRL', selected: false, correct: false },
      ]
    },
    {
      id: 1017,
      question: "Which formats are examples of lossless files?",
      questionTypeId: 1,
      answer: [
        { id: 1055, questionId: 1017, option: 'JPEG & GIF', selected: false, correct: false },
        { id: 1056, questionId: 1017, option: 'GIF & TIF', selected: false, correct: false },
        { id: 1057, questionId: 1017, option: 'RGB & CMYK', selected: false, correct: false },
        { id: 1058, questionId: 1017, option: 'PNG & BMP', selected: false, correct: true },
      ]
    },
  ]

  getQuizzez() {
    return this.quizzes;
  }
}
