export default function AdSlot({ type = 'leaderboard', className = '' }: { type?: 'leaderboard' | 'sidebar' | 'in-article', className?: string }) {
  const heights = {
    'leaderboard': 'h-[90px] md:h-[120px]',
    'sidebar': 'h-[600px]',
    'in-article': 'h-[250px] md:h-[300px]'
  };

  return (
    <div className={`ad-wrapper ${heights[type]} ${className}`}>
      <div className="ad-label">Advertisement - {type}</div>
      <div className="flex-1 flex items-center justify-center text-[10px] text-slate-700 font-bold uppercase tracking-widest italic">
        AdSense Unit {type === 'leaderboard' ? '728x90' : type === 'sidebar' ? '300x600' : 'Rectangle'}
      </div>
    </div>
  );
}
