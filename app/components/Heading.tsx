"use client";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-2xl">{title}</div>
      <div className="text-lg text-teal">{subtitle}</div>
    </div>
  );
};

export default Heading;
