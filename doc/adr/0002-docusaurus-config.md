# 2. docusaurus config

Date: 2025-10-04

## Status

Accepted

## Context

修改默认的设置

## Decision

### 学习

#### 使用

1. 常用命令

```
# running the development server： http://localhost:3000
yarn run start

# 构建： 生成静态内容
yarn build

# 更新docusaurus版本
yarn install
```

2. 配置
- 配置都在一个地方：docusaurus.config.js
- 里面包含一个config 对象
  - site metadata: title, url, baseUrl, favicon,这些页面使用的常见信息
  - deployment configuration： projectName, organizationName, deploymentBranch, 这些是和部署有关的
  - theme, plugin, preset configuration： 这些通常是npm包
    - 有对应的属性添加： themes, plugins
    - 配置theme/plugin: presets
  - custom configuration: customFields, 给一些需要的字段
- 在Component上使用config:
  ```
  import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
  ...
  const {siteConfig} = useDocusaurusContext();
  const {title, tagline} = siteConfig;
  ```
- Babel配置： Babel是转换JS代码来支持旧浏览器的， JSX -》 JS

3. TypeScript支持

代码会更现代

#### 详细的使用

1. 页面（就是主页）
  - 因为我主要是用markdown的，首页的话可以单独写，比如使用React，当然也可以使用markdown, 参照src下的代码
  - src里面有一个custom.css, 是给主题使用的
2. 路由
   - 如果熟悉Jekyll的话，就知道这里的路由方式：
     - 所有src/pages下的JS文件都会自动转换称web页面
   - 同时推荐按照组件的方式编写，就是pages中只有引用，具体的实现是在组件中，包含组件依赖的样式
3. 文档
   - 独立页面
   - 侧边栏
   - 版本
   - 插件实例
生成的例子：
- example.com  -> from: `src/pages/index.js`
- example.com/docs/intro  -> from: `docs/intro.md`
- example.com/docs/tutorial-basics/...  -> from: `docs/tutorial-basics/...`
- example.com/blog/2021/08/26/welcome  -> from `blog/2021-08-26-welcome/index.md`
- example.com/blog/2021/08/01/mdx-blog-post   -> generated from `blog/2021-08-01-mdx-blog-post.mdx`

4. 如果希望只使用docs， 可以在docs preset部分设置： `routeBasePath: '/',`, 同时设置`blog: false`, 以及在intro.md前面部分， `slug: /`, 但是需要移除index部分, 否则有多个文件route index
5. 页面的头部，提供额外的元数据，但是可选的, permalink - 好像是link的地址
6. 如果使用tag, 可以在头部添加： `tags`


## Consequences

What becomes easier or more difficult to do and any risks introduced by the change that will need to be mitigated.
