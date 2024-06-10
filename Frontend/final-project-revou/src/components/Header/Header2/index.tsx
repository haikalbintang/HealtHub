interface Header2Props {
  text: string;
}

export default function Header2({ text }: Header2Props) {
  return (
    <>
      <h2 className="text-base">&mdash;&mdash;&mdash;</h2>
      <h2 className="text-base text-slate-700">{text}</h2>
      <h2 className="text-base">&mdash;&mdash;&mdash;</h2>
    </>
  );
}
