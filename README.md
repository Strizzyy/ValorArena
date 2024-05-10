# ValorArena

ValorArena is a comprehensive platform designed to connect gamers, esports enthusiasts, and sponsorship firms. It provides a centralized space for users to connect, compete, and explore gaming opportunities.

## Key Features

- **Personalized Discovery**  
  Explore gaming events, tournaments, and networking opportunities tailored to your interests.

- **Interactive Chat Room**  
  Seamless communication, planning, and coordination among gamers and teams.

- **Reward System**  
  Earn rewards for participation and achievements through gamification elements.

- **Event Hosting**  
  Host your own gaming events and tournaments with friends on the platform.

- **Player Profiles**  
  Maintain player profiles to facilitate talent discovery and recruitment by esports teams or sponsors.

- **In-game Rewards**  
  Earn in-game items specific to the games you play by winning tournaments on the platform.

- **User Experience**  
  Effortlessly discover and participate in gaming events, connect with like-minded individuals, and showcase your skills.

- **Monetization**  
  Generate revenue through entry fees for paid events, sponsorship deals, and partnerships with gaming companies.

- **Community Building**  
  Foster a sense of community among gamers, socialize, collaborate, and build relationships within the gaming ecosystem.

## Project Structure

```bash
ValorArena/
│
├── package.json                # Project dependencies and scripts
├── src/
│   ├── config.js               # Database configuration
│   └── index.js                # Main server file
├── routes/
│   ├── authRoutes.js           # Authentication routes
│   └── profileRoutes.js        # Placeholder for profile-specific routes
├── views/
│   ├── home.ejs                # Home page
│   ├── login.ejs               # Login page
│   ├── profile.ejs             # Profile page
│   ├── signup.ejs              # Signup page
│   └── signupfail.ejs          # Signup failure page
└── public/
    ├── assets/                 # Static assets (CSS, images, etc.)
    ├── pg1.html                # Home page
    ├── profile.html            # Profile page
    ├── style.css               # Custom styles
    └── styles.css              # Additional custom styles
```

## Installation and Setup

### Prerequisites
- Node.js
- MongoDB (or any other database)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Strizzyy/ValorArena.git
   ```

2. Navigate to the project directory and install dependencies:
   ```bash
   cd ValorArena
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following environment variables:
   ```bash
   SESSION_SECRET=your_session_secret
   PORT=5000
   ```

4. Start the application:
   ```bash
   npm start
   ```

## Usage

### Authentication Routes

- **Signup**  
  `GET /signup` - Render signup page.  
  `POST /signup` - Create a new user.

- **Login**  
  `GET /login` - Render login page.  
  `POST /login` - Authenticate and log in the user.

- **Logout**  
  `GET /logout` - Log out the user.

- **Profile**  
  `GET /profile` - Access the user's profile (protected route).

### Screenshots

**Login Page**
![Login Page](public/assets/img/login_screenshot.png)

**Profile Page**
![Profile Page](public/assets/img/profile_screenshot.png)

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Create a new Pull Request.
