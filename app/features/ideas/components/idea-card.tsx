import { Link } from 'react-router';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/common/components/ui/card';
import { Button } from '~/common/components/ui/button';
import { DotIcon, EyeIcon, HeartIcon, LockIcon } from 'lucide-react';
import { cn } from '~/lib/utils';

interface IdeaCardProps {
  id: string;
  title: string;
  viewCount: number;
  timeAgo: string;
  likeCount: number;
  claimed: boolean;
}

export function IdeaCard({
  id,
  title,
  viewCount,
  timeAgo,
  likeCount,
  claimed,
}: IdeaCardProps) {
  return (
    <Card className="bg-transparent hover:bg-card/50 transition-colors">
      <CardHeader>
        <Link to={`/ideas/${id}`}>
          <CardTitle className="text-xl">
            <span
              className={cn(
                claimed
                  ? 'bg-muted-foreground selection:bg-muted-foreground text-muted-foreground'
                  : ''
              )}>
              {title}
            </span>
          </CardTitle>
        </Link>
      </CardHeader>
      <CardContent className="flex items-center text-sm">
        <div className="flex items-center gap-2">
          <EyeIcon className="h-4 w-4" />
          <span>{viewCount}</span>
        </div>
        <DotIcon className="h-4 w-4" />
        <span>{timeAgo}</span>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline">
          <HeartIcon className="h-4 w-4" />
          <span>{likeCount}</span>
        </Button>
        {!claimed ? (
          <Button variant="default" asChild>
            <Link to={`/ideas/${id}/claim`}>Claim idea now &rarr;</Link>
          </Button>
        ) : (
          <Button variant="outline" disabled className="cursor-not-allowed">
            <LockIcon className="size-4" />
            Claimed
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
