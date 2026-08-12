// Mega-menu structure mirroring every page on the current stevenswater.com
// (extracted from the live site's sitemap). Info pages route to /page/<slug>.
const p = (title, slug) => ({ title, slug })

export const MENU = [
  {
    label: 'Products',
    wide: true,
    hasImage: true,
    columns: [
      {
        heading: 'Shop by Category',
        links: [
          { title: 'Soil Monitoring', to: '/shop?cat=Soil%20Monitoring' },
          { title: 'Water Level', to: '/shop?cat=Water%20Level' },
          { title: 'Weather', to: '/shop?cat=Weather' },
          { title: 'Telemetry', to: '/shop?cat=Telemetry' },
          { title: 'Chart Recorders', to: '/shop?cat=Chart%20Recorders' },
          { title: 'Power & Accessories', to: '/shop?cat=Power%20%26%20Accessories' },
          { title: 'Accessories', to: '/shop?cat=Accessories' },
          { title: 'View All Products', to: '/shop' },
        ],
      },
    ],
  },
  {
    label: 'Applications',
    columns: [
      {
        heading: 'Application Areas',
        links: [
          p('Soil Monitoring', 'applications/soil-monitoring'),
          p('Water Resource Management', 'applications/water-resource-management'),
          p('Weather Monitoring', 'applications/weather-monitoring'),
          p('All Applications', 'applications'),
        ],
      },
      {
        heading: 'Platform',
        links: [
          p('Stevens M2M®', 'm2m'),
          p('Client Profiles', 'client-profiles'),
        ],
      },
    ],
  },
  {
    label: 'Company',
    columns: [
      {
        heading: 'Stevens',
        links: [
          p('About Us', 'about-us'),
          p('Employment Opportunities', 'employment-opportunities'),
          p('Privacy Policy', 'privacy-policy'),
        ],
      },
      {
        heading: 'Get in Touch',
        links: [p('Contact', 'contact')],
      },
    ],
  },
  {
    label: 'News & Articles',
    columns: [
      {
        heading: 'Learn',
        links: [
          p('Video Library', 'video-library'),
          p('Glossary', 'glossary'),
          p('Client Profiles', 'client-profiles'),
        ],
      },
      {
        heading: 'Connect',
        links: [
          p('Distributors', 'distributors'),
          p('Conferences & Events', 'conferences-events'),
          p('Tradeshow', 'tradeshow'),
        ],
      },
    ],
  },
  {
    label: 'Support',
    to: '/contact',
  },
]

// slug -> display title map for the info-page shell
export const PAGE_TITLES = {}
for (const item of MENU) {
  for (const col of item.columns || []) {
    for (const l of col.links) if (l.slug) PAGE_TITLES[l.slug] = l.title
  }
}
