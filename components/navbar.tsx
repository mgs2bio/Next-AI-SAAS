

import { MobileSidebar } from "@/components/mobile-sidebar";


const Navbar = async () => {
  const apiLimitCount = 20;
  const isPro = true;

  return ( 
    <div className="flex items-center p-4">
      <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      <div className="flex w-full justify-end">

      </div>
    </div>
   );
}
 
export default Navbar;