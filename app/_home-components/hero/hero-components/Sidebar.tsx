import Link from "next/link";
import sidebarData from "../../../../public/data/sidebarData.json";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  console.log(activeMenu, "active menu");
  const currentCategory = sidebarData.find((c) => c.id === activeMenu);

  console.log(currentCategory, "current");
  return (
    <div
      onMouseLeave={() => setActiveMenu(null)}
      className=" w-1/2 flex flex-col bg-secondary overflow-hidden overflow-y-scroll "
    >
      {sidebarData.map((categories: any, index: number) => (
        <div onMouseEnter={() => setActiveMenu(categories.id)} key={index}>
          {/* Sidebar Category categories Show Done */}
          <Link
            href={categories.title}
            className="flex  p-4 hover:bg-primary/10  hover:text-popover"
          >
            <div className="flex w-full">
              <div>
                <span
                  className="w-5 h-5 [&>svg]:w-5 [&>svg]:h-5"
                  dangerouslySetInnerHTML={{ __html: categories.icon }}
                />
              </div>
              <div>
                <span className="ms-5">{categories.title}</span>
              </div>
              <div className="ml-auto">
                <ChevronRight />
              </div>
            </div>
          </Link>
          {/* Sub Category categories Show */}
          {currentCategory && currentCategory.data && (
            <div className=" absolute left-[40vh] top-0 right-0 bottom-0 bg-secondary z-20   flex p-5">
              <div className="w-full columns-3 space-y-6 gap-6 overflow-y-hidden ">
                {currentCategory?.data?.map((subCaregories: any) => (
                  <div
                    key={subCaregories.id}
                    className="inline-block w-full break-inside-avoid-column mb-6"
                  >
                    <Link
                      href={subCaregories.title}
                      className="text-third text-md font-bold hover:text-popover"
                    >
                      {subCaregories.title}
                    </Link>
                    {subCaregories.data.map((child: any) => (
                      <div key={child.id} className=" py-1">
                        <Link
                          href={subCaregories.title}
                          className="  text-md text-gray-700 hover:text-popover"
                        >
                          {child.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                {" "}
                {/* Keeps your cards stacked in a neat column */}
                <Link
                  href={currentCategory.title}
                  // Added "flex flex-col justify-between" to align content, and "block" or "flex" allows height/width to work
                  className="flex flex-col gap-4  p-4 bg-cover bg-center h-[35vh] w-[35vh] rounded-md"
                  style={{
                    backgroundImage: `url(${currentCategory.image1})`,
                  }}
                >
                  <h1 className="text-secondary text-xl">
                    {currentCategory.title}
                  </h1>
                  {/* Reduced text size slightly; text-5xl inside a small 30vh card might overflow */}
                  <h4 className="font-extrabold text-secondary text-4xl">
                    Up To 70% off
                  </h4>

                  <Button
                    variant={"outline"}
                    // Fixed typo: "fond-bold" changed to "font-bold"
                    className=" font-bold text-secondary text-base bg-popover rounded-md w-fit  p-2 text-2xl cursor-pointer "
                  >
                    Shop Now
                  </Button>
                </Link>
                <Link
                  href={currentCategory.title}
                  // Added "flex flex-col justify-between" to align content, and "block" or "flex" allows height/width to work
                  className="flex flex-col gap-4  p-4 bg-cover bg-center h-[35vh] w-[35vh] rounded-md"
                  style={{
                    backgroundImage: `url(${currentCategory.image2})`,
                  }}
                >
                  <h1 className="text-secondary text-xl">
                    Fast & Free Shipping
                  </h1>
                  {/* Reduced text size slightly; text-5xl inside a small 30vh card might overflow */}
                  <h4 className="font-extrabold text-secondary text-5xl">
                    Fresh Deals Arrive
                  </h4>

                  <Button
                    variant={"outline"}
                    // Fixed typo: "fond-bold" changed to "font-bold"
                    className=" font-bold text-secondary text-base bg-popover rounded-md w-fit p-2   text-2xl cursor-pointer "
                  >
                    Get It Today
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
