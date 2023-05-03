import Proj1 from "../assets/Proj1.PNG";
import Proj12 from "../assets/Proj1-2.gif"
import Proj13 from "../assets/Project13.gif"
import Proj2 from "../assets/Proj2-1.gif"
import Proj22 from "../assets/Proj22.png"
import Proj23 from "../assets/Proj25.png"
import Proj24 from "../assets/Proj23.png"
import Proj3 from "../assets/Proj3.jpg"
import Proj41 from "../assets/Project4-1.png"
import Blank from "../assets/Blank.png"
import Proj32 from "../assets/RenderDancing.gif"
import Proj51 from "../assets/Proj51.png"
import Proj61 from "../assets/Proj61.PNG.png"

export const ProjectList = [
    {
        name: "Production Dashboard Prototype",
        image: Proj1,
        image2: Blank,
        overview: "In this project I had to create a web application to show production data from the company, I made a dashboard page to show the main data, a Heijunka page where I showed the current lots being made and a report page that showed how much had been produced per hour",
        link: "",
        info: [
            {
                title:"Dashboard page",
                desc: "In this page I display the most importan infomration of the production, how many products have been made, how close it is to the production objective and how fast are they making the product",
                img: Proj1,
            },
            {
                title:"Heijunka page",
                desc: "Here you see a report on production lots, every time a lot is finished the information gets updated and it is displayed until the shift ends. Because we didn't get to impleent a way to retrieve the data from the production lines, the production is simulated by the click of a button. This information is uploaded to a database.",
                img: Proj12,
            },
            {
                title:"Hourly report",
                desc: "This page shows the amount of product made per hour, all of this information is stored in an SQL Server database, you can also download this table as an excel file.",
                img: Proj13,
            },
            ], 
         
        skills: "Javascript, VueJS, Vuetify, Express, NodeJS, SQL Server",
        git: "https://github.com/Hastorga105/VueJS-Production-Dashboard"
    },
    {
        name: "React Youtube Clone (Work In Progress)",
        image: Proj61,
        overview: "This is a web application that uses information from the official Youtube website to create a simplified version of the website. It uses RapidAPI to extract data from Youtube and then convert it into an API. This project was made following a Javascript Mastery's tutorial.",
        link: "https://hastorga105.github.io/react-youtube-clone/",
        info: [
            {
                title:"",
                desc: "",
                img: null,
            },
            ], 
         
        skills: "ReactJS, Javascript, Axios, API, Material UI",
        git: "https://github.com/Hastorga105/react-youtube-clone"
    },
    {
        name: "Unity Render Game",
        image: Proj32,
        overview: "As a way of learning the basics of the Unity game engine, I developed a game based on my university and its mascot Rendo. In this project I used basic concepts of C# and knowledge from one of my passions 3D modeling.",
        link: "https://hastorga.itch.io/render-game",
        info: [
            {
                title:"Welcome to the UTLD",
                desc: "Play as Rendo and explore a 3d recreation of the university!",
                img: Proj22
                
            },
            {
                title:"Plenty of NPC's",
                desc: "You can find many people at the university, see what they have to say.",
                img: Proj23
                
            },
            {
                title:"Day and night cycle",
                desc: "Watch how the landscape changes as time passes",
                img: Proj24
                
            },
            ], 
        skills: "C#, Unity, Blender",
        git:"https://github.com/Hastorga105/Render-Game-Unity"
    },
    {
        name: "Laravel online store",
        image: Proj2,
        overview: "In this project I developed a mockup online store using the laravel framework to create the backend, this project includes a database, and a user login system.",
        link: "",
        info: [
            {
                
            },
            ], 
        skills: "PHP, Laravel, NodeJS, Tailwind CSS",
        git:"https://github.com/Hastorga105/Laravel-Online-Store"
    },
    
    {
        name: "Android studio API REST APP",
        image: Proj41,
        overview: "This is one of the simpler projects, here I learned how to retrieve data from an API and display it on an android app.",
        link: "",
        info: [
            {
                
            },
            ], 
        skills: "Android Studio, Kotlin, Jetpack Compose",
        git:"https://github.com/Hastorga105/androidAPIexercise"
    },
    {
        name: "Personal Portfolio",
        image: Proj51,
        overview: "This is my personal portfolio where I showcase my programming experience. This project was made in React, it uses React hooks (useState, useRef, useEffect...). It's my first time using the Material UI framework, I'm still getting used to it.",
        link: "",
        info: [
            {
                
            },
            ], 
        skills: "React, Javascript, Material UI",
        git:"https://github.com/Hastorga105/Portfolio",
        dependencies: "swiper, react intersection observer"
    },
];