import { notFound } from 'next/navigation';
import { infrastructureProjects } from '@/lib/data';
import ProjectDetail from '@/components/ProjectDetail';

export function generateStaticParams() {
  return infrastructureProjects.map((p) => ({ slug: p.slug }));
}

export default function InfrastructureDetailPage({ params }) {
  const project = infrastructureProjects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return <ProjectDetail project={project} backPath="/infrastructure" backLabel="Infrastructure" />;
}
