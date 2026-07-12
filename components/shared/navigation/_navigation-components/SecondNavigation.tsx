import Link from "next/link";
import NavigationData from "../../../../public/data/navgiation.json";
const SecondNavigation = () => {
  console.log(NavigationData);
  return (
    <nav className="bg-primary hidden md:block text-white ">
      <div className="container mx-auto flex ">
        {NavigationData.map((nav, index) => (
          <Link
            className="px-4 py-2 rounded hover:bg-gray-100/10 font-bold"
            key={index}
            href={nav.path}
          >
            {nav.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default SecondNavigation;
