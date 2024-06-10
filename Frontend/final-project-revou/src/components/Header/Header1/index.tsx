interface Header1Props {
  h1: string;
  desc: string;
}

export default function Header1({ h1, desc }: Header1Props) {
  return (
    <div className="p-5 pb-0">
      <h1 className="text-3xl font-bold text-slate-800">{h1}</h1>
      <p className="text-slate-700">{desc}</p>
    </div>
  );
}
