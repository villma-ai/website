import Teaser from '@/components/Teaser';

export default function TeaserPage() {
  console.log('NEXT_PUBLIC_SHOW_TEASER - server', process.env.NEXT_PUBLIC_SHOW_TEASER )

  return <Teaser />;
}
