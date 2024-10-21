import { Link } from "react-router-dom";
import CommentsSection from "./CommentsSection";
import RequestDescription from "./RequestDescription";
import RequestDetailsSidebar from "./RequestDetailsSidebar";

const RequestDetails = () => {
  
  return (
    <div className="m-8 grid grid-cols-13 gap-4">
      <div className="col-span-7">
        <RequestDescription />

        <div className="mt-4">
          <Link to="/voluntary-organizations">
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
              Request Voluntary Organizations
            </button>
          </Link>
        </div>

        <CommentsSection />
      </div>
    </div>
  );
};

export default RequestDetails;
