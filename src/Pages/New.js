import PreviousNewForm from "../Components/PreviousNewForm";
import NewForm from "./NewForm";

const New = () => {
  return (
    <div className="New">
      <h2 className="header">
        <PreviousNewForm />
        {/* <NewForm/> */}
      </h2>
    </div>
  );
};

export default New;
