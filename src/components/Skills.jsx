import {
  CppIcon,
  CssIcon,
  HtmlIcon,
  JavaIcon,
  JavaScriptIcon,
  PythonIcon,
} from './skillIcons.jsx'

import './Skills.css'

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', Icon: JavaIcon },
      { name: 'Python', Icon: PythonIcon },
      { name: 'C++', Icon: CppIcon },
    ],
  },

  {
    title: 'Web Technologies',
    skills: [
      { name: 'HTML', Icon: HtmlIcon },
      { name: 'CSS', Icon: CssIcon },
      { name: 'JavaScript', Icon: JavaScriptIcon },
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <h2 className="skills-heading">Skills</h2>

      {skillCategories.map((category) => (
        <div key={category.title} className="skill-category">
          <h3 className="skill-category-title">
            {category.title}
          </h3>

          <ul className="skill-grid">
            {category.skills.map(({ name, Icon }) => (
              <li key={name} className="skill-item">
                <span className="skill-icon">
                  <Icon />
                </span>

                <span className="skill-name">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

export default Skills