#My Weather App

This is my personal weather app, built using React. It allows me to search for any city and get the current weather, including temperature, humidity, wind speed, and weather conditions. The app also updates the current time every second and displays it on the screen. If I forget to enter a city name, the app will show a helpful error message that disappears after a few seconds.

#Features

City Search: I can search for the weather of any city I want.
Weather Data: The app displays temperature, humidity, wind speed, and a weather icon based on current conditions.
Time Display: The time is displayed and updated every second, so I always know what time it is.
Error Handling: If I try to search without entering a city name, the app will show an error message that disappears after a few seconds.
Popup Error Message: The error message appears at the top of the page and fades away automatically after 3 seconds.
Technologies Used

#React:
 I used React to build the user interface and manage app state.
OpenWeather API: The weather data is fetched from OpenWeather API.
CSS: I styled the app using CSS to give it a clean and responsive design.
How to Use

#Clone the repo:
git clone:git@github.com:ReicaD/WeatherApp3.git
Install dependencies:
npm install
Add your OpenWeather API key to an .env file:
VITE_APP_ID= 4560f8d709dd11376987d31e6fe61327
#How to run
Run the app:
npm run dev
How It Works

I can type a city name into the search bar and click on the search icon.
The app fetches weather data and shows the temperature, humidity, wind speed, and a weather icon.
The current time is shown and updated every second.
If I try to search without entering a city, the app will show an error message for a few seconds.
Future Features

I might add more features like an hourly forecast or sunrise/sunset times.
I want to improve the design further with some animations and maybe add moving clouds or other background effects to make the UI more dynamic.
Regarding adding moving features like clouds in the background, yes, you can use CSS animations to create a simple effect. Here's an example of how you could add moving clouds:

 