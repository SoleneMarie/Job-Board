import Job from "./Job";
const Jobs = (props) => {
  return (
    <main>
      <section className="allJobs">
        <Job
          className={props.className}
          title={props.title}
          contractType={props.contractType}
          country={props.country}
          city={props.city}
        />
      </section>
    </main>
  );
};

export default Jobs;
