export default {
  'en-us': {
    sidemenu: [
      {
        title: 'Menu',
        children: [
          {
            title: 'About us',
            link: '/en-us/docs/aboutus.html',
          },
          {
            title: 'Services',
            link: '/en-us/docs/services.html',
          },
          {
            title: 'Team',
            link: '/en-us/docs/team.html',
          },
          {
            title: 'Connects',
            link: '/en-us/docs/connects.html',
          },
          {
            title: 'Join Us',
            link: '/en-us/docs/joinus.html',
          }
        ],
      },
    ],
    barText: 'IMM Group',
  },
  'zh-cn': {
    sidemenu: [
      {
        title: '大标题',
        children: [
          {
            title: '示例1',
            link: '/zh-cn/docs/demo1.html',
          },
          {
            title: '示例2',
            link: '/zh-cn/docs/demo2.html',
          },
          {
            title: '目录',
            opened: true,
            children: [
              {
                title: '示例3',
                link: '/zh-cn/docs/dir/demo3.html',
              },
            ],
          },
        ],
      },
    ],
    barText: '文档',
  },
};
