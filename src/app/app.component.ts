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

  // puzzles = [
  //   new Puzzle(
  //     'Puzzle 1',
  //     'This is the clue for puzzle 1',
  //     'Who am I',
  //     [['AAA', '1'], ['BBB', '2']],
  //     'Solution 1',
  //     'Reward 1',
  //     'This is your first hint',
  //     'This is your second hint'),
  //   new Puzzle(
  //     'Puzzle 2',
  //     'This is the clue for puzzle 2',
  //     'What am I',
  //     [['BBB']],
  //     'Solution 2',
  //     'Reward 2',
  //     'This is your first hint',
  //     'This is your second hint'),
  //   new Puzzle(
  //     'Puzzle 1',
  //     'This is the clue for puzzle 1',
  //     'What am I',
  //     [['CCC'], ['DDD', '4']],
  //     'Solution 3',
  //     'Reward 3',
  //     'This is your first hint',
  //     'This is your second hint'),
  // ];

  puzzles = [
    new Puzzle(
      "An Unexpected Journey",
      "Follow the road south from King’s Landing.  Go west at the fork, over the bridge and through the garden. When you hear the whispering sound you know you've gone far enough.",
      "?????",
      [['oldtown'], ['old town']],
      "Oldtown",
      "Boston",
      "Isn't King's Landing a city in Game of Thrones?",
      "Use the map in A Dance With Dragons, look for a city at the end of the road"),
    new Puzzle(
      "Pirate Treasure",
      "For half a century a pirate has guarded the treasure, but to unlock the secret, the key must first be retrieved from the giants.",
      "?????",
      [['fortytwo'], ['forty two'], ['forty-two']],
      "Forty-two",
      "Philadelphia",
      "The pirate wants a Margarita, the Giants won three rings, and the key is made of plastic",
      "Find the transparent \"key\" in A Band of Misfits, Overlay it on page 167 in A Pirate Looks at Fifty, read the word in the circled letters"),
    new Puzzle(
      "Math?",
      "1 down from 63 then 33 across from 125",
      "?????",
      [['decode this'], ['decodethis']],
      "Decode This",
      "Gulf stream",
      "1 down and 33 across sound like crossword puzzle clues",
      "Solve clue 1 down on Puzzle 33 and clue 33 across on puzzle 125 in the Large Print Crosswords book and get a 2 word phrase"),
    new Puzzle(
      "Riddle Time",
      "If a farmer raises wheat in dry weather, what does he raise in wet weather?",
      "?????",
      [['umbrella']],
      "An Umbrella",
      "Stove",
      "What do you raise when it rains?",
      "Check the index in the Biggest Riddle Book in the World, there are only so many jokes about farmers"),
    new Puzzle(
      "A Mystery",
      "I thought I had it all solved, that I had found the Undeniable clue. But that was just the beginning, I needed the field guide to decode the message. The dials were turning and I was lost. In the end I found out the key was me all along.",
      "?????",
      [['flapjack'], ['flap jack']],
      "Flapjack",
      "100",
      "Why is Undeniable capitalized? And could \"field guide\" be referring to this F.I.E.L.D. decoder wheel?",
      "Find the encoded message inside the cover of Undeniable, use the decoder wheel (Agents of F.I.E.L.D.), the key is literally \"ME\""),
    new Puzzle(
      "Trivia",
      "Who first coined the term computer bug?",
      "?????",
      [['hopper'], ['grace']],
      "Rear Admiral Grace M. Hopper",
      "18th century",
      "You've got a question, maybe one of the books has an answer",
      "Check the index in the Big Book of Answers, it'll help you find what you're looking for"),
    new Puzzle(
      "A Poem",
      "Niggling, naggling, naughty nemesis of Sarah Cynthia Sylvia Stout",
      "?????",
      [['garbage']],
      "She would not take the garbage out",
      "Postmaster",
      "That sounds like it might be from a children's poem",
      "It's from Where the Sidewalk Ends, Sarah Cynthia Sylvia Stout is mentioned in the index"),
    new Puzzle(
      "First Word",
      "First 3 words of John Watson",
      "?? ?? ??",
      [['in the year']],
      "In the year",
      "Ambassador",
      "It's not \"looking for lodgings\"",
      "Watson is the narrator of the Sherlock Holmes stories so all the words are his, check the beginning of A Study in Scarlet"),
    new Puzzle(
      "Sea Life",
      "What color was Inky the octopus originally?",
      "?????",
      [['tan']],
      "Tan",
      "Kite",
      "Inky is stuffed with beans",
      "Check the Beanie Baby Handbook, read the tips"),
    new Puzzle(
      "Cryptic",
      "UNDE RSTA NDIN GCOM ESFR OMKN OWLE DGEB REAK THEC ODEx",
      "?????",
      [['before']],
      "Before",
      "Silence Dogood",
      "If you don't already know how to break codes maybe there is a reference book in there that can help",
      "Translate the twisted path code on the inside cover of Break the Code using the instructions on Page 58, use the decrypted message to find the answer"),
    new Puzzle(
      "Food For Thought",
      "What can you say about chocolate covered manhole covers? In Space?",
      "?????",
      [['sandy']],
      "Don't get it sandy",
      "Poor Richard",
      "I don't think the question is literal, maybe one of the space books has a chapter about manhole covers",
      "Read the end of the short story in N-Space, it gives some literal advice about what to do with a chocolate manhole cover"),
  ];




    public finalPuzzle = new Puzzle(
    '',
    'Make the Connection:',
    '?????',
    [['Franklin']],
    'Benjamin Franklin',
    '',
    '',
    '');

  iaAllSolved = false;

  public allPuzzlesSolved() {
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

// ng build --prod --baseHref=/unclerupert/ --deployUrl=https://unknown.site/
// ng build --deployUrl=https://unknown.site/unclerupert/
