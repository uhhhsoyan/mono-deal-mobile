import { Card } from './Card';

export class ActionCard extends Card {
  action: string;

  constructor(value: number, action: string) {
    super(value);
    this.action = action;
  }
}