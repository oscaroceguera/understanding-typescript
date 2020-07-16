interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic2 = {
  name: 'civic',
  year: new Date(),
  broken: false,
  summary(): string {
    return `Name ${this.name}`;
  },
};

const printVehicle2 = (vehicle: Vehicle): void => {
  console.log('vehicle', vehicle.summary());
  // console.log(`Name: ${vehicle.name}`);
  // console.log(`Year: ${vehicle.year}`);
  // console.log(`Broken: ${vehicle.broken}`);
};

// const printVehicle2 = ({ name, year, broken, summary }: Vehicle): void => {
//   console.log('summary', summary);
//   // console.log(`Name: ${name}`);
//   // console.log(`Year: ${year}`);
//   // console.log(`Broken: ${broken}`);
// };

printVehicle2(oldCivic2);
