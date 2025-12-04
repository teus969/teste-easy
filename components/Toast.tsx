import React, { useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-[slideIn_0.5s_ease-out]">
      <div className="bg-white/10 backdrop-blur-md border border-fuchsia-500/50 text-white px-6 py-4 rounded-xl shadow-[0_0_20px_rgba(192,38,211,0.3)] flex items-center gap-3">
        <div className="bg-fuchsia-500 rounded-full p-1">
          <CheckCircle className="w-4 h-4 text-white" />
        </div>
        <span className="font-medium">{message}</span>
        <button 
          onClick={onClose}
          className="ml-2 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Toast;