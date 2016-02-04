# ${PROJECT_NAME}
- Take offer to fund from company

## Description
> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Functionality
- User
  - Can create account
  - Can log in said account
  - Can view their *own* profile

  - Can post project
  - Can rate project
  - Can comment on project
  - Can send offer to project
  - Can cancel project if owner
  <!-- - Can send money to project -->

  - Can view projects on main page
  - Can view projects they contributed to

- Project
  - Can declare estimated budget
  - Can post intention
  - Can can change state
  - Can receive money
  - Can receive offers
  - Can modify itself

## Entities
- Project
  - Goal
  - Mission/Message
  - Strategy
  - Timeline
  - Get money
  - Get offers
  - Comments
    - Rating
  - Votes

  - Status
    - Funded
    - Being Funded
    - Cancelled

  - Owners

- User
  - Wallet
  - Comments
  - Projects contributed to
    - And their status

## Classes
- User
- Project
- Comment
- Offer
- Status **[Enum]**
- Comment
- Rating
- Money
- Wallet
- Contribution
- Vote

## GUI
- Scenes
  - Login
  - Register
  - Profile
    - Add project

  - Projects **[main]**
    - Individual project
	- -> Sort, page, search

- Scene details

## Requirements coverage
- Creativity
  - Subjective
- Value to the end user
  - ...
- Use custom Views
  - Yes
- Use animations
- Device APIs
- Application Storage (SQLite)
- Remote data
- Background tasks
- Touch friendly UI
- Notifications
- Gestures
- High-quality code and reusability
- Validation and Error handling









- Account login info in sqlite