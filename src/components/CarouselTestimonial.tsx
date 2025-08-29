import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "photo1.avif",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "photo2.avif",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "photo3.avif",
  },
];

const firstRow = reviews;
const secondRow = reviews;

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-[320px] cursor-pointer overflow-hidden rounded-xl border p-4",
        "shadow-[0px_3px_8px_4px_rgba(0,0,0,0.03)]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full w-[50px] h-[50px] object-cover" width="50" height="50" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-lg font-medium text-black">
            {name}
          </figcaption>
          <p className="text-sm text-gray-500">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-lg text-gray-600">{body}</blockquote>
    </figure>
  );
};

export function CarouselTestimonial() {
  return (
    <div className="relative h-screen w-full overflow-hidden px-4">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">

        <Marquee
          reverse
          vertical
          className="[--duration:20s] flex-col items-center"
        >
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        <Marquee
          vertical
          className="[--duration:20s] flex-col items-center hidden sm:flex"
        >
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        <Marquee
          reverse
          vertical
          className="[--duration:20s] flex-col items-center hidden lg:flex"
        >
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}

