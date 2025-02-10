# React Project Manager

A modern React-based project management application that allows users to create, manage, and track projects and their associated tasks.
** CURRENTLY FRONT-END ONLY **

## Features

- Create and manage multiple projects
- Add project details including title, description, and due date
- Add and remove tasks for each project
- Responsive sidebar navigation
- Modern UI with Tailwind CSS
- Error handling with modal dialogs
- Real-time project updates

## Technologies Used

- React 19
- Tailwind CSS
- Vite
- React Portals (for modals)
- React Refs

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
- git clone [https://github.com/CaseyDevs/project-manager]
- cd 12-project-manager

2. Install dependencies
- npm install

3. Start the development server
- npm run dev

4. Open your browser and visit `http://localhost:5173`

## Usage

1. Click "Add Project" to create a new project
2. Fill in the project details:
   - Title
   - Description
   - Due Date
3. Save the project to add it to your list
4. Select projects from the sidebar to view details
5. Add tasks to your projects
6. Clear completed tasks as needed

## Project Structure

- project-manager/
- ├── src/
- │ ├── components/
- │ │ ├── Button.jsx
- │ │ ├── ErrorModal.jsx
- │ │ ├── Input.jsx
- │ │ ├── NewProject.jsx
- │ │ ├── NewTask.jsx
- │ │ ├── NoProject.jsx
- │ │ ├── SelectedProject.jsx
- │ │ ├── Sidebar.jsx
- │ │ └── Tasks.jsx
- │ ├── App.jsx
- │ ├── main.jsx
- │ └── index.css
- ├── public/
- ├── index.html
- └── package.json

## Acknowledgments

- Built with React and Vite
- Styled with Tailwind CSS
- Error handling with React Portals
- State management with React Hooks
