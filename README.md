# Portfolio

This is a personal portfolio website built using React and deployed using GitHub Pages. 
## Live Demo

You can view the live version of the portfolio [here](https://Adityaraj.in).

## Features

- Responsive design for mobile and desktop
- Interactive sections for projects and skills
- Hosted on GitHub Pages for easy access
- Configurable sections for customization via JSON settings

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm are installed on your machine. You can download them [here](https://nodejs.org/).

## Getting Started

To clone and run this application, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Adityaraj8/portfolio.git
   ```

2. **Find & Replace "Aditya Raj" with you name**

Find & Replace "Aditya Raj" with you name. And put you own favicon and image.

3. **Remove CNAME file:**

   ```bash
   rm CNAME
   ```
This CNAME is specfically for Adityaraj.in. In case you have your own DNS, you can put the CNAME address here. Either use your own CNAME or delete the existing file, or else GitHub pages will not deploy successfully.

4. **Navigate to the project directory:**

   ```bash
   cd portfolio/website
   ```

5. **Install dependencies:**

   ```bash
   npm install
   ```

6. **Start the development server:**

   ```bash
   npm start
   ```

   The app should now be running on `http://localhost:3000`.

## Configuration

You can customize the sections displayed on your portfolio by modifying the `website-setting.json` and `myData.json` files in the project.

### Enable or Disable Sections

1. **Locate the `website-setting.json` file:**

   The file is located in `website/src/website-setting.json`.

2. **Modify section visibility:**

   This file contains settings that control the visibility of various sections on your website. For example:

   ```json
   {
     "homepageEnabled": true,
     "resumeEnabled": true,
     "resume": {
       "headerEnabled": true,
       "contactEnabled": true,
       "workExperienceEnabled": true,
       "projectsEnabled": true,
       "educationEnabled": true,
       "skillsEnabled": true,
       "languagesEnabled": true,
       "interestsEnabled": true
     }
   }
   ```

   - Set a value to `true` to enable a section or `false` to disable it.
   - For example, if you want to hide the `workExperience` section, set `"workExperienceEnabled"` to `false`.

3. **Locate the `myData.json` file:**

   The file is located in `website/src/assets/data/myData.json`.

4. **Modify personal and professional information:**

   This file contains your personal information, work experience, education, skills, and projects. You can customize it to reflect your own details.

5. **Save changes:**

   After modifying the settings, save the changes. The development server will automatically reload to reflect the updates.

## Commiting & Pushing your changes to the GitHub

   ```bash
   git add .
   git commit -am "change description"
   git push main
   ```
You can also update the version of the app, it's located in `website/package.json`.
You can also update the release notes in `release-notes.md`

## Deployment

This project uses `gh-pages` to deploy to GitHub Pages. To deploy your own version, follow these steps:

1. **Build the project:**

   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages:**

   ```bash
   npm run deploy
   ```

   This will automatically push the `build` folder to the `gh-pages` branch and update the live site.

## Contributing

If you want to contribute to this project, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.