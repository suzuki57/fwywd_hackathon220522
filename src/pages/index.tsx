import { CTA } from '../component/cta';
import { Hero } from '../component/hero';
import { Mean } from '../component/mean';
import { Merit } from '../component/merit';
import { PageFooter } from '../component/pagefooter';
import { Review } from '../component/review';

const Home: React.FC = () => (
  <>
    <Hero />
    <Mean />
    <Merit />
    <Review />
    <CTA />
    <PageFooter />
  </>
);

export default Home;
