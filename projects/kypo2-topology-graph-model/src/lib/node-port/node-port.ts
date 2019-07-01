export class NodePort {
  name: string;
  nodeName: string;
  ip?: string;
  mac?: string;


  constructor() {
  }

  toString() {
    let result = 'Name: ' + this.name + '\n';
    if (this.ip !== null &&  this.ip !== '') {
      result += 'IP address: ' + this.ip + '\n';
    }
    if (this.mac !== null &&  this.mac !== '') {
      result += 'MAC address: ' + this.mac + '\n';
    }
    return result;
  }
}
