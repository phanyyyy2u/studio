"use client";

import { Dialog, DialogContent } from "./ui/dialog";


interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
  videoType?: 'youtube' | 'facebook';
}

export default function VideoModal({ isOpen, onClose, videoId, videoType = 'youtube' }: VideoModalProps) {
  if (!isOpen) return null;

  let src = '';
  let title = '';
  if (videoType === 'facebook') {
    src = videoId;
    title = 'Facebook video player';
  } else {
    src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    title = 'YouTube video player';
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 bg-black border-0">
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={src}
            title={title}
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
}
