interface MedalProps {
  position: number;
  color: 'gold' | 'silver' | 'bronze';
}

export function Medal({ position, color }: MedalProps) {
  const colorClasses = {
    gold: 'text-yellow-900 bg-yellow-100 border-yellow-500',
    silver: 'text-gray-700 bg-gray-100 border-gray-400',
    bronze: 'text-orange-900 bg-orange-100 border-orange-500'
  };

  return (
    <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center font-semibold ${colorClasses[color]}`}>
      {position}
    </div>
  );
}
