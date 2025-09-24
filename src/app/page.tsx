use client
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import BentoFAQ from '@/components/sections/layouts/faq/BentoFAQ';
import FooterLogoEmphasisBackgroundGradient from '@/components/footer/FooterLogoEmphasisBackgroundGradient';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarBase 
          logoSrc="/images/logo.svg"
          logoAlt="NovaSuite Logo"
          leftButtonText="Menu"
          rightButtonText="Contact"
          onLeftButtonClick={() => console.log('Menu clicked')}
          onRightButtonClick={() => console.log('Contact clicked')}
          className="bg-white shadow-md"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <BillboardHero title="Welcome to NovaSuite" subtitle="Your ultimate SaaS solution for managing tasks efficiently" />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout title="About Us" descriptions={['NovaSuite is a leading SaaS platform.', 'We provide innovative solutions for effective management.']} />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D title="How to Buy" steps={[{title: 'Step 1', description: 'Sign up for our service', image: '/images/placeholder1.avif', position: 'left', isCenter: false}, {title: 'Step 2', description: 'Choose a plan that suits your needs', image: '/images/placeholder2.avif', position: 'center', isCenter: true}, {title: 'Step 3', description: 'Start using NovaSuite', image: '/images/placeholder3.avif', position: 'right', isCenter: false}]} />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <BigNumberTokenomics title="Tokenomics" description="Overview of our resource allocation and pricing strategies." kpiItems={[{ value: '1M', description: 'Active Users', longDescription: 'The total number of users actively engaging with our service.', icon: 'Users' }, { value: '80%', description: 'Retention Rate', longDescription: 'Percentage of users who continue to use our service every month.', icon: 'Shield' }, { value: '$2M', description: 'Revenue', longDescription: 'Our total revenue generated in the last fiscal year.', icon: 'ChartBar' }]} />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <BentoFAQ items={[{ title: 'What is NovaSuite?', content: 'A leading SaaS platform for management.' }, { title: 'How to contact support?', content: 'You can reach support via email or chat.' }, { title: 'What plans do you offer?', content: 'Unique plans tailored for various needs.' }, { title: 'Is there a trial period?', content: 'Yes, we offer a 14-day free trial.' }]} />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasisBackgroundGradient logoSrc="/images/logo.svg" logoAlt="NovaSuite Logo" logoText="NovaSuite" items={[{ label: 'Privacy Policy', onClick: () => console.log('Privacy Policy clicked') }, { label: 'Terms of Service', onClick: () => console.log('Terms of Service clicked') }, { label: 'Support', onClick: () => console.log('Support clicked') }]} className="bg-gradient-to-r from-[#FFB6C1] to-[#FFC3A0]" />
      </div>
    </SiteThemeProvider>
  );
}
