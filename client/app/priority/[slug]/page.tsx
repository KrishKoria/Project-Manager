import ReusablePriorityPage from "@/components/PriorityPage";
import { Priority } from "@/lib/api";

export default function PriorityPage({ params }: { params: { slug: string } }) {
  switch (params.slug) {
    case "urgent":
      return <ReusablePriorityPage priority={Priority.Urgent} />;
    case "high":
      return <ReusablePriorityPage priority={Priority.High} />;
    case "medium":
      return <ReusablePriorityPage priority={Priority.Medium} />;
    case "low":
      return <ReusablePriorityPage priority={Priority.Low} />;
    case "backlog":
      return <ReusablePriorityPage priority={Priority.Backlog} />;
  }
}
