const strapi = require('@strapi/strapi');

// createStrapi에 옵션 객체로 distDir 넘겨주면 됨
strapi.createStrapi({
  distDir: './dist', // 빌드된 파일들이 있는 디렉토리
}).start();