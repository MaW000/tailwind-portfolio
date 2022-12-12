import tw, { styled } from 'twin.macro'
import { Header, HeroSection, AboutMe, Projects, ProjectsSmall } from './components';

const MainDiv = styled.div(() => [
  tw`lg:px-40 md:px-20 mx-auto max-w-screen-2xl`
])

const ProjectDiv = styled.div(() => [
  tw`px-12 mx-auto max-w-screen-2xl`
])

function App() {
  return (
    <div className="App">
      <Header />
      <MainDiv>
        <HeroSection/>
        <AboutMe />
      </MainDiv>
      <ProjectDiv>
        <Projects />
        <ProjectsSmall/>
      </ProjectDiv>
    </div>
  );
}

export default App;
