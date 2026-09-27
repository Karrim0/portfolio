import { ProjectIndex } from "@/components/portfolio/site";
import { archiveMetadata } from "@/lib/archive-metadata";
export const metadata = archiveMetadata("ar");
export default function Page() {
  return <ProjectIndex locale="ar" />;
}
