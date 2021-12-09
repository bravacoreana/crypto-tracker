import { Helmet } from "react-helmet";

interface HelmetProps {
  title: string;
}

export default function HelmetTitle({ title }: HelmetProps) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}
