module.exports = {
    title: 'NetConfChina文档',
    description: '开源',
    base: '/',
    head: [
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: './favicon.ico' }],
        ['script', {}, `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?**************";
              var s = document.getElementsByTagName("script")[0];
              s.parentNode.insertBefore(hm, s);
            })();
        `
        ]
    ],
    evergreen: true,
    port: 8080,
    ga: 'UA-88888888-13',
    themeConfig: {
        repo: 'MLContribution/NetConfChina_Docs',
        docsDir: 'doc',
        editLinks: true,
        editLinkText: '编辑此页面！',
        nav: [
            { text: '指南', link: '/start/home/index' }
        ]
    }
}
