import { Card } from './Card';

export class PropertyCard extends Card {
  name: string;
  color: string;
  countFull: number;
  rents: number[];

  constructor(value: number, name: string, color: string, countFull: number, rents: number[]) {
    super(value);
    this.name = name;
    this.color = color;
    this.countFull = countFull;
    this.rents = rents;
  }
}