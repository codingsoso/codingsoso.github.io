# 1. Setup Docusaurus

Date: 2025-10-03

## Status

Accepted

## Context

记录笔记


## Decision

> 比较了很多的方案，最终选择已知的Docusaurus，后续可以完善

- 可以分类文档
- 支持的格式更多： https://mermaid.js.org/ 
- MarkdownX

## Consequences

> 步骤

1. Install NVM: https://www.nvmnode.com/
2. nvm install: npm, npx, yarn
3. 初始化   
```
npx create-docusaurus@latest codesoso.github.io classic
Typescript
本地测试： yarn, yarn install, yarn serve
commit必要的文件
```
- 使用codingsoso.github.io，如果是其他的访问要带上仓库名称
1. 添加github workflow， 使用yarn的方式部署，参考文档
2. 修改配置

