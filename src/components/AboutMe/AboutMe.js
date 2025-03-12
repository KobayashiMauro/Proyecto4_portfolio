import data from '../../data/data';
import './AboutMe.css';

const template = () => {
  return `
    <section class="aboutme" id="aboutme">
      <h2>About me</h2>
      <div class="avatartext">
      <p>${data.aboutMe}</p>
      <img class="avatar" src=${data.avatar} alt=${data.name}/>
      </div>
      <p>${data.address}</p>
      <a href=${`mailto:${data.email}>Contact me</a>`}
      <ul>
      ${data.skills
        .map(
          (skill) => `<li>
      <p>${skill}</p>
      </li>`,
        )
        .join('')}
    </ul>
      
    </section>
  `;
};

export const AboutMe = () => {
  return template();
};

export const addAboutListeners = () => {
  const avatar = document.querySelector('.avatar');

  avatar.addEventListener('click', (e) => e.target.classList.toggle('rotate'));
};
