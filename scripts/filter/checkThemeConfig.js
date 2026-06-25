'use strict';

hexo.extend.filter.register('before_post_render', () => {
    const data = hexo.locals.get('data');
    const logger = hexo.log;
    const theme = hexo.theme.config;
    if (theme.logs.enable && !data.logs) {
        logger.error('\n 启用即刻短文的情况下，请新建 logs.yaml。');
        logger.error('\n If logs is enabled, logs data must be supplied! \n Please create logs.yaml.');
        process.exit(-1);
    }
    if (theme.footer.randomlink && !data.links) {
        logger.error('\n 启用随机链接的情况下，请新建 links.yaml。');
        logger.error('\n If randomlink is enabled, links data must be supplied! \n Please create links.yaml.');
        process.exit(-1);
    }
}
);
