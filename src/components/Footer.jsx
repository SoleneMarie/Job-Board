const Footer = (props) => {
  return (
    <footer>
      <p>
        Made with <span>{props.tech}</span> at <span>{props.place}</span> by{" "}
        <span>{props.by}</span>
      </p>
    </footer>
  );
};

export default Footer;
