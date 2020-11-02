// 全局的一些配置
export default {
  rootPath: '', // 发布到服务器的根目录，需以/开头但不能有尾/，如果只有/，请填写空字符串
  port: 8080, // 本地开发服务器的启动端口
  domain: 'dubbo.apache.org', // 站点部署域名，无需协议和path等
  defaultSearch: 'google', // 默认搜索引擎，baidu或者google
  defaultLanguage: 'en-us',
  'en-us': {
    pageMenu: [
      {
        key: 'home', // 用作顶部菜单的选中
        text: 'Home',
        link: '/en-us/index.html',
      },
      {
        key: 'about us',
        text: 'About Us',
        link: '/en-us/docs/aboutus.html',
      },
      {
        key: 'services',
        text: 'Services',
        link: '/en-us/docs/services.html',
      },
      {
        key: 'team',
        text: 'Team',
        link: '/en-us/docs/team.html',
      },
      {
        key: 'contact us',
        text: 'Contact Us',
        link: '/en-us/docs/contactus.html',
      },
      {
        key: 'join us',
        text: 'Join Us',
        link: '/en-us/docs/joinus.html',
      },
    ],
    disclaimer: {
      title: 'Disclaimer',
      content: 'the disclaimer content',
    },
    resources: {
      title: 'Links',
      list: [
        {
          text: 'Contact Us',
          link: '/en-us/docs/contactus.html',
        },
        {
          text: 'Join Us',
          link: '/en-us/docs/joinus.html',
        },
      ],
    },
    copyright: 'Copyright © 2020 Integrated Maritime Group Ltd',
  },
  'zh-cn': {
    pageMenu: [
      {
        key: '首页', // 用作顶部菜单的选中
        text: '首页',
        link: '/zh-cn/index.html',
      },
      {
        key: '关于我们',
        text: '关于我们',
        link: '/zh-cn/docs/aboutus.html',
      },
      {
        key: '服务',
        text: '服务',
        link: '/zh-cn/docs/services.html',
      },
      {
        key: '团队',
        text: '团队',
        link: '/zh-cn/docs/team.html',
      },
      {
        key: '联系我们',
        text: '联系我们',
        link: '/zh-cn/docs/contactus.html',
      },
      {
        key: '加入我们',
        text: '加入我们',
        link: '/zh-cn/docs/joinus.html',
      },
    ],
    disclaimer: {
      title: 'Disclaimer',
      content: 'the disclaimer content',
    },
    resources: {
      title: '链接',
      list: [
        {
          text: '联系我们',
          link: '/zh-cn/docs/contactus.html',
        },
        {
          text: '加入我们',
          link: '/zh-cn/docs/joinus.html',
        },
      ],
    },
    copyright: 'Copyright © 2020 Integrated Maritime Group Ltd',
  },
};
