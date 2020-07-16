const add = (a: number, b: number): number => {
  return a + b;
};

const substract = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (msg: string): void => {
  console.log(msg);
};

const throwErr = (message: string): never => {
  throw new Error(message);
};

const forecast = {
  date: new Date(),
  weather: 'suny',
};

const logWeeather = (forecast: { date: Date; weather: string }): void => {
  console.log('forecast', forecast.date);
  console.log('forecast', forecast.weather);
};

const logWeatherES2015 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeeather(forecast);
logWeatherES2015(forecast);
