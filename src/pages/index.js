import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: (<><div className='home_items_title'>Java</div></>),
    imageUrl: ('img/java-logo.svg'),
    path: 'docs/java/general',
  },
  {
    title: (<><div className='home_items_title'>Python</div></>),
    imageUrl: 'img/python.png',
    path: 'docs/python/mdx'
  
  },
  {
    title: (<><div className='home_items_title'>SQL</div></>),
    imageUrl: 'img/sql.png',
    path: 'docs/sql/sql'
  },
  {
    title: (<><div className='home_items_title'>Books</div></>),
    imageUrl: 'img/books.png',
    path: 'docs/books/cleanCode/page1'
  },
];

function Feature({imageUrl, title, description,path}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <Link to={path}><img className={styles.featureImage} src={imgUrl} alt={title} /></Link>
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/java/tips')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
