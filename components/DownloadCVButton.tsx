'use client'; 

import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button'; 

export default function DownloadCVButton() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv-hajar.pdf';
    link.download = 'CV_Hajar.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 glow-button text-lg px-8 py-3"
    >
      <Download className="h-4 w-4" />
      Download my CV
    </Button>
  );
}