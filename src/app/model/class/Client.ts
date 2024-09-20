export class Client {
  clientId: number;
  contactPersonName: string;
  companyName: string;
  address: string;
  city: string;
  pincode: string;
  state: string;
  employeeStrength: number;
  gstNo: string;
  contactNo: string;
  regNo: string;

  constructor() {
    this.clientId = 0;
    this.contactPersonName = '';
    this.companyName = '';
    this.address = '';
    this.city = '';
    this.pincode = '';
    this.state = '';
    this.employeeStrength = 0;
    this.gstNo = '';
    this.contactNo = '';
    this.regNo = '';
  }
}

export class ClieintProject {
  clientProjectId: number;
  projectName: string;
  startDate: string;
  expectedEndDate: string;
  leadByEmpId: number;
  completedDate: string;
  contactPerson: string;
  contactPersonContactNo: string;
  totalEmpWorking: number;
  projectCost: number;
  projectDetails: string;
  contactPersonEmailId: string;
  clientId: number;

  // No-parameter constructor
  constructor() {
    this.clientProjectId = 0;
    this.projectName = '';
    this.startDate = new Date().toISOString();
    this.expectedEndDate = new Date().toISOString();
    this.leadByEmpId = 0;
    this.completedDate = new Date().toISOString();
    this.contactPerson = '';
    this.contactPersonContactNo = '';
    this.totalEmpWorking = 0;
    this.projectCost = 0;
    this.projectDetails = '';
    this.contactPersonEmailId = '';
    this.clientId = 0;
  }
}
