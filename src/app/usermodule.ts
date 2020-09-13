export class Usermodule {
  public Id: number;
  public name: string;
  public mobile:string;
  public email:string;
  public pwd:string;
  constructor(Id:number,name: string,mobile:string,email:string,pwd:string) {
  this.Id = Id;
  this.name = name;
  this.mobile=mobile;
  this.email = email;
  this.pwd = pwd;
  }
  }