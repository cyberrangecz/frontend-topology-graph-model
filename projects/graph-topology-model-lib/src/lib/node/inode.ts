import {NodePhysicalRoleEnum} from '../enums/node-physical-role-enum';
import {NodePort} from '../node-port/node-port';
import {SimulationNodeDatum} from 'd3';

export interface INode extends SimulationNodeDatum {
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;

  physicalRole: NodePhysicalRoleEnum;
  name: string;
  nodeInterfaces: NodePort[];
}
