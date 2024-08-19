import Job from "./Job";
const Jobs = (props) => {
  return (
    <main>
      <section className={props.classname}>
        <Job
          className="oneRedJob"
          title="Full Time Sales Associate - Sydney Boutique"
          contractType="CDI"
          country="Australie"
          city="Sydney"
        />
        <Job
          className="oneGreenJob"
          title="Agent de sécurité - Pantin"
          contractType="CDI"
          country="France"
          city="Pantin"
        />
        <Job
          className="oneYellowJob"
          title="Responsable d'Atelier(H/F)"
          contractType="CDD"
          country="France"
          city="Paris"
        />
        <Job
          className="oneBlueJob"
          title="Chef de Projets"
          contractType="CDD"
          country="France"
          city="Paris"
        />
        <Job
          className="onePinkJob"
          title="Développeur React.js"
          contractType="CDI"
          country="France"
          city="Paris"
        />
        <Job
          className="oneRedJob"
          title="Sales Associate Stockholm"
          contractType="CDI"
          country="Suède"
          city="Stockholm"
        />
        <Job
          className="oneGreenJob"
          title="Vendeur/se - Crans Montana"
          contractType="CDI"
          country="Suisse"
          city="Crans-Montana"
        />

        <Job
          className="oneYellowJob"
          title="CRM & Data Quality Analyst"
          contractType="CDI"
          country="USA"
          city="New-York"
        />
        <Job
          className="oneBlueJob"
          title="Infirmier (H/F)"
          contractType="CDI"
          country="France"
          city="Pantin"
        />
      </section>
    </main>
  );
};

export default Jobs;
