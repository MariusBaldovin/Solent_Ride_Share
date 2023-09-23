# Solent Ride Share Single Page Application

![Project Banner](https://res.cloudinary.com/duaqx9tzs/image/upload/v1695427193/HOME_PAGE_4_mc8bz3.jpg)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)

## Introduction

The Solent Ride Share Single Page Application is a web application designed to improve the commuting experience of Solent University students. This application allows students to find and share rides, split transportation costs, and access a range of features that enhance their daily commute.

## Features

- **User Authentication:** Register using name, email, student number, and log in using email and pasword or social media accounts (Google or Facebook).
- **Find a Ride:** Browse and search for available rides based on preferred location, date, and time.
- **Offer Ride:** Offer a ride based on your location, date, time and seats available (minimum 1 and maximum 4).
- **Cost Sharing:** Share transportation costs automatically with other passengers based on the number of seats available in the ride.
- **Rewards Program:** Earn promotions and discounts for using the Solent Ride Sharing app regularly.
- **Referral Program:** Invite friends to join the app and earn rewards for successful referrals.
- **FAQ Section:** Quickly find answers to common questions and concerns in a comprehensive FAQ section.
- **Support Center:** Contact customer service for assistance with inquiries or issues by email, live chat or phone.

## Technologies

The Solent Ride Share Single Page Application was built using a variety of technologies and tools to create an efficient, user-friendly, and reliable experience. Here are the key technologies and tools used in this project:

- **React JS:** The application's frontend was developed using React, a popular JavaScript library for building user interfaces. React allows for the creation of dynamic and interactive web applications.

- **CSS:** Cascading Style Sheets (CSS) were used for styling and layout design, ensuring an appealing and responsive user interface.

- **Firebase:** Firebase was utilized for backend services, including authentication, real-time database, and hosting. Firebase offers a seamless way to manage user data and deploy web applications.

- **Prettier:** Prettier, a code formatter, was employed to maintain a consistent and clean codebase. It automatically formats code according to defined rules, enhancing code readability.

- **Firebase Hosting:** Firebase Hosting was used to deploy the application to the web. It provides a fast and reliable hosting environment with automatic SSL encryption.

These technologies and tools were carefully chosen to create a robust and modern web application that addresses the transportation needs of Solent University students effectively. The combination of React, Firebase, and other supporting technologies ensures a seamless user experience and efficient development process.

## Getting Started

### Prerequisites

Before you start, ensure you have the following prerequisites:

- **Node.js and npm:** Install Node.js and npm on your local machine. You can download them from [nodejs.org](https://nodejs.org/).

- **Firebase Account:** Access to Firebase for setting up backend services such as authentication and Firestore database. Create a Firebase project and note down the configuration details.

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/MariusBaldovin/Solent_Ride_Share.git
   ```

2. Navigate to the project directory:

   ```bash
   cd solent-ride-share
   ```

3. Install project dependencies:
   ```bash
   npm install
   ```
4. Firebase Configuration:

- Create a Firebase project on the Firebase Console.
- Set up authentication for the project (Email, Google, and Facebook).
- Create a Firestore database for storing ride and user data.
- Add the Firebase configuration details to src/firebase/config.js.

5. Start the development server:
   ```bash
   npm start
   ```
6. Open the app in your browser at http://localhost:3000.

## Usage

- User Registration and Login: Register for a new account or log in using your existing credentials (email, student number, or social media).
- Browse and Search for Rides: Explore available rides by specifying your preferred date and time.
- Cost Sharing: If you wish to share transportation costs with other passengers, select the option while booking a ride. The cost will be calculated automatically based on the number of seats available.
- Rewards Program: Earn promotions and discounts by using the Solent Ride Sharing app regularly for your commute.
- Referral Program: Invite friends to join the app using your unique referral link and earn rewards for successful referrals.
- FAQ Section: Quickly find answers to frequently asked questions and concerns in the comprehensive FAQ section.
- Support Center: For specific inquiries or assistance with any issues, use the support section to contact customer service team.

## Deployment

To deploy your Solent Ride Share Single Page Application, you can use Firebase Hosting, which provides an easy way to host and manage web applications. Follow these steps to deploy your application using Firebase:

1. **Install Firebase CLI:** If you haven't already, install the Firebase Command Line Interface (CLI) globally on your machine:

   ```bash
   npm install -g firebase-tools

   ```

2. Login to Firebase: Log in to your Firebase account using the CLI:
   ```bash
   firebase login
   ```

This command will open a browser window where you can log in with your Firebase credentials.

3. Initialize Firebase Project: Navigate to your project's root directory and initialize Firebase for your project:

   ```bash
   firebase init
   ```

   During initialization, select the Firebase features you want to set up, including Firebase Hosting.

4. Configure Firebase: Follow the prompts to configure Firebase Hosting for your project. You will need to set up your project's public directory (usually build or public).

5. Build Your Application: Before deploying, build your application for production using:
   ```bash
   npm run build
   ```
6. Deploy to Firebase: Deploy your application to Firebase Hosting using the following command:
   ```bash
   firebase deploy
   ```

After a successful deployment, Firebase will provide you with a hosting URL where your Solent Ride Share Single Page Application is live.

Now, your application is hosted and accessible on the internet via the provided Firebase Hosting URL. You can share this URL with users to access your application.

For more details check [Firebase hosting documentation.](https://firebase.google.com/docs/hosting)

## License

MIT License

Copyright (c) 2023, Marius Baldovin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
