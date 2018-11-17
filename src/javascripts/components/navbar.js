import $ from 'jquery';

const displayNavbar = () => {
  let domString = '';
  domString += `
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
    <div class="navbar-collapse justify-content-md-center navbar-dark bg-dark" id="navbar">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="#about">About Me</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#project-page">Projects</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#tech-page">Technologies</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#contact-page">Contact</a>
            </li>
        </ul>
    </div>
  </nav>`;
  $('#navbar-output').html(domString);
};

export default displayNavbar;
