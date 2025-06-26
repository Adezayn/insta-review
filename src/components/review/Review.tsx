import Image from 'next/image';
import { Card, CardContent } from '../ui/card';

import { ReviewType } from '@/utils/types';

const Review = ({image, reviewerName, vendorName, createdAt, description, rating}: ReviewType) => {
  return (
    <article className="group relative">
      <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
        <CardContent className="p-4">
          <div className="">
            <Image
              src={image}
              alt={vendorName}
              fill
              sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
              priority
              className="rounded w-full object-cover"
            />
            <div className="mt-4 text-center">
              <h2 className="text-lg  capitalize">{reviewerName}</h2>
              <p className="text-muted-foreground  mt-2">
                {createdAt.toString()}
              </p>
            </div>
          </div>
          <p>{description}</p>
          <div>{rating}</div>
        </CardContent>
      </Card>
    </article>
  );
}

export default Review