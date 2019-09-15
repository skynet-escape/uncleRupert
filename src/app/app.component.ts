import {Component, OnInit} from '@angular/core';
import {trigger, state, style, animate, transition, keyframes} from '@angular/animations';

import { Puzzle } from './puzzle';
import {MatStepper} from '@angular/material';

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
export class AppComponent implements OnInit {

  title = 'uncleRupert';
  // stepIndex = 0;

  puzzles = [
    new Puzzle(
      'Puzzle 1',
      'This is the clue for puzzle 1',
      'Who am I',
      'AAA',
      'Solution 1',
      'Reward 1'),
    new Puzzle(
      'Puzzle 2',
      'This is the clue for puzzle 2',
      'What am I',
      'BBB',
      'Solution 2',
      'Reward 2'),
    new Puzzle(
      'Puzzle 1',
      'This is the clue for puzzle 1',
      'What am I',
      'CCC',
      'Solution 3',
      'Reward 3'),
  ];

  public finalPuzzle = new Puzzle(
    'Final puzzle',
    'I am:',
    'What am I',
    'ZZZ',
    'Final Solution',
    '');

  iaAllSolved = false;

  public allPuzzlesSolved(stepper: MatStepper) {
    let result = true;
    this.puzzles.forEach(puzzle => {
      if (puzzle.solved === false) { result = false; }
    });
    if ((this.iaAllSolved === false) && (result === true)) {
      this.iaAllSolved = true;
      // this.puzzles.concat([this.finalPuzzle]);
      // this.stepIndex = -1;
      // stepper.selectedIndex = 99;
      // stepper.selected.stepControl.disabled = true;
    }
    return result;
  }

 /* private replacer(key, value) {
    if (key === 'inputFormControl') { return undefined; }
    if (key === 'privateProperty2') { return undefined; }
    return value;
  }

  public onChangeStepper() {
    localStorage.removeItem('puzzles');
    localStorage.setItem('puzzles', JSON.stringify(this.puzzles, this.replacer));
    console.log('set puzzles');
  }*/

  ngOnInit() {
    // this.puzzles = JSON.parse(localStorage.getItem('puzzles'));
  }

}


