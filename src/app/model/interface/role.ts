export interface IRole {
  roleId: number;
  role: string;
}
export interface IDesignation {
  designationId: number;
  designation: string;
}
export interface APIResponseModel {
  massage: string;
  result: boolean;
  data: any;
}
