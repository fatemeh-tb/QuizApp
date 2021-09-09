import { Injectable } from '@angular/core';
import { Quiz } from '../model/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quizzes: Quiz[] = [
    {
      question: "HTML stands for what?",
      answer: [
        { option: 'Hypertrophic Management Language', correct: false },
        { option: 'Hyperberic Tertiary Logrithm', correct: false },
        { option: 'Hypertext Markup Language', correct: true },
        { option: 'Hyperresonant Marginal Logrithm', correct: false },
      ]
    },
    {
      question: "Every HTML document should have what?",
      answer: [
        { option: 'A head section, and within it a title, followed by a body', correct: false },
        { option: 'A title section, and within it a header, followed by a body', correct: false },
        { option: 'A body and header', correct: true },
        { option: 'None of these', correct: false },
      ]
    },
    {
      question: "What is the tag beginning the section of the Web page that is visible to the viewer/user?",
      answer: [
        { option: '<Title>', correct: false },
        { option: '</Title>', correct: false },
        { option: '<Body>', correct: true },
        { option: '</Body>', correct: false },
      ]
    },
    {
      question: "Which tag would insert a graphic into a Web page?",
      answer: [
        { option: 'Img src=Glass.jpeg', correct: true },
        { option: 'P....Glass.jpeg..../p', correct: false },
        { option: 'Img file=Glass.jpeg', correct: false },
        { option: 'Picture=Glass.jpeg', correct: false },
      ]
    },
    {
      question: "Use this tag to emphasize text.",
      answer: [
        { option: 'A', correct: false },
        { option: 'M', correct: false },
        { option: 'Em', correct: true },
        { option: 'Tb', correct: false },
      ]
    },
    {
      question: "What is the tag that begins a list of items?",
      answer: [
        { option: 'll', correct: false },
        { option: 'ls', correct: false },
        { option: 'ol or ul', correct: true },
        { option: 'ul or ls', correct: false },
      ]
    },
    {
      question: "Which format is best for high quality Web photos?",
      answer: [
        { option: 'TIF', correct: false },
        { option: 'GIF', correct: false },
        { option: 'JPEG', correct: true },
        { option: 'QRL', correct: false },
      ]
    },
    {
      question: "Which formats are examples of lossless files?",
      answer: [
        { option: 'JPEG & GIF', correct: false },
        { option: 'GIF & TIF', correct: false },
        { option: 'RGB & CMYK', correct: false },
        { option: 'PNG & BMP', correct: true },
      ]
    },
  ]

  constructor() { }

  getQuizzez() {
    return this.quizzes;
  }

}
