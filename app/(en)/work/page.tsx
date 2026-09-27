import { ProjectIndex } from "@/components/portfolio/site";
import { archiveMetadata } from "@/lib/archive-metadata";
export const metadata = archiveMetadata("en");
export default function Page() {
  return <ProjectIndex locale="en" />;
}
