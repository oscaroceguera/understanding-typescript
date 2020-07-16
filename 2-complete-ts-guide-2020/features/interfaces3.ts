interface Reportable {
  summary(): string;
}

const oldCivic3 = {
  name: 'civic',
  year: new Date(),
  broken: false,
  summary(): string {
    return `Name ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic3);
printSummary(drink);
