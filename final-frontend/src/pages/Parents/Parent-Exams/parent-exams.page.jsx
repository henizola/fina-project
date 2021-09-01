import {
  default as React,
  useState,
} from 'react';
import ParentSubNav from '../../../components/parent-sub-nav/parent-sub-nav.component';
import StudentSubNav from '../../../components/student-sub-nav/student-sub-nav.component';
import { Container } from './parent-exams.style';

const ParentExams = () => {
  return (
    <Container>
      <ParentSubNav />
      <h1>Upcoming Exams</h1>
      <div className="cards">
        <div className="card">
          <span>Subject :</span>
          <span>Physics</span>
          <span>Description :</span>
          <span>
            Chapter 1 : 5 questions , chapter 2 :
            3 Questions and chapter 3 :2 quetions
            , total points 10%
          </span>
          <span>Date : </span>
          <span>12/05/2021</span>
        </div>
        <div className="card">
          <span>Subject :</span>
          <span>Physics</span>
          <span>Description :</span>
          <span>
            Chapter 1 : 5 questions , chapter 2 :
            3 Questions and chapter 3 :2 quetions
            , total points 10%
          </span>
          <span>Date : </span>
          <span>12/05/2021</span>
        </div>{' '}
        <div className="card">
          <span>Subject :</span>
          <span>Physics</span>
          <span>Description :</span>
          <span>
            Chapter 1 : 5 questions , chapter 2 :
            3 Questions and chapter 3 :2 quetions
            , total points 10%
          </span>
          <span>Date : </span>
          <span>12/05/2021</span>
        </div>{' '}
        <div className="card">
          <span>Subject :</span>
          <span>Physics</span>
          <span>Description :</span>
          <span>
            Chapter 1 : 5 questions , chapter 2 :
            3 Questions and chapter 3 :2 quetions
            , total points 10%
          </span>
          <span>Date : </span>
          <span>12/05/2021</span>
        </div>
      </div>
    </Container>
  );
};

export default ParentExams;
