import { Node } from '../node/node';
import { LinkTypeEnum } from '../enums/link-type-enum';
import {NodePort} from '../node-port/node-port';
import {SimulationLinkDatum} from 'd3';

export class Link implements SimulationLinkDatum<Node> {

  id: number;
  source: Node;
  target: Node;
  portA: NodePort;
  portB: NodePort;
  type: LinkTypeEnum;


  constructor() {
  }
}
