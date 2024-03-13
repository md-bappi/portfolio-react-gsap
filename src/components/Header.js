import { Link } from "react-router-dom";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header container">
      <div className="row">
        <h2>
          Md. A<span>b</span>u An<span>a</span>s
        </h2>
        <h2>
          B<span>a</span>ppy
        </h2>
      </div>

      <hr />

      <div className="row">
        <span>MERN Stack Developer</span>
        <a href="https://www.google.com" target="_blank" rel="noreferrer">
          view Resume
        </a>
        <a
          href="mailto:mdabu.Bappy.555@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Sent Email
        </a>
        <Link to="/contact">Contact Me</Link>
      </div>

      <hr />

      <div className="row">
        <Link to="/about" className="box about">
          <span>About</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
        <h2>Aspiring</h2>
        <Link to="/about" className="box projects">
          <span>Projects</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
      </div>

      <hr />

      <div className="row">
        <h2>
          MERN St<span>a</span>ck Dev<span>el</span>oper
        </h2>
      </div>

      <hr />

      <div className="row">
        <h2>Based</h2>
        <Link to="/skills" className="box skills">
          <span>Skills</span>
          <span>
            <BsArrowUpRightCircle />
          </span>
        </Link>
        <h2>in Bangladesh</h2>
      </div>

      <hr />
    </div>
  );
};

export default Header;
