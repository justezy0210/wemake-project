import { LoaderFunctionArgs, ActionFunctionArgs } from 'react-router';
import { loader } from '../../../../features/products/pages/yearly-leaderboards-page';

export namespace Route {
  export type LoaderArgs = LoaderFunctionArgs;
  export type ActionArgs = ActionFunctionArgs;
  export type MetaArgs = any;
  export type ComponentProps = {
    loaderData: ReturnType<typeof loader>;
  };
}
