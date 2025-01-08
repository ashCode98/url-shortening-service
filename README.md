# URL Shortener

A simple URL shortening service built with Node.js, Express, and MongoDB.

## Features

- Shorten long URLs for easy sharing
- Redirect short URLs to original URLs
- User-friendly interface

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/url-shortening-service.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd url-shortening-service
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Create a `.env` file in the root directory and add the following:**
    ```
    MONGODB_URI=your_mongodb_atlas_connection_string
    BASE_URL=https://url-shortening-service-3bfx.onrender.com
    ```

5. **Start the server:**
    ```bash
    npm run dev
    ```

## Usage

- Open `http://localhost:3000` in your browser.
- Enter the URL you want to shorten and click "Shorten URL".
- The shortened URL will be displayed for sharing.

## Technologies Used

- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Frontend:** HTML, CSS, JavaScript
- **Deployment:** Render

## Project Details

https://roadmap.sh/projects/url-shortening-service