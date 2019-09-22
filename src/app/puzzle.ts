import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return (control && control.invalid);
  }
}

export class Puzzle {
  private input: string;

  public editable = true;
  public complete = false;
  public shake = false;

  public solved = false;

  public matcher = new MyErrorStateMatcher();

  public hintShow = 0;

  // public guess = 'test';
  public inputFormControl = new FormControl('', [
  ]);

  public reset() {
    this.shake = false;
    this.inputFormControl.setErrors(null);
  }

  public checkValue() {
    this.shake = false;
    this.inputFormControl.setErrors(null);
    // console.log(this.inputFormControl.value);

    this.input = this.inputFormControl.value.toString().toLocaleUpperCase();
    if (this.input.includes(this.solution.toLocaleUpperCase())) {
      // console.log('success');
      this.solved = true;
      this.complete = true;
      // this.editable = false;

    } else {
      // console.log('failure');
      // console.log(this.shake);
      this.shake = true;
      this.inputFormControl.setErrors({incorrect: true});
      // setTimeout(function() {
      //   console.log(this.shake);
      //   this.shake = 'shakestart';
      // }, 1000);
    }


    //this.inputFormControl.setValue('');
    //this.complete = true;
    // this.editable = false;
  }
  public showHint() {
    this.hintShow++;
  }

  public getTitle() {
    if (this.solved) { return this.reward; }
    return this.title;
  }

  constructor(
    public title: string,
    public clue: string,
    public placeholder: string,
    public solution: string,
    public fullSolution: string,
    public reward: string,
    public hint1: string,
    public hint2: string,
  ) {
    this.inputFormControl.setErrors(null);
  }
}
