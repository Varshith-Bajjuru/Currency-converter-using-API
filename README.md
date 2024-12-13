# Currency Converter App

A **React** application that allows users to convert currencies using the latest exchange rates fetched from an API. The app features a responsive design and enables currency conversion with a simple interface.

## Features

- Fetches real-time currency exchange rates using the [Currency API](https://github.com/fawazahmed0/currency-api).
- User-friendly interface for selecting currencies and inputting amounts.
- Swap functionality to quickly switch between "From" and "To" currencies.
- Responsive design for a seamless experience across devices.

## Technologies Used

- React (Hooks, Functional Components)
- Tailwind CSS for styling
- JavaScript (ES6+)
- REST API integration

## Installation

Follow these steps to set up and run the project locally:

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/currency-converter-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd currency-converter-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

4. Start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure

```
.
├── src
│   ├── components
│   │   └── InputBox.js         # InputBox component for currency inputs
│   ├── hooks
│   │   └── useCurrencyInfo.js # Custom hook for fetching currency data
│   ├── App.js                 # Main application component
│   ├── index.js               # Application entry point
│   └── styles.css             # Additional global styles
├── public
│   └── index.html             # HTML template
└── README.md                  # Documentation
```

## Screenshots

### Home Screen
![Home Screen](./screenshots/image.png)



## API Reference

The application uses the **Currency API** to fetch exchange rates. Below is the structure of an API response:

Endpoint:
```
GET https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{currency}.json
```

Response Example:
```json
{
  "usd": {
    "eur": 0.89,
    "inr": 74.93,
    "gbp": 0.75
  }
}
```

## Contributing

Feel free to fork this repository and make your contributions. Please open a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
