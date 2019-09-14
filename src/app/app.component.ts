import {Component, OnInit} from '@angular/core';
import {trigger, state, style, animate, transition, keyframes} from '@angular/animations';

import { Puzzle } from './puzzle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('unused', [
      state('true', style({
        opacity: 1
      })),
      state('false',   style({
        opacity: 0
      })),
      transition('true => false', animate('600ms ease-out')),
      transition('false => true', animate('1000ms ease-in'))
    ]),
    trigger('shake', [
      state('false', style({
        transform: 'scale(1)',
      })),
      state('true', style({
        transform: 'scale(1)',
      })),
      transition('false => true', animate('1000ms ease-in', keyframes([
        style({transform: 'translate3d(-1px, 0, 0)', offset: 0.1}),
        style({transform: 'translate3d(2px, 0, 0)', offset: 0.2}),
        style({transform: 'translate3d(-4px, 0, 0)', offset: 0.3}),
        style({transform: 'translate3d(4px, 0, 0)', offset: 0.4}),
        style({transform: 'translate3d(-4px, 0, 0)', offset: 0.5}),
        style({transform: 'translate3d(4px, 0, 0)', offset: 0.6}),
        style({transform: 'translate3d(-4px, 0, 0)', offset: 0.7}),
        style({transform: 'translate3d(2px, 0, 0)', offset: 0.8}),
        style({transform: 'translate3d(-1px, 0, 0)', offset: 0.9}),
      ]))),
    ]),
  ]
})
export class AppComponent {

  title = 'uncleRupert';

  puzzles = [
    new Puzzle(
      'Puzzle 1',
      'This is the clue for puzzle 1',
      'Who am i',
      'AAA'),
    new Puzzle(
      'Puzzle 2',
      'This is the clue for puzzle 2',
      'What am i',
      'BBB'),
    new Puzzle(
      'Puzzle 1',
      'This is the clue for puzzle 1',
      'What am i',
      'CCC'),
  ];

}


