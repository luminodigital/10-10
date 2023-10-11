import { useState } from "react";
import "../../CollabPage/Activities/Activities.css";
import ActivityHeader from "../../CollabPage/Activities/ActivityHeader/ActivityHeader";
import ActivityStatus from "../../CollabPage/Activities/ActivityStatus/ActivityStatus";
import ReceiverMessage from "../../CollabPage/Activities/ReceiverMessage/ReceiverMessage";
import SenderMessage from "../../CollabPage/Activities/SenderMessage/SenderMessage";
import TypeMessage from "../../CollabPage/Activities/TypeMessage/TypeMessage";
import Draft from "../../CollabPage/Activities/Draft/Draft";
import Collab from "../../CollabPage/Activities/Collab/Collab";
import Feedback from "../../CollabPage/Activities/Feedback/Feedback";

const CollabCompletedActivities = () => {
  const [showActivity, setShowActivity] = useState(true);

  return (
    <div className="activities__container">
      <ActivityHeader
        showActivity={showActivity}
        setShowActivity={setShowActivity}
      />

      {/* Main Container */}
      {showActivity && (
        <div className="activities__main">
          <ActivityStatus
            title="Sean Kim started the collab"
            date="Aug 24, 8.04 PM"
          />
          <ReceiverMessage
            date="9:07 PM Read"
            message="Hi there! I heard you're looking for a musician. I'd love to collaborate with you! What kind of project are you working on?"
            isLove={true}
          />
          <SenderMessage
            date="9:10 PM"
            message=" Hey Sean Kim! Glad you reached out. I'm working on a short film and need an original soundtrack. Are you experienced in composing for films?"
            isLove={false}
          />
          <ReceiverMessage
            date="9:15 PM React"
            message="Absolutely, Bob! I've composed for various short films and commercials. I'd be happy to create a unique soundtrack tailored to your film's mood and theme."
            isLove={false}
          />
          <SenderMessage
            date="9:22 PM"
            message="That's great to hear! I want the soundtrack to be emotional and uplifting. Can you share some of your previous work or demos?"
            isLove={false}
          />

          <ReceiverMessage
            date="9:15 PM Sent"
            message="Of course! I'll send you a link to my portfolio"
            moreMessages={["Sending Now..."]}
            isLove={false}
          />

          <Draft
            date="Aug 25, 3:44 PM"
            draftNumber="1"
            message="Kindly Listen to this and share your reviews. 👏"
          />

          <Collab
            date="Aug 28, 12:44 PM"
            message=" Kindly Listen to this and share your reviews. 👏"
          />

          <ActivityStatus
            title="Sean Kim marked collab as complete"
            date="Aug 24, 8.04 PM"
          />

          <Feedback
            date="Aug 29, 2:44 PM"
            message=" Kindly Listen to this and share your reviews. 👏"
          />

        </div>
      )}
    </div>
  );
};

export default CollabCompletedActivities;
