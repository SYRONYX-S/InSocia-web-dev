import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

// SEO component for consistent metadata across pages
export const SEO = ({
  title,
  description,
  keywords = [],
  image,
  url,
  author = 'InSocia Development Consultancy',
  twitterUsername = '@insocia',
  children,
}) => {
  const siteUrl = 'https://insocia.in';
  const siteTitle = 'InSocia Development Consultancy';
  const siteDescription = 'Creating equitable societies through innovative policy approaches and rigorous research.';
  
  const metaDescription = description || siteDescription;
  const metaImage = image ? `${siteUrl}${image}` : `${siteUrl}/images/og-image.jpg`;
  const metaUrl = url ? `${siteUrl}${url}` : siteUrl;
  
  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={title}
      titleTemplate={`%s | ${siteTitle}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: keywords.join(', '),
        },
        {
          property: 'og:title',
          content: `${title} | ${siteTitle}`,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: metaUrl,
        },
        {
          property: 'og:image',
          content: metaImage,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:creator',
          content: twitterUsername,
        },
        {
          name: 'twitter:title',
          content: `${title} | ${siteTitle}`,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'twitter:image',
          content: metaImage,
        },
        {
          name: 'author',
          content: author,
        },
      ]}
    >
      {children}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
  url: PropTypes.string,
  author: PropTypes.string,
  twitterUsername: PropTypes.string,
  children: PropTypes.node,
};

export default SEO; 