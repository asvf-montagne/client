export const navItems = [
  {
    type: 'links',
    items: [
      {
        title: 'Le Club',
        url: '/club',
        items: [
          {
            title: 'nouveau ?',
            links: [
              {
                label: 'Presentation du club',
                url: '/',
              },
              {
                label: "Ecole d'escalade",
                url: '/',
              },
              {
                label: "Le mur d'escalade",
                url: '/',
              },
              {
                label: 'Inscription au club',
                url: '/',
              },
            ],
          },
          {
            title: 'adhérent',
            links: [
              {
                label: 'Prochaines sorties',
                url: '/',
              },
              {
                label: 'reglement interieur',
                url: '/',
              },
              {
                label: 'Location materiel',
                url: '/',
              },
              {
                label: 'COVID-19',
                url: '/',
              },
            ],
          },
        ],
      },
      {
        title: 'Récits',
        url: '/stories',
      },
      {
        title: 'Contact',
        url: '/contact',
      },
    ],
  },
  {
    type: 'actions',
    items: [
      {
        title: 'Connexion',
        url: '/auth/sign-in',
      },
      {
        title: 'Inscription',
        url: '/auth/sign-up',
      },
    ],
  },
]
