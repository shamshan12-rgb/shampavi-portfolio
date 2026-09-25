import { revealDelay } from '../lib/reveal.js';
import './Activities.css';

const activities = [
  {
    number: '01',
    role: 'Youth Forum Alumni Member',
    organization: 'American Corner, Jaffna',
    description:
      'Actively involved in youth development, community engagement, and leadership activities.',
  },
  {
    number: '02',
    role: 'AIESECer & OGV People Management Team Lead',
    organization: 'AIESEC • Winter Term',
    description:
      'Actively involved in AIESEC initiatives and OGV People Management. Progressed from Team Member during Summer Term 2026/27 to Team Lead in Winter Term, supporting member engagement and team coordination.',
  },
  {
    number: '03',
    role: 'USBUS Project Volunteer',
    organization: 'University of Vavuniya',
    description:
      'Volunteered for the USBUS – Mobile American Spaces program at the University of Vavuniya, where I shared experiences and skills gained through my Youth Forum journey. Engaged with students through interactive games, conversations, and activities, creating opportunities for meaningful connections and knowledge sharing.',
  },
  
    {
      number: '04',
      role: 'IEEE Member',
      organization: 'IEEE Student Branch, University of Vavuniya',
      description:
        'Actively participate as an IEEE Student Branch member. I also serve as a Secretary Team Member for the Artificial Vertex Project, contributing to project coordination, documentation, communication, and organizational activities.',
    }
  ,
  {
    number: '05',
    role: 'Director of Club Service',
    organization: 'Rotaract Club',
    description:
      'Lead Club Service initiatives, including planning, coordination, member engagement, collaboration, and community involvement.',
  },
  {
    number: '06',
    role: 'Zero Plastic Initiative — Volunteer',
    organization: 'University of Vavuniya',
    description:
      'Participated in environmental sustainability activities focused on plastic reduction and awareness.',
    roles: [
      {
        role: 'Program Coordinator',
        organization: 'Blue Focus Project',
        institution: 'University of Vavuniya',
        description:
          'Coordinated program activities and supported planning and execution.',
      },
    ],
  },
  {
    number: '08',
    role: 'St. John Ambulance Volunteer',
    organization: "Vembadi Girls' High School • 2018–2022",
    description:
      'Completed first-aid training and participated in community service activities.',
  },
];

function Activities() {
  return (
    <section id="activities" className="section activities-section">
      <div className="activities-container">
        <div className="section-heading" data-reveal>
          <span className="section-label">EXPERIENCE & INVOLVEMENT</span>
          <h2>Activities & Leadership</h2>
          <p>
            Leadership, volunteering, and extracurricular experiences that
            have shaped my teamwork, communication, and organizational skills.
          </p>
        </div>

        <div className="activities-timeline">
          {activities.map((activity, index) => (
            <article
              className="activity-card"
              key={activity.number}
              data-reveal
              style={revealDelay(index)}
            >
              <div className="activity-number">✦</div>

              <div className="activity-content">
                <h3>{activity.role}</h3>
                <div className="activity-organization">
                  {activity.organization}
                </div>
                {activity.institution && (
                  <div className="activity-organization">
                    {activity.institution}
                  </div>
                )}
                <p>{activity.description}</p>

                {activity.roles?.map((role) => (
                  <div className="activity-role" key={role.role}>
                    <h4>{role.role}</h4>
                    <div className="activity-organization">
                      {role.organization}
                    </div>
                    <div className="activity-organization">
                      {role.institution}
                    </div>
                    <p>{role.description}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Activities;