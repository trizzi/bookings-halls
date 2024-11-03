# Booking Halls
A modern Next.js web application built with React 18, Tailwind CSS, Appwrite, Context API, Luxon, and React-Toastify. This application demonstrates efficient state management, real-time database interaction, and seamless UI/UX with dark and light mode themes.

## Table of Contents
- Features
- Tech Stack
- Link to Project
- Project Images
- Installation
- Configuration
- Usage
- Scripts
- Folder Structure
- Contributing
- License
  
## Features
- Responsive Design with dark and light themes using Tailwind CSS.
- Real-time Database integration with Appwrite.
- Global State Management using React Context API.
- Date Formatting using Luxon for precise UTC timestamps.
- User Notifications using React-Toastify for interactive alerts.

## Tech Stack
- Frontend: React 18, Next.js
- Styling: Tailwind CSS
- Database: Appwrite
- State Management: React Context API
- Date Formatting: Luxon
- Notifications: React-Toastify

## Link to Project
- https://bookings-halls.vercel.app/

## Project Images
<img width="1680" alt="Screenshot 2024-11-03 at 22 26 30" src="https://github.com/user-attachments/assets/18219e96-0bd6-4d9d-bc55-009e475543fc">
<img width="1680" alt="Screenshot 2024-11-03 at 22 26 36" src="https://github.com/user-attachments/assets/99b9fc01-7b10-460e-b5e7-8f89ebcf1d40">
<img width="1680" alt="Screenshot 2024-11-03 at 22 26 52" src="https://github.com/user-attachments/assets/8ee9734a-4910-45a0-85e7-f72f015fb579">
<img width="1680" alt="Screenshot 2024-11-03 at 22 26 57" src="https://github.com/user-attachments/assets/93cb2f90-1bcb-4c0f-9d6b-f75bce4859a5">
<img width="1680" alt="Screenshot 2024-11-03 at 22 27 02" src="https://github.com/user-attachments/assets/cfb3b677-3158-49d9-af5e-dd39926affa1">
<img width="1680" alt="Screenshot 2024-11-03 at 22 27 08" src="https://github.com/user-attachments/assets/c46ab8f4-3ea0-4c5f-8495-9bc5a41e1e1e">
<img width="1680" alt="Screenshot 2024-11-03 at 22 35 22" src="https://github.com/user-attachments/assets/4a013a34-81e0-412c-9b91-fec6dd15df30">


# Installation
##Prerequisites
- Node.js >= 14.x and npm >= 6.x
- Appwrite instance (local or cloud-based)
  
## Steps
Clone the repository:

```bash
Copy code
git clone https://github.com/trizzi/bookings-halls.git
cd booking-halls
```

##Install dependencies:

```bash
Copy code
npm install
Set up Appwrite (see Configuration below).
```

## Configuration
- Create a .env.local file in the root of your project with the following environment variables:

```bash
Copy code
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://<YOUR_APPWRITE_ENDPOINT>
NEXT_PUBLIC_APPWRITE_PROJECT=<YOUR_PROJECT_ID>
Replace <YOUR_APPWRITE_ENDPOINT> and <YOUR_PROJECT_ID> with your Appwrite project details.
```
## Usage
Run the development server:

```bash
Copy code
npm run dev
Open your browser:
```
## Navigate to http://localhost:3000 to see the application in action.

## Scripts
- npm run dev - Start the development server.
- npm run build - Build the app for production.
- npm run start - Run the production build.
- npm run lint - Run ESLint for code listing.


## Folder Structure
```plaintext
Copy code
.
├── components         # Reusable UI components
├── context            # Context providers for global state
├── pages              # Next.js pages
├── public             # Public assets
├── styles             # Tailwind CSS and global styles
├── utils              # Helper functions (e.g., date formatting with Luxon)
└── .env.local         # Environment variables (Appwrite config)
```

## Key Technologies
1. React Context API
Used for global state management, providing an efficient and scalable solution for sharing data across the application.
2. Appwrite
Manages the application's backend with a focus on real-time updates and API-driven architecture.
3. Luxon
Handles all UTC date formatting for consistent timestamp management across the app.
4. React-Toastify
Provides customizable alerts for enhanced user feedback.
5. Tailwind CSS
Used for responsive design and styling, including built-in support for dark mode.

## Contributing
Feel free to open an issue or submit a pull request. For major changes, please open an issue first to discuss your proposed changes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
