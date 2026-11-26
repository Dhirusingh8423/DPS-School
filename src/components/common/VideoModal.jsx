import React from 'react';
import { X } from 'lucide-react';

export default function VideoModal({ isOpen, onClose, videoId = '7WsmLQaGXM8' }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 bg-brand-navy/80 text-white rounded-full hover:bg-brand-royal transition-colors"
          aria-label="Close video"
        >
          <X size={20} />
        </button>

        {/* Video Frame */}
        <div className="relative aspect-video w-full bg-slate-900">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="DPS International Academy Campus Tour"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
