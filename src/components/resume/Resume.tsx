
import './Resume.css';
import thiruImg from '../../assets/thiru.jpg';


const Resume = () => {
    return (
        <div className="cv-container">
            {/* <header className="cv-header">
        <h1>Thirumani Raja</h1>
        <p>
          📍 Room No. 189, Holkar Chawl, Sion (W), Mumbai-400017<br />
          📧 <a href="mailto:thirumaniraja143@gmail.com">thirumaniraja143@gmail.com</a> |
          📱 +91 8286873929
        </p>
      </header> */}
            <header className="cv-header">
                <img src={thiruImg} alt="Thirumani Raja" className="cv-profile-img" />
                <h1>Thirumani Raja</h1>
                <p>
                    📍 Room No. 189, Holkar Chawl, Sion (W), Mumbai-400017<br />
                    📧 <a href="mailto:thirumaniraja143@gmail.com">thirumaniraja143@gmail.com</a> |
                    📱 +91 8286873929
                </p>
            </header>


            <section className="cv-section">
                <h2>Professional Summary</h2>
                <p>
                    Senior Software Developer with 7+ years of experience in front-end and full-stack development,
                    specializing in Angular, Node.js, and AWS. Proven track record of scalable solutions, leading teams,
                    and optimizing workflows for enhanced performance and user experience.
                </p>
            </section>

            <section className="cv-section">
                <h2>Work Experience</h2>

                <div className="cv-job">
                    <h3>Assistant Manager – IT, Mahindra Teqo <span>(Apr 2025 – Present)</span></h3>
                    <ul>
                        <li>Managing frontend for 4–5 products, leading 5 engineers using Agile/Kanban.</li>
                        <li>Collaborated with business teams to deliver scalable software solutions.</li>
                        <li>Architect and developer of high-performance applications using Angular & React.</li>
                    </ul>
                </div>

                <div className="cv-job">
                    <h3>Development Team Lead, IBM <span>(Sep 2022 – Apr 2025)</span></h3>
                    <ul>
                        <li>Led development for Nippon India Mutual Fund platform.</li>
                        <li>Worked on Node.js, Express.js, and Angular 12 for scalable solutions.</li>
                    </ul>
                </div>

                <div className="cv-job">
                    <h3>Senior Software Developer, TataClassEdge <span>(Jul 2020 – Sep 2022)</span></h3>
                    <ul>
                        <li>Developed robust front-end e-learning solutions with Angular 9–12.</li>
                    </ul>
                </div>

                <div className="cv-job">
                    <h3>Senior Developer, Xportify Technologies <span>(Jul 2019 – Feb 2020)</span></h3>
                    <ul>
                        <li>Built client-focused data cleansing tools using Angular and JS.</li>
                    </ul>
                </div>

                <div className="cv-job">
                    <h3>Software Developer, Balaji Software <span>(May 2018 – Jul 2019)</span></h3>
                    <ul>
                        <li>Designed e-commerce websites and hybrid apps using Ionic & Angular.</li>
                    </ul>
                </div>
            </section>

            <section className="cv-section">
                <h2>Education</h2>
                <ul>
                    <li>MIM, M.E.T, Mumbai University (2018–2021) – 64.22%</li>
                    <li>B.Sc. IT, S.I.W.S College, Mumbai University (2013–2016) – 63.22%</li>
                </ul>
            </section>

            <section className="cv-section">
                <h2>Technical Skills</h2>
                <p>
                    <strong>Frontend:</strong> Angular (Rxjs, Store), React (Axios, Redux), JavaScript, TypeScript<br />
                    <strong>Backend:</strong> Node.js (Express.js)<br />
                    <strong>Database:</strong> MySQL<br />
                    <strong>Tools:</strong> Git, Jira, Confluence, Bitbucket, AWS S3, CloudWatch
                </p>
            </section>

            <section className="cv-section">
                <h2>Achievements</h2>
                <ul>
                    <li><strong>Collaborative Problem-Solving:</strong> Aligned team expectations and resolved challenges.</li>
                    <li><strong>Innovative Thinking:</strong> Brainstormed ideas to enhance team productivity and UX.</li>
                    <li><strong>Codebase Optimization:</strong> Reduced errors and improved scalability.</li>
                </ul>
            </section>

            <section className="cv-section">
                <h2>Core Strengths</h2>
                <p>Team Leadership | Agile Methodologies | Problem-Solving | Fast Learner</p>
            </section>

            <footer className="cv-footer">
                <p>© {new Date().getFullYear()} Thirumani Raja — All rights reserved</p>
            </footer>
        </div>
    );
};

export default Resume;
