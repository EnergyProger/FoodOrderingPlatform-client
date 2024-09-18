import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-orange-500 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="text-3xl text-white font-bold tracking-tight">
          EatFlow
        </Link>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms of Serivce</Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
