import { siteData } from '@/lib/site-data'
import { Hero, type HeroVariant } from '@/components/sections/hero'
import { Projects, type ProjectsVariant } from '@/components/sections/projects'
import { Philosophy, type PhilosophyVariant } from '@/components/sections/philosophy'
import { Gallery, type GalleryVariant } from '@/components/sections/gallery'
import { CtaBanner, type CtaBannerVariant } from '@/components/sections/cta-banner'

export default function HomePage() {
  return (
    <>
          <div className="folio-reveal" style={{ animationDelay: '0ms' }}>
            <Hero data={siteData} variant="manifesto" />
          </div>
          <div className="folio-reveal" style={{ animationDelay: '75ms' }}>
            <Projects data={siteData} variant="editorial-index" limit={4} />
          </div>
          <div className="folio-reveal" style={{ animationDelay: '150ms' }}>
            <Philosophy data={siteData} variant="pull-quote" />
          </div>
          <div className="folio-reveal" style={{ animationDelay: '225ms' }}>
            <Gallery data={siteData} variant="strip" />
          </div>
          <div className="folio-reveal" style={{ animationDelay: '300ms' }}>
            <CtaBanner data={siteData} variant="fullbleed" />
          </div>
        </>
  )
}
