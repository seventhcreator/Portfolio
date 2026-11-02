import { Navigation } from '@/components/navigation/Navigation';
import { Home } from '@/components/home/Home';
import { About } from '@/components/about/About';
import { Projects } from '@/components/projects/Projects';
import { Contact } from '@/components/contact/Contact';
import { Motion } from '@/components/shared/Motion';

export default function Page() {
  return (
    <>
      <Navigation />
      <Motion>
        <main id="main-content" tabIndex={-1}>
          <Home />
          <About />
          <Projects />
          <Contact year={new Date().getUTCFullYear()} />
        </main>
      </Motion>
    </>
  );
}
