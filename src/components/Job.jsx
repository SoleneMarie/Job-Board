const Job = (props) => {
  return (
    <section className={props.className}>
      <h2>{props.title}</h2>
      <p>
        {props.contractType} - {props.country} - {props.city}
      </p>
    </section>
  );
};

export default Job;
