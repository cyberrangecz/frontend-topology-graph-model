/**
 * Node of type host (desktop, server, mobile etc)
 */
import { Node } from './node';
import {Connectable} from './connectable';

export class HostNode extends Node implements Connectable {

  consoleUrl: string;

  constructor() {
    super();
  }
}
