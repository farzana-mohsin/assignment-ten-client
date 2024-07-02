# Assignment Ten

B9 A10 Type-02 Requirements
Github server side link: https://github.com/programming-hero-web-course-4/B9A10-client-side-farzana-mohsin
Github client side link: https://github.com/programming-hero-web-course-4/b9a10-server-side-farzana-mohsin
live site link: https://assignment-ten-7654f.web.app/

## Crown Art

This project is a web application that allows users to browse through an arts and crafts website, browse painting and drawing of different categories, a button to view individual art details, and track their progress by logging in. They can also view their added arts and crafts in "My Arts & Crafts" private route. The website provides a user-friendly interface and offers various features to enhance productivity.

## Key Features

- User authentication: The application allows users to create accounts and log in to access their tasks and settings. Firebase is used to handle the authentication.
  - The register and login have multiple credentials which are shown by toasts.
  - User can also log in via their Google or Github accounts.
- Navbar, Banner, All Arts & Crafts, and Footer sections are publicly available.
- The Homepage features the banner, six cards of arts and crafts and two extra sections
  - Two extra sections are Exhibitions & Events and Our Activities & Achievements
- Private Routes - The application has multiple private routes, which are visible only if the users are logged in.

  - The Add Craft page has the ability to add crafts once the user is logged in.
  - My Arts & Crafts will show all the items added by the user who is logged in. The user can update or delete their own craft ite.
  - The logged in user can view details of each individual craft.

- Integration with other tools: The application has been integrated with popular productivity tools, such as React-simple-typewriter and React-Awesome-Reveal
- React toastify were used to show the success and error messages
- Images were hosted on imgbb.
- Mobile and tablet friendly: The web application is responsive and optimized for mobile devices, allowing users to manage tasks on the go.
- Firebase config keys have been transferred to .env.local file.
- MongoDB username and password have been transferred to .env file with encrypted code.
