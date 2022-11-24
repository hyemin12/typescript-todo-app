import { CreateModeProps } from "../modules/type";

function CreateBtn({ createMode, setCreate }: CreateModeProps) {
  return (
    <div
      className="btn-create"
      onClick={() => {
        setCreate(!createMode);
      }}
    >
      <span className={(createMode ? "create " : "") + "icon-create"}></span>
    </div>
  );
}

export default CreateBtn;
