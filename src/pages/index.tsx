import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* <Heading as="h1" className="hero__title">
          {siteConfig.tagline}
        </Heading> */}
        <p className="hero__subtitle"> 🐱  {siteConfig.tagline} 🐱 </p>
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}
      </div>
    </header>
  );
}
type CardProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  href?: string;
  color?: 'default' | 'primary' | 'success' | 'warning' | 'danger'; // 新增颜色类型
};

// default, primary, success, warning, danger
const colorMap = {
  default: {
    bg: 'var(--ifm-background-surface-color)',
    border: 'var(--ifm-color-emphasis-200)',
    title: 'var(--ifm-color-primary)',
  },
  primary: {
    bg: '#D0E8FF',
    border: '#A0D4FF',
    title: '#0B5FFF',
  },
  success: {
    bg: '#DFFFE0',
    border: '#A0FFB0',
    title: '#1A9F00',
  },
  warning: {
    bg: '#FFF8D0',
    border: '#FFE680',
    title: '#B38600',
  },
  danger: {
    bg: '#FFD0D0',
    border: '#FF8080',
    title: '#BF0000',
  },
};

export function Card({ title, children, href, color = 'default' }: CardProps) {
  const clickable = Boolean(href);
  const styles = colorMap[color];

  const content = (
    <div
      style={{
        border: `1px solid ${styles.border}`,
        borderRadius: '12px',
        padding: '1.5rem',
        background: styles.bg,
        boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: clickable ? 'pointer' : 'default',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.05)';
      }}
    >
      {clickable ? (
        <h3 style={{ marginTop: 0 }}>
          <Link
            to={href}
            style={{
              color: styles.title,
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = styles.title)}
            onMouseLeave={(e) => (e.currentTarget.style.color = styles.title)}
          >
            {title}
          </Link>
        </h3>
      ) : (
        <h3 style={{ marginTop: 0, color: styles.title }}>{title}</h3>
      )}
      <div style={{ color: 'var(--ifm-color-content-secondary)' }}>{children}</div>
    </div>
  );

  return content;
}

export function CardGrid({ header, children }) {
  return (
    <div style={{ marginTop: '2rem', marginBottom: '2rem', maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
      {header && (
        <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
          {typeof header === 'string' ? (
            <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>{header}</h2>
          ) : (
            header
          )}
        </div>
      )}
      <div
        style={{
          display: 'grid',
          gap: '1.5rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          justifyContent: 'center',
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  // default, primary, success, warning, danger
  /**
   * Component: Card, CardGrid
   * Props for CardGrid: header (optional)
   * Props for Card: title, children, href (optional), color (optional: 'default' | 'primary' | 'success' | 'warning' | 'danger')
   * Example usage:
   * <CardGrid header="🚀 快速开始">
   *   <Card color="danger" title={<Link to="/docs/intro" style={{ textDecoration: 'none' }}>📘 文档入门</Link>}>
   *    学习 Docusaurus 的基本概念。
   *   </Card>
   * </CardGrid>
   */
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>

        {/* <CardGrid header="🚀 快速开始">
          <Card color="danger" title={
            <Link to="/docs/intro" style={{ textDecoration: 'none' }}>
              📘 文档入门
            </Link>
          }>
            学习 Docusaurus 的基本概念。
          </Card>

          <Card title="💡 自定义主题" href="/docs/intro">

          </Card>
          <Card title="🔥 RuoYi" href="https://gitee.com/y_project/RuoYi">

          </Card>

          <Card title="🌐 部署到 GitHub Pages">
            只需一条命令即可发布。
          </Card>
        </CardGrid>


        <CardGrid header="🚀 快速开始">
          <Card color="danger" title={
            <Link to="/docs/intro" style={{ textDecoration: 'none' }}>
              📘 文档入门
            </Link>
          }>
            学习 Docusaurus 的基本概念。
          </Card>

          <Card title="💡 自定义主题" href="/docs/intro">

          </Card>
          <Card title="🔥 RuoYi" href="https://gitee.com/y_project/RuoYi">

          </Card>

          <Card title="🌐 部署到 GitHub Pages">
            只需一条命令即可发布。
          </Card>
        </CardGrid>
        <CardGrid >
          <Card color="danger" title={
            <Link to="/docs/intro" style={{ textDecoration: 'none' }}>
              📘 文档入门
            </Link>
          }>
            学习 Docusaurus 的基本概念。
          </Card>

          <Card title="💡 自定义主题" href="/docs/intro">

          </Card>
          <Card title="🔥 RuoYi" href="https://gitee.com/y_project/RuoYi">

          </Card>

          <Card title="🌐 部署到 GitHub Pages">
            只需一条命令即可发布。
          </Card>
        </CardGrid> */}
      </main>
    </Layout>
  );
}
