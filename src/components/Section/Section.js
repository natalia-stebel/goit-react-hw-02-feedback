import PropTypes from 'prop-types';
import css from "./Section.module.css"

const Section = ({ title, children }) => {
  return (
    <section className={css.sectionContainer}>
      {title && <h2 className={css.title}>{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
};

export default Section;