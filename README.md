# Car Rental Application

## Description

The Car Rental Application is a web-based platform designed to simplify the
process of searching for and renting cars. It provides users with the ability to
browse, filter, add to favorites, and obtain detailed information about
available cars.

## Purpose

This application is intended for people looking to rent a car for a short term,
such as a vacation, business trip, or similar needs. It offers a convenient
platform for selecting a car, viewing its specifications, and renting it without
hassle.

## Usage

1. **Browse Car Catalog**: Navigate to the catalog page to view available cars.
   You can use filters to find a car by brand or price range. To get detailed
   information, click on a car's card.

2. **Add to Favorites**: After viewing car details, you can add it to your
   favorites list by clicking the "Add to Favorites" button on the car details
   page.

3. **View Favorites**: On the Favorites page, you can view all the cars you've
   added to your favorites. You can also remove cars from your favorites list.

4. **Mileage Filtering**: On the filtering page, you can select minimum and
   maximum mileage values and click the "Filter by Mileage" button to get a list
   of cars that match these parameters.

## Key Advantages

- User-friendly interface for car search and rental.
- Ability to add cars to the favorites list.
- Filtering cars by various parameters, including mileage.
- Viewing and removing favorite cars.
- Utilizes modern technologies in development.

## Technologies Used

- JavaScript
- React.js for the frontend
- Redux for state management
- Redux Toolkit for state management optimization
- Axios for making API requests
- HTML and CSS for creating the user interface

## Adding to Favorites

Adding a car to the Favorites list is done on the car details page. After
clicking the "Add to Favorites" button, the selected car is stored in the
application's state and can be viewed on the Favorites page.

## Sorting on the Catalog Page

Sorting cars on the catalog page is achieved by making requests to the backend
with sorting parameters (e.g., by brand or price) and displaying the results on
the page. The page also supports pagination for easy browsing of many cars.

## Sorting on the Favorites Page

Sorting on the Favorites page is done on the frontend. You can sort favorite
cars by brand, price, or other parameters using the corresponding filters.

## How to Deploy the Application

To deploy the application, follow these steps:

1. Clone the repository to your local computer.

2. Open a terminal and navigate to the project's root folder.

3. Use the `npm install` command to install all project dependencies.

4. Start the application with the `npm start` command.

5. The application will be available at `http://localhost:3000`.

## Live Page Link

[Live Page Link](https://moskaletsoleksandr.github.io/car-rent/) - Add the
actual link when it becomes available.

This is a description of the car rental application. For more detailed
information and a demonstration, visit the live page link.
