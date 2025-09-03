export const EnvironmentVariables = {
  production: true,
  weatherApilocationBaseURL: 'https://weather338.p.rapidapi.com/locations/search?',
  weatherapiForecasBasetURL: 'https://weather338.p.rapidapi.com/weather/forecast?',

  xRapidApiKeyName: 'X-RapidAPI-Key',
  xRapidApiKeyValue: process.env['WEATHER_API_KEY'] || '',

  xRapidApiHostName: 'X-RapidAPI-Host',
  xRapidApiHostValue: process.env['WEATHER_API_HOST'] || ''
};
