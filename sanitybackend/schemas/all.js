const hero = {
    name: 'hero',
    type: 'document',
      title: 'Hero section',
    fields: [
      {
        name: 'header',
        type: 'string',
        title: 'Header'
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description'
      }
    ]
  }
const project = {
    name: 'project',
    type: 'document',
      title: 'projects section',
    fields: [
      {
        name: 'project',
        type: 'string',
        title: 'Projects'
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description'
      },
      {
        name: 'codeLink',
        type: 'string',
        title: 'Github link'
      },
      {
        name: 'demoLink',
        type: 'string',
        title: 'Demo link'
      },
      {
        name: 'status',
        type: 'boolean',
        title: 'is it done?'
      }
    ]
  }
  const contact = {
    name: 'contact',
    type: 'document',
      title: 'contact section',
    fields: [
      {
        name: 'socialMedia',
        type: 'string',
        title: 'Social media'
      },
      {
        name: 'username',
        type: 'string',
        title: 'Username'
      },
      {
        name: 'link',
        type: 'string',
        title: 'Link'
      }
    ]
  }
  const reviews = {
    name: 'reviews',
    type: 'document',
      title: 'reviews section',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'comment',
        type: 'string',
        title: 'Comment'
      }
    ]
  }
  export {hero,project,contact,reviews};