import { notFound } from 'next/navigation';
import { architectureProjects } from '@/lib/data';
import ProjectDetail from '@/components/ProjectDetail';

export function generateStaticParams() {
  return architectureProjects.map((p) => ({ slug: p.slug }));
}

export default function ArchitectureDetailPage({ params }) {
  const project = architectureProjects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return <ProjectDetail project={project} backPath="/architecture" backLabel="Architecture" />;
}
