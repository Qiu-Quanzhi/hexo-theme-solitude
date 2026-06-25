hexo.extend.filter.register(
  "before_generate",
  () => {
    const defaultConfig = {
      site: {
        name: {
          class: "text",
          custom: "Solitude-Kai",
        },
        icon: "/img/logo.png",
      },
      nav: {
        group: null,
        menu: null,
        right: {
          custom: [],
        },
      },
      aside: {
        home: { noSticky: "about", Sticky: "allInfo" },
        post: { noSticky: "about", Sticky: "newestPost" },
        page: { noSticky: "about", Sticky: "newestPost,allInfo" },
        position: 1,
        my_card: {
          author: {
            img: "/img/logo.png",
            sticker: null,
            url: "/about/",
          },
          state: {
            morning: "✨ 早上好，新的一天开始了",
            noon: "🍃 午休时间",
            afternoon: "🌞 下午好",
            night: "🌙 晚上好，早点休息",
            goodnight: "🔮 晚安",
          },
          witty_words: [],
          information: null,
        },
        toc: { post: true, page: false, vague: true },
        tags: { enable: false, limit: 20, highlight_list: [] },
        archive: { enable: true, type: "year" },
        siteinfo: {
          postcount: false,
          wordcount: true,
          updatetime: true,
          runtimeenable: true,
          runtime: "2023-06-30 00:00:00",
        },
      },
      page: {
        error: true,
        tags: true,
        categories: true,
        archives: 0,
        default: { cover: [] },
      },
      post: {
        default: {
          cover: [],
          locate: "地球",
          copyright: {
            enable: true,
            author: {
              url: "/about/",
              img: null,
            },
            license: "CC BY-NC-ND 4.0",
            licenseUrl: "https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh-hans",
          },
        },
        ai: {
          enable: false,
          modelName: "小七 GPT",
        },
        meta: {
          date: true,
          updated: true,
          locate: true,
          wordcount: true,
        },
        rss: null,
        covercolor: {
          enable: false,
          mode: "local",
          api: null,
          time: 43200000,
        },
        footer: {
          enable: false,
          desc: null,
          button: {
            enable: true,
            name: null,
            url: "/about/",
          },
        },
      },
      theme_color: {
        dark: "#66ccff",
        light: "#66ccff",
      },
      display_mode: {
        type: "auto",
      },
      font: {
        "font-size": "16px",
        "font-family": "PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif",
        "code-font-size": "16px",
        "code-font-family": 'ui-monospace,SFMono-Regular,"SF Mono",Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
      },
      index_post_list: {
        direction: "row",
        cover: "both",
        content: 2,
        length: 200,
      },
      mermaid: false,
      chart: false,
      console: {
        enable: false,
        card: {
          tags: true,
          archive: "year",
        },
      },
      footer: {
        information: {
          author: false,
          left: null,
          right: null,
        },
        group: null,
        randomlink: false,
        beian: [],
        links: [],
      },
      errorpage: {
        img: "/img/404.avif",
        text: "=awa= 页面走丢啦",
        recommendList: false,
      },
      logs: {
        enable: false,
        home_mini: false,
        page: "/logs/",
        style: 1,
        strip: 30,
      },
      lazyload: {
        enable: true,
        field: "site",
        placeholder: "",
        errorimg: "/img/error_load.avif",
      },
      loading: {
        fullpage: false,
        favicon: "/img/favicon.png",
        pace: true,
      },
      highlight: {
        enable: true,
        limit: 200,
        copy: true,
        expand: true,
        theme: "default",
        color: "default",
      },
      OpenGraph: {
        enable: true,
        options: {},
      },
      wordcount: false,
      katex: {
        enable: true,
        per_page: false,
        copytex: true,
      },
      verify_site: [],
      css_prefix: false,
      extends: {
        head: [],
        body: [],
      },
      CDN: {
        internal: "local",
        third_party: "custom",
        version: true,
        custom_format: "https://cdn.jsdelivr.net/npm/${name}@${version}/${min_file}",
        options: {},
      },
    };

    hexo.theme.config = { ...defaultConfig, ...hexo.theme.config };
  },
  1
);
