import { Link, type MetaFunction } from 'react-router';
import { ProductCard } from '~/features/products/components/product-card';
import { IdeaCard } from '~/features/ideas/components/idea-card';
import { Button } from '../components/ui/button';

export const meta: MetaFunction = () => {
  return [
    { title: 'Home | wemake' },
    { name: 'description', content: 'Welcome to WeMake' },
  ];
};

export default function HomePage() {
  return (
    <div className="px-20">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Today's Products
          </h2>
          <p className="text-xl font-light text-foreground">
            The best products made by our community today.
          </p>
        </div>

        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            id={`productId-${index}`}
            name="Product Name"
            description="Product Description"
            commentCount={12}
            viewCount={12}
            upvoteCount={120}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            IdeasGPT
          </h2>
          <p className="text-xl font-light text-foreground">
            Find ideas for your next project.
          </p>
          <Button variant="link" className="p-0 text-lg" asChild>
            <Link to="/ideas">Explore all ideas &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 5 }).map((_, index) => (
          <IdeaCard
            id="ideaId"
            title="A startup that creates an AI-powerd generated personal trainer, delivering customized workout plans and progress tracking and tracking. more details... progress and comments some more details here."
            viewCount={123}
            timeAgo="12 hours ago"
            likeCount={12}
            claimed={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}
