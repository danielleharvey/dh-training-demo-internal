export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff63e5f9c30b2014d391e6a',
                  title: 'Sanity Studio',
                  name: 'dh-training-demo-internal-studio',
                  apiId: '8e3b01a3-ef0f-48f2-a091-e26630a4420d'
                },
                {
                  buildHookId: '5ff63e5f8f8ea6008d2af446',
                  title: 'Blog Website',
                  name: 'dh-training-demo-internal',
                  apiId: '1b9387b5-3f53-4539-a3c1-8eb86151e24c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/danielleharvey/dh-training-demo-internal',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://dh-training-demo-internal.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
