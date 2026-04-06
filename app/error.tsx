"use client";

import { useEffect } from "react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[50vh] items-center justify-center py-16">
      <Container>
        <div className="mx-auto max-w-md text-center">
          <h1 className="font-heading text-2xl font-bold text-foreground">
            Something went wrong
          </h1>
          <p className="mt-3 text-muted-foreground">
            We apologize for the inconvenience. Please try again, or contact us
            directly if the problem persists.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button onClick={reset}>Try again</Button>
            <Button variant="outline" asChild>
              <a href="tel:8312622847">Call (831) 262-2847</a>
            </Button>
          </div>
          {error.digest && (
            <p className="mt-6 font-mono text-xs text-muted-foreground">
              Error ID: {error.digest}
            </p>
          )}
        </div>
      </Container>
    </div>
  );
}
