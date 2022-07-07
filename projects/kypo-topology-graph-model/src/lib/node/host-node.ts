/**
 * Node of type host (desktop, server, mobile etc)
 */
import { Connectable } from './connectable';
import { Node } from './node';

export class HostNode extends Node implements Connectable {
  consoleUrl: string;
  osType: string;
  guiAccess: boolean;

  constructor() {
    super();
  }
}
