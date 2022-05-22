import { CTA } from '../component/cta';
import { Hero } from '../component/hero';
import { Merit } from '../component/merit';
import { PageFooter } from '../component/pagefooter';
import { PageHeader } from '../component/pageheader';
import { Review } from '../component/review';

const Home: React.FC = () => (
  <div className='w-full'>
    <PageHeader />
    <Hero />
    <Merit />
    <Review />
    <CTA />
    <PageFooter />
  </div>
);

export default Home;
