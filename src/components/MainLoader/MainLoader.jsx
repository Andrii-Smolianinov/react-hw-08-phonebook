import { Audio } from 'react-loader-spinner';
import { PositionDiv } from 'components/MainLoader/MainLoaderStyled';

export default function MainLoader() {
  return (
    <PositionDiv>
      <Audio
        height="100"
        width="100"
        color="#04f1e5ff"
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
      />
    </PositionDiv>
  );
}
