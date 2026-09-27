import { PortfolioHome } from "@/components/portfolio/site";
import { pageMetadata } from "@/lib/seo";
import { ProfileSchema } from "@/components/portfolio/profile-schema";
export const metadata = pageMetadata("en");
export default function Home() {
  return (
    <>
      <ProfileSchema locale="en" />
      <PortfolioHome locale="en" />
    </>
  );
}
