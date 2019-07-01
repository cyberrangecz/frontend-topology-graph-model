import { Node } from './node';
import {Connectable} from './connectable';

export class RouterNode extends Node implements Connectable {

  consoleUrl: string;
  cidr: string;

  constructor() {
    super();
  }
}
