import Image from "next/image";
import { Store } from "lucide-react";
const TopNavigation = () =>{
    return(
        <header className="flex items-center justify-between p-10 border-b-2">
<Image src={'/shopzlogo.webp'} alt="logo" width="64" height="64" />

            <h1>Top Navigation</h1>
            <div>
<Store  size={10}></Store>
            </div>
            </header>
    )
}

export default TopNavigation;