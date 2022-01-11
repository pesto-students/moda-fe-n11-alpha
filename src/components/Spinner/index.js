import Loader from 'react-loader-spinner';
import { Container, loaderStyle } from './styles';
import Loading from '../Loading';
function Spinner() {
  return (
    <Container>
      <Loader
        style={loaderStyle}
        type='Hearts'
        color='pink'
        height={200}
        width={200}
      />
      <Loading />
    </Container>
  );
}

export default Spinner;
