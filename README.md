# Bibliophile
Bibliophile 1.0
Bibliophile: Book Library Management System

Bibliophile web application designed to streamline the process of book registration and management within a library setting. This platform enables users to easily register books, categorize them by genre, and efficiently locate their physical positions within the library using __Chat GPT__.

Features

1. Book Registration:
no need to give all the details about the book , just put the book name and authors name and let chat gpt do all the other things for you.

2. User-Friendly Interface: The web application offers an intuitive and visually appealing user interface that ensures smooth navigation and interaction.

3. Search and Filter: Users can search for specific books by title, author, or genre, and filter the results based on various criteria. This feature uses the wagner fischer algorithm to calculate the levenstien distance between the searched word and words in the database. (update I have used fuse.js for the fuzzy search logic)

Admin Dashboard: An admin panel allows authorized personnel to manage the book catalog, add new genres, and oversee the system's functionality.(not complete)

Getting Started
Follow these steps to set up Bibliophile on your local machine:

1. Clone the repository
```bash
cd bibliophile
```
2. Install the required dependencies:
```sh
npm install
```
3. Configure the database connection:
Create a .env file based on the .env.example template.
Provide your database credentials in the .env file.
Set up the database:

4. Start the development server:
```sh
npm run dev
Access the application in your browser at http://localhost:3000.
```

 Happy reading! 📚

