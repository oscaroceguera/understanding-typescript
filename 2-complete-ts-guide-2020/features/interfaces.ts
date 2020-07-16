const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Year: ${vehicle.year}`);
//   console.log(`Broken: ${vehicle.broken}`);
// };

const printVehicle = ({
  name,
  year,
  broken,
}: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${name}`);
  console.log(`Year: ${year}`);
  console.log(`Broken: ${broken}`);
};

printVehicle(oldCivic);
