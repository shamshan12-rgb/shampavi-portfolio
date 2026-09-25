import {
  CppIcon,
  CssIcon,
  HtmlIcon,
  JavaIcon,
  JavaScriptIcon,
  PythonIcon,
} from './skillIcons.jsx'

import { revealDelay } from '../lib/reveal.js'
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
      <h2 className="skills-heading" data-reveal>Skills</h2>

      {skillCategories.map((category, categoryIndex) => (
        <div key={category.title} className="skill-category">
          <h3
            className="skill-category-title"
            data-reveal
            style={revealDelay(categoryIndex)}
          >
            {category.title}
          </h3>

          <ul className="skill-grid">
            {category.skills.map(({ name, Icon }, skillIndex) => (
              <li
                key={name}
                className="skill-item"
                data-reveal
                style={revealDelay(categoryIndex + skillIndex + 1)}
              >
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