const SkillCard = ({
  title,
  items,
}: {
  title: string;
  items: { name: string; level: string; value: number }[];
}) => (
  <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/6 rounded-3xl">
    <h3 className="text-xl font-semibold mb-5 text-sky-300">{title}</h3>
    <div className="space-y-5">
      {items.map((item) => (
        <div key={item.name}>
          <div className="flex items-center justify-between gap-4 mb-2">
            <div>
              <p className="font-medium text-white">{item.name}</p>
              <p className="text-sm text-gray-400">{item.level}</p>
            </div>
            <span className="text-sm font-semibold text-sky-300">
              {item.value}%
            </span>
          </div>
          <div className="h-2 rounded-full bg-white/10">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500"
              style={{ width: `${item.value}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SkillCard;
