import { createMetadata } from "@/lib/metadata";
import { newsItems } from "@/data/news";
import Link from "next/link";

export const metadata = createMetadata({
  title: "News - ASPIRE Lab IIT Hyderabad",
  description:
    "Latest news, publications, awards, and opportunities from ASPIRE Lab at IIT Hyderabad.",
  keywords: ["ASPIRE Lab news", "robotics lab updates", "IIT Hyderabad news"],
  path: "/news",
});

export default function NewsPage() {
  const sortedItems = [...newsItems].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="space-y-1 sm:space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold">News</h1>
        <p className="text-sm sm:text-base text-muted-foreground">
          Latest updates, publications, awards, and opportunities from ASPIRE
          Lab
        </p>
      </div>

      <div className="space-y-4 sm:space-y-6">
        {sortedItems.map((item) => (
          <div
            key={item.id}
            className="bg-card rounded-xl p-6 border border-border/50 hover:border-border transition-all hover:shadow-lg"
          >
            <div className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                <h2 className="text-xl font-semibold flex-1">
                  {item.link ? (
                    <Link
                      href={item.link}
                      className="hover:text-primary transition-colors"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    item.title
                  )}
                </h2>
                <time className="text-sm text-muted-foreground whitespace-nowrap">
                  {new Date(item.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </div>
              <p
                className="text-muted-foreground leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
              {item.link && (
                <Link
                  href={item.link}
                  className="text-sm text-primary font-semibold"
                >
                  Learn more
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
