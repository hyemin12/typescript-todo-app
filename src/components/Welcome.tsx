import { Dispatch, SetStateAction } from "react";
import Button from "components/Button";
import tipImg from "assets/img/todoListTip.png";

const Welcome = ({
  setWelcomeTip,
}: {
  setWelcomeTip: Dispatch<SetStateAction<boolean>>;
}) => {
  const closeWelcomeTip = () => {
    setWelcomeTip(false);
  };

  return (
    <div className='welcome-tip-wrapper'>
      <Button $type='default' text='닫기' action={closeWelcomeTip} />
      <img src={tipImg} alt='투두리스트 사용방법' />
    </div>
  );
};

export default Welcome;
