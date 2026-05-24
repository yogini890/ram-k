import { notFound } from 'next/navigation';
import { pmcProjects } from '@/lib/data';
import ProjectDetail from '@/components/ProjectDetail';

export function generateStaticParams() {
  return pmcProjects.map((p) => ({ slug: p.slug }));
}

export default function PMCDetailPage({ params }) {
  const project = pmcProjects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return <ProjectDetail project={project} backPath="/pmc" backLabel="PMC" />;
}
