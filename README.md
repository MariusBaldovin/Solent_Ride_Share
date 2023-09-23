# Solent_Ride_Share

# Solent Ride Share Single Page Application

![Project Banner](https://res.cloudinary.com/duaqx9tzs/image/upload/v1695427193/HOME_PAGE_4_mc8bz3.jpg)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

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

5. Install project dependencies:
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
