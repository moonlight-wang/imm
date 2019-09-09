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
        text: 'HOME',
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
        key: 'connects us',
        text: 'Connects Us',
        link: '/en-us/docs/connectsus.html',
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
          text: 'Connects Us',
          link: '/en-us/docs/connectsus.html',
        },
        {
          text: 'Join Us',
          link: '/en-us/docs/joinus.html',
        },
      ],
    },
    copyright: 'Copyright © 2019 Integrated Maritime Group Ltd',
  }, 
  'zh-cn': {
    pageMenu: [
      {
        key: 'home',
        text: '首页',
        link: '/zh-cn/index.html',
      },
      {
        key: 'docs',
        text: '文档',
        link: '/zh-cn/docs/demo1.html',
      },
      {
        key: 'blog',
        text: '博客',
        link: '/zh-cn/blog/index.html',
      },
      {
        key: 'community',
        text: '社区',
        link: '/zh-cn/community/index.html',
      },
    ],
    disclaimer: {
      title: '免责声明',
      content: '免责声明的具体内容',
    },
    documentation: {
      title: '文档',
      list: [
        {
          text: '概览',
          link: '/zh-cn/docs/demo1.html',
        },
        {
          text: '快速开始',
          link: '/zh-cn/docs/demo2.html',
        },
        {
          text: '开发者指南',
          link: '/zh-cn/docs/dir/demo3.html',
        },
      ],
    },
    resources: {
      title: '资源',
      list: [
        {
          text: '博客',
          link: '/zh-cn/blog/index.html',
        },
        {
          text: '社区',
          link: '/zh-cn/community/index.html',
        },
      ],
    },
    copyright: 'Copyright © 2018 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  },
};
