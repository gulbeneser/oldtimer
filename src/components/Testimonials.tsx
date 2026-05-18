import { teamMembers, testimonials } from '../data/teamData';

export default function Testimonials() {
  return (
    <section className="section-warm" id="ueber-uns">
      <div className="container center narrow">
        <div className="eyebrow">Drivr Society</div>
        <h2>Menschen, die Fahrfreude leben.</h2>
        <p className="lead">
          Gleichgesinnte, Enthusiasten und Liebhaber, verbunden durch Stil, Geschichte und die
          Faszination für besondere Automobile.
        </p>
      </div>

      <div className="container testimonials">
        {testimonials.map((t) => (
          <article className="quote" key={t.id}>
            <p>{t.quote}</p>
            <small>{t.author}</small>
          </article>
        ))}
      </div>

      <div className="container team">
        {teamMembers.map((member) => (
          <article className="member" key={member.id}>
            <div
              className="member-img"
              role="img"
              aria-label={member.name}
              style={{ backgroundImage: `url('${member.imageUrl}')` }}
            />
            <h4>{member.name}</h4>
            <p>{member.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
