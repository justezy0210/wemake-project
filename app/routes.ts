import {
  type RouteConfig,
  index,
  prefix,
  route,
} from '@react-router/dev/routes';

export default [
  index('common/pages/home-page.tsx'),
  ...prefix('products', [
    index('features/products/pages/products-page.tsx'),
    ...prefix('leaderboards', [
      index('features/products/pages/leaderboards-page.tsx'),
      route(
        '/yearly/:year',
        'features/products/pages/yearly-leaderboards-page.tsx'
      ),
      route(
        '/monthly/:year/:month',
        'features/products/pages/monthly-leaderboards-page.tsx'
      ),
      route(
        '/daily/:year/:month/:day',
        'features/products/pages/daily-leaderboards-page.tsx'
      ),
      route(
        '/weekly/:year/:week',
        'features/products/pages/weekly-leaderboards-page.tsx'
      ),
    ]),
    ...prefix('categories', [
      index('features/products/pages/categories-page.tsx'),
      route('/:category', 'features/products/pages/category-page.tsx'),
    ]),
    route('/search', 'features/products/pages/search-page.tsx'),
    route('/submit', 'features/products/pages/submit-page.tsx'),
    route('/promote', 'features/products/pages/promote-page.tsx'),
  ]),
] satisfies RouteConfig;

// routes.ts 파일은 사용자 URL의 위치에 따라 렌더링할 내용을 정의해서  React 라우터에 알려준다.
