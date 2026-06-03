import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { publications } from "../../../../data/publications";

export async function generateStaticParams() {
  return publications.map((pub) => ({
    ID: pub.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ID: string }>;
}): Promise<Metadata> {
  const { ID } = await params;
  const publication = publications.find((pub) => pub.id === ID);

  if (!publication) {
    return {
      title: "Publication Not Found - ASPIRE Lab",
    };
  }

  return {
    title: `${publication.title} - ASPIRE Lab IIT Hyderabad`,
    description:
      publication.abstract ||
      `Research publication by ${publication.authors} at ${publication.venue}`,
    keywords: [
      "robotics research",
      "research paper",
      "ASPIRE Lab",
      "IIT Hyderabad",
      publication.venue,
    ],
    openGraph: {
      title: publication.title,
      description: publication.abstract || `Research by ${publication.authors}`,
      type: "article",
    },
  };
}

export default async function PublicationDetailPage({
  params,
}: {
  params: Promise<{ ID: string }>;
}) {
  const { ID } = await params;
  const publication = publications.find((pub) => pub.id === ID);

  if (!publication) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Link href="/publications">
        <Button variant="ghost" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Publications
        </Button>
      </Link>

      <Card className="w-full">
        <CardHeader className="text-center border-b pb-6">
          <div className="space-y-3">
            {publication.award && (
              <div className="flex justify-center">
                <Badge variant="default">{publication.award}</Badge>
              </div>
            )}
            <CardTitle className="text-2xl sm:text-3xl leading-snug">
              {publication.title}
            </CardTitle>
            <CardDescription className="text-base">
              {publication.authors}
            </CardDescription>
            <p className="text-sm text-muted-foreground">{publication.venue}</p>
            {publication.doi && (
              <a
                href={`https://doi.org/${publication.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-mono text-primary/70 hover:text-primary hover:underline underline-offset-2"
              >
                doi:{publication.doi}
              </a>
            )}
          </div>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          <div>
            <h2 className="text-base font-semibold uppercase tracking-wide text-muted-foreground mb-3">
              Abstract
            </h2>
            <p className="text-foreground/80 leading-relaxed text-sm">
              {(publication.abstract || "Abstract not available.").replace(
                /^Abstract[—–-]\s*/i,
                "",
              )}
            </p>
          </div>

          {publication.doi && (
            <div className="pt-2 border-t">
              <a
                href={`https://doi.org/${publication.doi}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="gap-2">
                  <ExternalLink className="h-4 w-4" />
                  View Full Article
                </Button>
              </a>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
