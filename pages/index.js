import ReactFullpage from '@fullpage/react-fullpage';
import Head from 'next/head';
import SectionHero from './SectionHero';
import SectionAbout from './SectionAbout';
import SectionPortfolio from './SectionPortfolio';
import SectionResume from './SectionResume';
import SectionContact from './SectionContact';
import Loader from '@/components/Loader';
import SomeBar from '@/components/SomeBar'
import Nav from '@/components/Nav';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jørgen Larsen Tjønnteig, Portfolio (jorgenlt)</title>
        <meta name="description" content="Portfolio page of Jørgen Larsen Tjønnteig, fullstack web developer. Skills: Full Stack Web Development, Javascript, SQL, Ruby, Ruby on Rails, HTML, CSS, UX/UI, Product Design, Bootstrap. Visit portfolio for projects and resume / CV." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className='fullpage-container'>
        <Loader />
        <SomeBar />
        <ReactFullpage 
          scrollingSpeed={1000}
          navigation={true}
          autoScrolling={true}
          normalScrollElements='.modal'
          scrollBar={false}
          licenseKey={'gplv3-license'}
          continuousVertical={true}
          anchors={['0', '1', '2', '3', '4']}
          credits={{enabled: false}}
          scrollOverflow={true}
          keyboardScrolling={true}
          scrollHorizontally={true}
          slidesNavigation={true}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <SectionHero />
                <SectionAbout />
                <SectionPortfolio />
                <SectionResume />
                <SectionContact />
              </ReactFullpage.Wrapper>
            )
          }}
        />
      </div>
    </>
  )
}
