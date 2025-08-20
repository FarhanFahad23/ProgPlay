## Overview
ProgPlay is an innovative game designed to help students develop logic-building skills through 
interactive gameplay. This project bridges the gap between entertainment and education by 
allowing players to learn fundamental programming concepts in a fun and engaging way. In 
ProgPlay, users control an arrow to navigate a grid and collect Pokémon characters by inputting 
basic commands like move forward, move left, and move right. The game challenges players to 
think critically and plan their moves strategically, fostering logical thinking and problem-solving 
skills. 
The gameplay consists of multiple levels, each progressively increasing in difficulty. After 
completing a level, players' scores, rewards, and power metrics are calculated, providing real-time 
feedback and a sense of achievement.

## Key Feature

A key feature of ProgPlay is its utilization of Reinforcement Learning (RL) to dynamically 
generate levels. This AI-driven approach ensures that levels adapt to the player's skill level, 
providing an optimal balance of challenge and engagement. By analyzing player behavior, RL 
algorithms create unique level layouts, enhancing replayability and offering a personalized 
learning experience. 

## Useful Tools and Technologies 
1. Programming Languages 
The game logic for ProgPlay is primarily implemented in JavaScript due to its efficiency 
in handling interactive and dynamic elements within the game. HTML and CSS are used 
for the interface design, providing a visually engaging and responsive user experience. 
These technologies collectively enable a seamless, browser-compatible front end.

2. Reinforcement Learning (RL) Implementation 
For generating levels dynamically, Reinforcement Learning (RL) is implemented using 
Q-Learning. Q-learning approach is chosen for its efficiency in balancing exploration and 
exploitation, allowing the game to adaptively generate levels based on the player’s 
performance and history. This technique ensures a progressively challenging learning 
curve for users.

4. Database
   used the MySql database . to save the data into database


##  Installation / Deployment Guide (Local using XAMPP)

This section outlines how to install and run the **ProgPlay** application locally using XAMPP.

###  Step 1: Download and Install XAMPP
- Download the XAMPP installer for Windows from the website.
- Install it by following the on-screen instructions.
- By default, it installs to `C:\xampp`.

###  Step 2: Start Apache and MySQL
- Open the XAMPP Control Panel.
- Click **Start** next to:
  - **Apache** (for web server)
  - **MySQL** (for database)
- When both turn green, services are running successfully.


###  Step 3: Add Project to `htdocs`
- Go to `C:\xampp\htdocs`.
- Paste your project folder (e.g., `progplay`) here.

###  Step 4: Access Website in Browser
- Open any browser and go to: http://localhost/foldername
You should see the login page or homepage of ProgPlay.

###  Step 5: Access phpMyAdmin
- Go to: http://localhost/dashboard/

- Click on **phpMyAdmin** to manage the database via GUI.

###  Step 6: Create a New Database
- In phpMyAdmin, click **New** in the left pane.
- Name the database (e.g., `fyp_database`) and click **Create**.
- Now import `.sql` file or create tables manually.

### Step 7: edit connect.php and paste the database name which you create in PhpAdmin

