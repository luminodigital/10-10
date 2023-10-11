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
import CollabStatusDsActivities from "../../Components/CollabStatusDsPage/CollabStatusDsActivities/CollabStatusDsActivities";
import CollabStatusCsActivities from "../../Components/CollabStatusCsPage/CollabStatusCsActivities/CollabStatusCsActivities";
import CollabCompletedHeader from "../../Components/CollabCompletedPage/CollabCompletedHeader/CollabCompletedHeader";
import CollabCompletedActivities from "../../Components/CollabCompletedPage/CollabCompletedActivities/CollabCompletedAcctivities";
import CollabCompletedTrackCollab from "../../Components/CollabCompletedPage/CollabCompletedTractCollab/CollabCompletedTrackCollab";

const CollabCompleted = () => {
  return (
    <div>
        <CollabStatusPageHeader/>
        <div className="collab__container__main">
        <CollabCompletedHeader/>

        <div className="collab__main">
            {/* Left Container */}

            <div className="left__main">
            <CollabStatusDetails/>
            <CollabCompletedActivities/>
            </div>

            {/* Right Container */}

            <div className="right__main">
            <DeliveryTime />
            <CollabCompletedTrackCollab/>
            <Support />
            </div>
        </div>
        </div>
    </div>
  );
};

export default CollabCompleted;
