"use client";
import { usePathname } from 'next/navigation';
import Teaser from './Teaser';

interface TeaserSwitchProps {
  children: React.ReactNode;
}

export default function TeaserSwitch({ children }: TeaserSwitchProps) {
  const pathname = usePathname();
  const showTeaser = process.env.NEXT_PUBLIC_SHOW_TEASER === 'true';

  if (showTeaser && pathname !== '/privacy') {
    return <Teaser />;
  }
  return <>{children}</>;
} 