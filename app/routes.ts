import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [index('routes/home.tsx')] satisfies RouteConfig;

// routes.ts 파일은 사용자 URL의 위치에 따라 렌더링할 내용을 정의해서  React 라우터에 알려준다.
