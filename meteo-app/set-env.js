const fs = require('fs');

const apiKey = process.env.OPEN_WEATHER_API_KEY || '';

const envFileContent = `
export const environment = {
  production: true,
  openWeatherApiKey: '${apiKey}'
};
`;

fs.writeFileSync('./src/app/environments/environment.prod.ts', envFileContent);

console.log('✅ environment.prod.ts file generated with the API key.');
