import data from '../../data/data';
import './Education.css';

const template = () => {
  return `
    <section class="education" id="education">
      <h2>Education</h2>
      <h3>${data.education.degree}</h3>
      <h4>${data.education.university}</h4>
      <p>${data.education.graduationYear}</p>
      <p>${data.education.honors}</p>
      <h3>Relevant Courses</h3>
      <ul id="relevantcourses">
      ${data.education.relevantCourses
        .map(
          (course) => `
      <li>
        <p>${course}</p>
      </li>
      `,
        )
        .join('')}
      </ul>
    </section>
  `;
};

const Education = () => {
  return template();
};

export default Education;
