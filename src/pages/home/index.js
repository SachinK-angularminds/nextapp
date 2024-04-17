import { TooltipProvider } from "@radix-ui/react-tooltip";
import Layout from "../Layout/layout";

export default function HomePage() {
  return (
    <div>
      <Layout>
        <TooltipProvider>
          <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-4">
              <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                Home
              </main>
            </div>
          </div>
        </TooltipProvider>
      </Layout>
    </div>
  );
}
