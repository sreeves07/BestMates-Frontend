import { MDBCard } from 'mdb-react-ui-kit';
import "./Messaging.css"
import Sidebar from '../Components/Messaging/Sidebar';
import Chat from '../Components/Messaging/Chat';

const Messaging = () => {
  return (
    <div className="messages-page">
      <MDBCard className="messages-container">
        <Sidebar />
        <Chat />
      </MDBCard>
    </div>
  );
};
export default Messaging;
