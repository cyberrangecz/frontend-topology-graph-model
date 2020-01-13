import {NodePhysicalRoleEnum} from '../enums/node-physical-role-enum';
import {NodePort} from '../node-port/node-port';
import {SimulationNodeDatum} from 'd3';

/**
 * Node interface extends D3 Node interface and implents coordinate attributes for the purposes of force graph simulation (visualization)
 */
export interface INode extends SimulationNodeDatum {
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;

  physicalRole: NodePhysicalRoleEnum;

  /**
   * Unique name of the node
   */
  name: string;

  /**
   * All ports associated with the node
   */
  nodePorts: NodePort[];
}
