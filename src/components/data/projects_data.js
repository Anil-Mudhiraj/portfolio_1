import COVID from "../../assets/projects_images/COVID.jpg";
import todo from "../../assets/projects_images/todo.png";
import crypto from "../../assets/projects_images/crypto.jpg";
import recipe from "../../assets/projects_images/recipe.png";
import login from "../../assets/projects_images/login.png";

const data_projects = [
  {
    name: "COVID 19 tracker",
    image: COVID,
    deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
    github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
    category: ["react.js"],
  },

  {
    name: "Todo List",
    image: todo,
    deployed_url: "https://dev-talks.herokuapp.com/",
    github_url: "https://github.com/Dey-Sumit/Dev-talks",
    category: ["node.js", "react.js"],
  },

  {
    name: "Crypto Currency Tracker",
    image: crypto,
    deployed_url: "https://crypto-tracker-v1.netlify.app",
    github_url: "",
    category: ["node.js", "api", "react.js"],
  },

  {
    name: "Recipe App",
    image: recipe,
    deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
    github_url: "https://github.com/Dey-Sumit/tweetme",
    category: ["django", "react.js"],
  },

  {
    name: "Login & SignIn Page",
    image: login,
    deployed_url: "!#",
    category: ["html_css", "vanilla"],
  },
];

export default data_projects;
