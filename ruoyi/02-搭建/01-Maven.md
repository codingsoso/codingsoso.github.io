---
title: Maven
slug: /02/maven
---

## 初始化

### 脚手架

1. 版本 revision, 简单的工程可以使用时间代表

   ```
     <groupId>com.codingsoso</groupId>
     <artifactId>soso</artifactId>
     <version>${revision}</version>
     <packaging>pom</packaging>
     <name>${project.artifactId}</name>
     <description>soso</description>
   
     <properties>
       <revision>2025.10-SNAPSHOT</revision>
       <!-- Maven -->
     </properties>
   ```

2. 加速

   ```
    <!-- 使用 huawei / aliyun 的 Maven 源，提升下载速度 -->
       <repositories>
           <repository>
               <id>huaweicloud</id>
               <name>huawei</name>
               <url>https://mirrors.huaweicloud.com/repository/maven/</url>
           </repository>
           <repository>
               <id>aliyunmaven</id>
               <name>aliyun</name>
               <url>https://maven.aliyun.com/repository/public</url>
           </repository>
   
           <repository>
               <id>spring-milestones</id>
               <name>Spring Milestones</name>
               <url>https://repo.spring.io/milestone</url>
               <snapshots>
                   <enabled>false</enabled>
               </snapshots>
           </repository>
           <repository>
               <id>spring-snapshots</id>
               <name>Spring Snapshots</name>
               <url>https://repo.spring.io/snapshot</url>
               <releases>
                   <enabled>false</enabled>
               </releases>
           </repository>
       </repositories>
   ```

3. 使用spotless格式化代码