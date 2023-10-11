import Activities from "../../Components/CollabPage/Activities/Activities";
import CollabHeader from "../../Components/CollabPage/CollabHeader/CollabHeader";
import Details from "../../Components/CollabPage/Details/Details";
import Support from "../../Components/CollabPage/Support/Support";
import TrackCollab from "../../Components/CollabPage/TrackCollab/TrackCollab";
import DeliveryTime from "../../Components/CollabPage/DeliveryTime/DeliveryTime";
import "../Collab.css";
import CollabStatusPageHeader from "../../Components/CollabStatusPage/CollabStatusPageHeader/CollabStatusPageHeader";
import CollabStatusHeader from "../../Components/CollabStatusPage/CollabStatusHeader/CollabStatusHeader";
import CollabStatusDetails from "../../Components/CollabStatusPage/CollabStatusDetails/CollabStatusDetails";
import CollabStatusActivities from "../../Components/CollabStatusPage/CollabStatusActivities/CollabStatusActivities";

const CollabStatus = () => {
  return (
    <div>
        <CollabStatusPageHeader/>
        <div className="collab__container__main">
        <CollabStatusHeader/>

        <div className="collab__main">
            {/* Left Container */}

            <div className="left__main">
            <CollabStatusDetails/>
            <CollabStatusActivities/>
            </div>

            {/* Right Container */}

            <div className="right__main">
            <DeliveryTime />
            <TrackCollab />
            <Support />
            </div>
        </div>
        </div>
    </div>
  );
};

export default CollabStatus;
