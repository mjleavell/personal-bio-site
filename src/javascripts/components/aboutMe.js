import $ from 'jquery';
import wedcirc from '../../images/wedcirc.png';

const displayAbout = () => {
  let domString = '';
  domString += `
  <div class="container p-4">
    <div class="row">
        <div class="col-md-8">
            <h2 class="ml-0 mb-3">About Me</h2>
            <p class="text-justify">I am originally from Memphis, but I have lived in Nashville for the past 6 years. I am an avid Memphis Grizzlies fan. I graduated from Vanderbilit University in 2016 with a degree in Engineering Science.</p>
            <p class="text-justify">For the past 2 years, I have worked as a Business Analyst at a consulting company. I was previously exposed to software development at a college internshipt, but it wasnt until my first job that I began to realize software development is what I want to do.</p>
            <p class="text-justify">As a business analyst for a Fortune 200 manufacturing company, developed and maintained test plans for a consolidation initiative. The project affects five geographical locations in four states, including the closure of the company’s second largest facility. Collaborated with multiple team members and departments to create test plans. Organized financial information. Created and maintained spreadsheets to track spending against the budget. Checked incoming invoices against purchase orders and purchase requisitions for accurate billing.</p>
            <p class="text-justify">Performed business analysis on an Agile team for the development of a configurable web-based platform administering assessments for admission into Skilled Nursing Facilities. Defined detailed requirements with applicable acceptance criteria in collaboration with product owners and technology team in order to ensure the team understood requirements to successfully meet business needs.  Collaborated with product owners and technology team to understand the dependencies between systems and processes, both internal and external.</p>
            <p class="text-justify">As a business analyst for a major healthcare corporation, reviewed and approved completed development work before release into production. Ensured product owners were informed if changes occurred that impacted delivery to the business. Wrote test plans and test cases. Created and maintained test automation solutions. Executed manual test cases. Improved, optimized, and identified opportunities for improved software development.</p>
            <p class="text-justify">As an IT project management intern at a national tire manufacturing company, led a team of ten members on a $117,000 project which resulted in reducing the current backlog for report development and illustrated the value of Agile methodology for IT projects. Acted as the liaison between the business stakeholders and software developers. Conducted quality audits on IT projects and various IT PMO processes. Improved quality of reports from 25% to 80% in less than three months.  Developed project charters and project plans, led meetings, and completed recurring PMO activities.</p>
        </div>
        <div class="col-md p-0 text-right">
            <img id="about-img" class="img-responsive" style="width:300px; height: auto;">
        </div>
    </div>
  </div>`;
  $('#about').html(domString);
  $('#about-img').attr('src', wedcirc);
};

export default displayAbout;
