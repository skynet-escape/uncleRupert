import {Component, OnInit} from '@angular/core';

import { Puzzle } from './puzzle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'uncleRupert';

  puzzles = [
    new Puzzle('Puzzle 1', 'This is the clue for puzzle 1', 'AAA'),
    new Puzzle('Puzzle 2', 'This is the clue for puzzle 2', 'BBB'),
    new Puzzle('Puzzle 3', 'This is the clue for puzzle 3', 'CCC'),
  ];

}


