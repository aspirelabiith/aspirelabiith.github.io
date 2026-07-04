import { createMetadata } from "@/lib/metadata";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

import { publications } from "../../../data/publications";
import { patents } from "@/data/patents";

export const metadata = createMetadata({
  title: "Publications & Patents - ASPIRE Lab IIT Hyderabad",
  description:
    "Browse research publications, conference papers, and patents from ASPIRE Lab at IIT Hyderabad. Our work covers robotics, autonomous systems, deep learning, computer vision, and control systems published in top-tier conferences and journals.",
  keywords: [
    "robotics publications",
    "research papers",
    "robotics patents",
    "autonomous systems papers",
    "conference papers",
    "IEEE papers",
    "robotics research",
  ],
  path: "/publications",
});

export default function PublicationsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Recent Publications
          </h1>
          <p className="text-muted-foreground">
            Latest research papers and conference proceedings
          </p>
        </div>
        <div className="space-y-3">
          {publications.map((pub, idx) => {
            const year = pub.id.match(/(\d{4})$/)?.[1];
            return (
              <Card
                key={idx}
                className={`transition-shadow hover:shadow-lg${pub.award ? " border-l-4 border-l-primary" : ""}`}
              >
                <CardContent className="pt-5 pb-5">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    {year && (
                      <span className="text-xs font-mono text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                        {year}
                      </span>
                    )}
                    <p className="text-sm text-muted-foreground">
                      {pub.authors}
                    </p>
                    {pub.award && (
                      <Badge variant="default" className="text-xs">
                        {pub.award}
                      </Badge>
                    )}
                  </div>
                  <Link href={`/publications/${pub.id}`} className="group">
                    <p className="font-semibold leading-snug mb-1.5 group-hover:underline underline-offset-2">
                      <em>{pub.title}</em>
                    </p>
                  </Link>
                  <p className="text-sm text-muted-foreground mb-1">
                    {pub.venue}
                  </p>
                  {pub.doi && (
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary/70 hover:text-primary hover:underline underline-offset-2 font-mono"
                    >
                      doi:{pub.doi}
                    </a>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <Separator className="my-8" />

      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Patents</h2>
          <p className="text-muted-foreground">Filed and granted patents</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {patents.map((patent, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle className="text-lg">{patent.title}</CardTitle>
                <CardDescription>{patent.inventors}</CardDescription>
              </CardHeader>
              <CardContent className="text-sm space-y-1">
                <p>App No: {patent.appNo}</p>
                <p>
                  {patent.filedDate
                    ? `Filed Date: ${patent.filedDate}`
                    : `Issue Date: ${patent.issueDate}`}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
