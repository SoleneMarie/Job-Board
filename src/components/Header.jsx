import Title from "./Title";
const Header = (props) => {
  return (
    <header className="header">
      <Title name={props.name} />
    </header>
  );
};
export default Header;
