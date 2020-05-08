const getWeather = require("./getWeather");

if (process.argv[2]) {
  const location =
    (process.argv[2] &&
      process.argv[3] &&
      `${process.argv[2]} ${process.argv[3]}`) ||
    process.argv[2];

  getWeather(location, (error, data) => {
    if (error) {
      console.log("unable to process your request");
    } else {
      console.log(
        `It is currently ${data.main.temp} degrees celcius in ${data.name}`
      );
      console.log(`Description - ${data.weather[0].description}`);
    }
  });
} else {
  console.log("Please provide a location");
}
