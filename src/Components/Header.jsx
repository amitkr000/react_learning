import styles from "./Header.module.css";
import PropTypes from "prop-types";

function Header(props) {
  return props.ProjectName != "" ? (
    <div className={styles.Header}>
      <h3 className={styles.title}>{props.ProjectName}</h3>
    </div>
  ) : null;
}

Header.propType = {
  ProjectName: PropTypes.string,
};

Header.defaultprops = {
  ProjectName: "Project Name",
};

export default Header;
