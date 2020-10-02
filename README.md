# Pixel 5 Checker

A little script which continuously checks whether the Pixel 5 is in stock in the German Google Store and opens the configurator page in the default browser when that is the case.

## Usage

Clone this repository, run `yarn` or `npm install` depending on the package manager you use and run the `start` script with `yarn start` or `npm start`. By default the script checks for availability of the Just Black version, if you want it to check for the Sorta Sage version you'll need to change `nth-child(1)` to `nth-child(2)` on line 8 of [`index.js`](./index.js) before running the `start` script.

After running the `start` script a headless version of Chromium is launched every 15 seconds to check for availability of the Pixel 5. When it is detected that it is in stock, the configurator page is opened in the default browser and the script exits. Make sure to restart the script if you aren't able to claim the available model in time.
