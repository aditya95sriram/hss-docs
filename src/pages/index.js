import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className="row">
          <div className="col col--3"></div>
          <div className={styles.buttons, clsx('col col--3')}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              HSS Documentation
            </Link>
          </div>
          <div className={styles.buttons, clsx('col col--3')}>
            <Link
              className="button button--secondary button--lg"
              to="/examples">
              HSS Examples
            </Link>
          </div>
          <div className="col col--3"></div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Start`}
      description={`${siteConfig.description}`}>
      <HomepageHeader />
    </Layout>
  );
}
