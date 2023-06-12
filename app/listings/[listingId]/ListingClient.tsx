import { categories } from "@/app/components/navbar/Categories";
import { SafeUser, SafeListing } from "@/app/types";
import { Reservation } from "@prisma/client";
import { useMemo } from "react";


interface ListingClientProps {
  reservations?: Reservation[];
  listing: SafeListing & {
    user: SafeUser
  };
  currentUser?: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
  listing,
  currentUser
}) => {

  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category)
  }, [listing.category]);

  return ( 
    <div>
      Listing Client
    </div>
   );
}
 
export default ListingClient;