let projects = [
    {
        title: "Cool Project 1",
        screenshot: "http://gotoflashgames.com/files/file/033.jpg",
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    {
        title: "Cool Project 2",
        screenshot: "http://gotoflashgames.com/files/file/033.jpg",
        description: "This is the best project",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux",
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    },
    {
        title: "Cool Project 3",
        screenshot: "http://gotoflashgames.com/files/file/033.jpg",
        description: "This is the best project",
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux",
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
    }
];

// WRITETODOM FUNCTION
const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
};


const createProjectCard = () => {
    let newString = '';
    for (let i = 0; i < projects.length; i++) {
        // let prop = Object.getOwnPropertyNames(projects[i]);
        if (projects[i].available === true) {
            newString += `<div class="project">`;
            newString +=    `<img class="project-image" src="${projects[i].screenshot}"></img>`;
            newString +=    `<div class="project-info">`
            newString +=        `<h3 class="project-title">${projects[i].title}</h3>`
            newString +=        `<p class="project-description">Description: ${projects[i].description}</p>`;
            newString +=        `<p class="project-technologies-used">Technologies Used: ${projects[i].technologiesUsed}</p>`;
            newString +=        `<p class="project-availability">${projects[i].available}</p>`;
            newString +=        `<button class="project-button"><a target="_blank" href="${projects[i].url}">View Live Demo</a></button>`;
            newString +=        `<button class="project-button"><a target="_blank" href="${projects[i].githubUrl}">Explore on Github</a></button>`;
            newString +=    `</div>`;           
            newString += `</div>`;
        }
    }
    printToDom(newString, 'projectsPage');
};

// such an easier way to do this with jquery
const showPage = () => {
    document.getElementById('navLinks').addEventListener('click', () => {
        event.preventDefault();
        if (event.target.id === "navToHome") {
            document.getElementById('about').innerHTML = '';
            document.getElementById('tech').innerHTML = '';
            document.getElementById('project').innerHTML = '';
        } else if (event.target.id === "navToAbout") {
            let aboutString = `        
            <div class="container">
                <h1>About Me</h1>
                <p>I am originally from Memphis, TN, but I have lived in Nashville for 6 years. I went to Vanderbilt University.</p>
            </div>`;
            printToDom(aboutString, 'about');
            document.getElementById('home').innerHTML = '';
            document.getElementById('tech').innerHTML = '';
            document.getElementById('project').innerHTML = '';
        } else if (event.target.id === "navToTech") {
            let techString = `        
            <div class="container">
                <h1>Technology</h1>
                <p>I like technology</p>
            </div>`;
            printToDom(techString, 'tech');
            document.getElementById('home').innerHTML = '';
            document.getElementById('about').innerHTML = '';
            document.getElementById('project').innerHTML = '';
        } else {
            let projectString = `        
            <div class="container">
                <h1>Recent Projects</h1>
                <div id="projectsPage"></div>
            </div>`;
            printToDom(projectString, 'project');
            createProjectCard();
            document.getElementById('about').innerHTML = '';
            document.getElementById('tech').innerHTML = '';
            document.getElementById('home').innerHTML = '';
        }
    })
}

// CALL FUNCTIONS
showPage()