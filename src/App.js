import tw, { styled } from 'twin.macro'
import { Header, HeroSection } from './components';

const MainDiv = styled.div(() => [
  tw``
])

function App() {
  return (
    <div className="App">
      <Header />
      <MainDiv>
      <HeroSection/>
      </MainDiv>
    </div>
  );
}

export default App;
