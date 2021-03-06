import React from "react";
import PropTypes from "prop-types";

import { Section, Layout, Hero } from "../src/composants";

// https://github.com/facebook/react/issues/377
const News = ({ title, date, html }) => (
  <div className="row">
    <div
      className="panel"
      style={{ width: "80%", margin: "20px auto", paddingTop: 0 }}
    >
      <div className="panel__header" id={date}>
        <h4>
          {title}
          <small className="panel__header-extra" style={{ float: "right" }}>
            {date}
          </small>
        </h4>
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  </div>
);

News.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  html: PropTypes.string
};

const Actus = () => (
  <Layout>
    <Hero
      title="Proposez-nous vos idées"
      tagline="Participer à l'amélioration du service public des Ministères Sociaux"
      style={{ backgroundImage: `url(/images/all-actus.jpg)` }}
    />
    <Section className="section-white" title="Déposez votre idée" subTitle="">
      <p>&nbsp;</p>
      <p style={{ textAlign: "center" }}>
        Envoyez-nous dès maintenant un email sur{" "}
        <a href="mailto:DSI-incubateur@sg.social.gouv.fr">
          DSI-incubateur@sg.social.gouv.fr
        </a>
      </p>
    </Section>
  </Layout>
);

export default Actus;
