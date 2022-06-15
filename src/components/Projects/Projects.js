import React, { Component } from "react";
import OneProject from "./oneProject";
import "./Projects.css";

class Projects extends Component {
  state = {
    projects: [
      {
        id: "1",
        title: "Coder Blogger Website ",
        description:
          "This website was developed for articles written on different topics like programming, trending,technologies, etc .The website was designed with Bootstrap.",
        url: "https://github.com/Waqaskhan404/ICoder",
        img: "./images/projects/i-coder.png",
      },
      {
        id: "2",
        title: " Old Portfolio website",
        description:
          "The ultimate purpose of a portfolio website is to provide us a way for you to land more clients, whether that means freelance work, more clients for your agency, or employment at a company.",
        url: "https://github.com/Waqaskhan404/Portfolio",
        img: "./images/projects/Old Portfolio.PNG",
      },
      {
        id: "3",
        title: "Textutils",
        description:
          "It is a simple React website in which users can Analyze text. It has the Functionality to change the text from upper case to Lower, lower case to upper case remove the extra spaces between the words, etc. It also shows us how many words we have written.",
        url: "https://github.com/Waqaskhan404/TextUtils",
        img: "./images/projects/textutlis.png",
      },
      {
        id: "4",
        title: "New Monkey ",
        description:
          "News Monkey is a News Website that has a large variety of information that is considered news but itincludes entertainment, science ,technology, and Sports..",
        url: "https://github.com/Waqaskhan404/NewsMonkey",
        img: "./images/projects/newsMonkey.PNG",
      },
      {
        id: "5",
        title: "Cable Co ",
        description:
          "This is a DashBoard where user can check Coursed performances and an attractive svgs.",
        url: "https://github.com/Waqaskhan404/CABLECO",
        img: "./images/projects/cableCo.png",
      },
      {
        id: "6",
        title: "tinDog",
        description: "A fully responsive Page with responsive using BootStrap.",
        url: "https://github.com/Waqaskhan404/TinDog-Start-master",
        img: "./images/projects/TinDog.png",
      },
      {
        id: "7",
        title: "Appen Design",
        description:
          "A Simple  website made with HTML,CSS and made responsive with media Queries .",
        url: "https://github.com/Waqaskhan404/appem-design",
        img: "./images/projects/Appem.png",
      },
      {
        id: "8",
        title: "Traveling Website",
        description: "A landing page Fully Attractive design with anamtion",
        url: "https://github.com/Waqaskhan404/Travelling",
        img: "./images/projects/traveling.png",
      },
      {
        id: "9",
        title: "SCTE Design ",
        description: "Website made with Bootstrap and reponsive also",
        url: "https://github.com/Waqaskhan404/SCTE-design",
        img: "./images/projects/SCTE.png",
      },
      {
        id: "10",
        title: "Book List",
        description:
          "Can add book and make a list of them using Javascript Functinality",
        url: "https://github.com/Waqaskhan404/BookList",
        img: "./images/projects/AddBookList.png",
      },
      {
        id: "11",
        title: "Gym Website",
        description: "Made website using the Tailwind Bulid in components",
        url: "https://github.com/Waqaskhan404/Gym_website-using-Builted-Components",
        img: "./images/projects/gymSite.png",
      },
      {
        id: "12",
        title: "TaskList",
        description: "Made Tasklist where user can add Task using JavaScript",
        url: "https://github.com/Waqaskhan404/tasklist",
        img: "./images/projects/tasklist.png",
      },
      {
        id: "13",
        title: "Load Calculator",
        description:
          "Made LoanCalculator basic UI for practice  where user can calculater loan .Here i use JavaScript for doing functionality",
        url: "https://github.com/Waqaskhan404/loancalculator",
        img: "./images/projects/loanCal.png",
      },
      {
        id: "13",
        title: "InvitationList",
        description:
          "InvatationList  where user can add  who is invited and done Crud operation using  JavaScript.",
        url: "https://github.com/Waqaskhan404/invitationform",
        img: "./images/projects/invitationList.png",
      },
      {
        id: "14",
        title: "GitHubFinder",
        description:
          "Using GitHub api fetch All the data of All the profiles of gitHub by search names Using Javascript For functionality",
        url: "https://github.com/Waqaskhan404/githubfinder",
        img: "./images/projects/getHubfinder.png",
      },
    ],
  };
  render() {
    return (
      <main className="projects" data-aos="fade-right">
        <h1>My Projects</h1>
        <section className="projects-container">
          <OneProject data={this.state.projects} />
        </section>
      </main>
    );
  }
}

export default Projects;
