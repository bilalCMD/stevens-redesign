// Mega-menu structure mirroring every page on the current stevenswater.com
// (extracted from the live site's sitemap). Info pages route to /page/<slug>.
const p = (title, slug) => ({ title, slug })

export const MENU = [
  {
    label: 'Products',
    wide: true,
    tabbed: true,
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
        links: [{ title: 'Contact Us', to: '/contact' }],
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
