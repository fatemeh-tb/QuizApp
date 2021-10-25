import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Quiz } from '../model/quiz.model';
import * as data from '../../assets/HTML.json'

@Injectable({
  providedIn: 'root'
})
export class QuizService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  quizzes: Quiz[] = (data as any).default;

  getQuizzez() {
    return this.quizzes;
  }
}
