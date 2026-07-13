import SecondNavigation from "./_navigation-components/SecondNavigation";
import TopNavigation from "./_navigation-components/TopNavigation";

const Navigation = () => {
  return (
    <header className="bg-secondary border-b border-b-gray-100 sticky top-0 z-50 pb-5 ">
      <TopNavigation />
      <SecondNavigation />
    </header>
  );
};

export default Navigation;
