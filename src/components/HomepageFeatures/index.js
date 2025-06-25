import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'TemPlaza Framework',
      png: require('@site/static/img/framework.png').default,
    description: (
      <>
          We’re so pleased to introduce TemPlaza Framework WordPress plugin which plays an important role in creating footer, header template layout for archive, single of post or custom post type.
      </>
    ),
  },
  {
    title: 'Advanced Product',
      png: require('@site/static/img/adv.png').default,
    description: (
      <>
          Advanced Products is a WordPress plugin that allows you to create different products containing extra content fields. Showcasing your beautiful product collection in attractive listing layouts.

      </>
    ),
  },
  {
    title: 'WordPress Theme',
      png: require('@site/static/img/wordpress-theme.png').default,
    description: (
      <>
          Here you can easily find well-designed and featured-rich WordPress themes that provide you with better flexibility, and advanced tools that you can utilize to customize your website, so as to increase your website’s functionality.
      </>
    ),
  },
];
const FeatureThemeList = [
  {
    theme_title: 'AutoShowroom',
    theme_url: 'https://templaza.com/theme-landing/auto-showroom-car-dealership-wordpress-theme.html',
      theme_png: require('@site/static/img/theme-autoshowroom.png').default,
      theme_description: (
      <>
          Automotive, Vehicles & Car Dealership
      </>
    ),
  },
  {
      theme_title: 'Travelami',
      theme_url: 'https://templaza.com/theme-landing/travelami.html',
      theme_png: require('@site/static/img/theme-travelami.png').default,
      theme_description: (
      <>
          Travel, Tour Booking & Agency
      </>
    ),
  },
  {
      theme_title: 'Amanus',
      theme_url: 'https://templaza.com/theme-landing/amanus.html',
      theme_png: require('@site/static/img/theme-amanus.png').default,
      theme_description: (
      <>
          Yacht Charter, Sailing & Boat
      </>
    ),
  },
  {
      theme_title: 'Autobike',
      theme_url: 'https://templaza.com/theme-landing/autobike.html',
      theme_png: require('@site/static/img/theme-autobike.png').default,
      theme_description: (
      <>
          Automotive, Vehicles & Motorbike
      </>
    ),
  },
  {
      theme_title: 'Aventura',
      theme_url: 'https://templaza.com/theme-landing/aventura-travel-tour-booking-system-wordpress-theme.html',
      theme_png: require('@site/static/img/theme-aventura.png').default,
      theme_description: (
      <>
          Agency, Travel & Tour Booking
      </>
    ),
  },
  {
      theme_title: 'Interiart',
      theme_url: 'https://templaza.com/theme-landing/interiart.html',
      theme_png: require('@site/static/img/theme-interiart.png').default,
      theme_description: (
      <>
          Architecture, Interior, Decor & Construction
      </>
    ),
  },
];
const HeadingList = [
    {
        heading: 'FEATURED THEMES',
    },
];
function Feature({png, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={png} alt="{title}" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}
function FeatureTheme({theme_png,theme_url, theme_title, theme_description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center heading-theme">
          <a href={theme_url}><img src={theme_png} alt="{title}" /></a>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{theme_title}</Heading>
        <p>{theme_description}</p>
      </div>
    </div>
  );
}
function FeatureHeading({heading}) {
  return (
      <div className={clsx('col col--12')}>
          <div className="text--center">
            <Heading as="h2">{heading}</Heading>
          </div>
      </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row tz-feature">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      <div className="row tz-heading-center tz-heading-title">
          {HeadingList.map((props, idx) => (
              <FeatureHeading key={idx} {...props} />
          ))}
      </div>
      <div className="row tz-heading-center tz-heading-theme">
          {FeatureThemeList.map((props, idx) => (
              <FeatureTheme key={idx} {...props} />
          ))}
      </div>
      </div>
    </section>
  );
}
