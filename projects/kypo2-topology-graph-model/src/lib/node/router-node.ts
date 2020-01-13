import { Node } from './node';
import {Connectable} from './connectable';

/**
 * Node of type router
 */
export class RouterNode extends Node implements Connectable {

  /**
   * URL for remote access
   */
  consoleUrl: string;

  /**
   * Classless inter-domain routing
   */
  cidr: string;

  constructor() {
    super();
  }
}
