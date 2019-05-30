/**
 * Switch node. Has different behaviour than host node. Has set of children (sub network).
 * Can have two types - cloud if sub network is hidden or switch if sub network is revealed.
 */

import { Node } from './node';
import { NodePhysicalRoleEnum } from '../enums/node-physical-role-enum';
import {INode} from './inode';

export class SwitchNode extends Node {

  cidr: string;
  children: INode[];

  constructor() {
    super();
  }

  /**
   * Changes switch physical role (Router -> Cloud or Cloud -> Router)
   * Router is role for revealed subnet
   * Cloud is role for hidden subnet
   */
  public changeSwitchPhysicalRole() {
    if (this.physicalRole === NodePhysicalRoleEnum.Switch) {
      this.physicalRole = NodePhysicalRoleEnum.Cloud;

    } else if (this.physicalRole === NodePhysicalRoleEnum.Cloud) {
      this.physicalRole = NodePhysicalRoleEnum.Switch;
    }
  }

  public hasChilden(): boolean {
    return this.children && this.children.length > 0;
  }
}
