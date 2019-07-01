import { NodePhysicalRoleEnum } from '../enums/node-physical-role-enum';
import {INode} from './inode';
import {NodePort} from '../node-port/node-port';
/**
 * Abstract node used in graph-visual. Has attributes used for D3 simulation and SVG drawing (x,y, etc.)
 */
export abstract class Node implements INode {
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;

  physicalRole: NodePhysicalRoleEnum;
  name: string;
  nodePorts: NodePort[];

  protected constructor() {
  }

  public toString = (): string => {
    let result = 'Name: ' + this.name + '\n';
    result += 'Physical role: ' + this.physicalRole + '\n';
    let counter = 1;
    this.nodePorts.forEach(ports => {
      result += '\nPort ' + counter + '\n';
      result += ports;
      counter++;
    });
    return result;
  }
}
