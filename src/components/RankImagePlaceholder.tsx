interface RankImagePlaceholderProps {
  rank: string;
}

export function RankImagePlaceholder({ rank }: RankImagePlaceholderProps) {
  return (
    <div className="w-32 h-32 flex flex-col items-center justify-center bg-gray-100 rounded-lg border-2 border-dashed border-gray-300">
      <div className="text-gray-400 text-center px-4">
        <div className="text-sm font-medium mb-1">Rank Insignia</div>
        <div className="text-xs">{rank}</div>
      </div>
    </div>
  );
}
