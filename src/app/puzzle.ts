export class Puzzle {
  public editable = true;
  public complete = false;
  constructor(
    public title: string,
    public clue: string,
    public solution: string,
  ) { }
}
