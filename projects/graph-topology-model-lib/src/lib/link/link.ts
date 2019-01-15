import { Node } from '../node/node';
import { LinkTypeEnum } from '../enums/link-type-enum';
import {NodePort} from '../node-port/node-port';
import {SimulationLinkDatum} from 'd3';

export class Link implements SimulationLinkDatum<Node> {

  id: number;
  node_a: Node;
  node_b: Node;
  port_a: NodePort;
  port_b: NodePort;
  type: LinkTypeEnum;


  constructor() {
  }
}
