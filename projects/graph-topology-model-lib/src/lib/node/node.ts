import { NodePhysicalRoleEnum } from '../enums/node-physical-role-enum';
import {INode} from './inode';
import {NodeInterface} from '../node-interface/node-interface';
import {forEach} from 'typescript-collections/dist/lib/arrays';
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
  nodeInterfaces: NodeInterface[];

  protected constructor() {
  }

  public toString = (): string => {
    let result = 'Name: ' + this.name + '\n';
    result += 'Physical role: ' + this.physicalRole + '\n';
    let counter = 1;
    this.nodeInterfaces.forEach(iface => {
      result += '\nInterface ' + counter + '\n';
      result += iface;
      counter++;
    });
    return result;
  }
}
