import { Card } from './Card';

export class PropertyWildCard extends Card {
  color: string[];

  constructor(value: number, color: string[]) {
    super(value);
    this.color = color;
  }
}