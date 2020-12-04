import { Card } from './Card';

export class RentCard extends Card {
  colors: string[];

  constructor(value: number, colors: string[]) {
    super(value);
    this.colors = colors;
  }
}