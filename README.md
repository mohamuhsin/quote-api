# quote-api

# Express.js API Example

This is a simple Express.js API example that provides endpoints for random quotes and adding/querying quotes.

## Table of Contents

- [Getting Started](#getting-started)
- [Endpoints](#endpoints)
  - [/api/quotes/random](#apiquotesrandom)
  - [/api/quotes](#apiquotes)
  - [/api/quotes (POST)](#apiquotes-post)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

1. Clone this repository: `git clone https://github.com/yourusername/express-api-example.git`
2. Navigate to the project directory: `cd express-api-example`
3. Install dependencies: `npm install`
4. Start the server: `npm start`
5. Access the API at `http://localhost:4001` or the specified port.

## Endpoints

### `/api/quotes/random`

- Returns a random quote from the dataset.

**HTTP Method**: GET

**Example Request**:

```shell
curl http://localhost:4001/api/quotes/random

Example Response:

json

{
  "quote": {
    "text": "This is a random quote",
    "person": "Random Author"
  }
}
