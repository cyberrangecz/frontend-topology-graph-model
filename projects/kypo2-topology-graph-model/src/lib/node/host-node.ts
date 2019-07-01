/**
 * Host node
 */
import { Node } from './node';
import {Connectable} from './connectable';

export class HostNode extends Node implements Connectable{

  consoleUrl: string;

  constructor() {
    super();
  }
}
