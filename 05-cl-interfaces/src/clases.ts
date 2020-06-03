abstract class Department {
  static fiscalYear = 2020;
  // private readonly id: string;
  // private name: string;
  protected employess: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  static createEmployee(name: string) {
    return {
      name: name,
    };
  }

  abstract describe(this: Department): void;

  addEmmployee(employee: string) {
    // this.id = 3;
    this.employess.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employess.length);
    console.log(this.employess);
  }
}

class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT Department - ID: ", this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }

    throw new Error("not report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("please pass in a valid value!");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }

    this.instance = new AccountingDepartment("d2", []);

    return this.instance;
  }

  describe() {
    console.log("Accointung Department - ID: ", this.id);
  }

  addEmmployee(name: string) {
    if (name === "MAX") {
      return;
    }

    this.employess.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee("CARsh");
console.log("employee1", employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ["MAX"]);

it.describe();
it.addEmmployee("oscar");
it.addEmmployee("carlos");
it.printEmployeeInfo();

console.log(it);

// const accounting = new AccountingDepartment('d2', [])

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);

accounting.mostRecentReport = "Camaleon";
accounting.addReport("Something went wront...");
console.log(accounting.mostRecentReport);

accounting.addEmmployee("MAX");
accounting.addEmmployee("OSCARINO");

accounting.printReports();
accounting.describe();
accounting.printEmployeeInfo();
