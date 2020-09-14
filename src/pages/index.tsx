import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <h1>BRSM Blog</h1>
      <h2>Yet another thing I've published on the internet.</h2>

      <div className="explanation">
        <p>
          I'm Bradley, a humble doer of stuff in tech living in Austin.
          <br />
          This is a statically generated{' '}
          <ExtLink href="https://nextjs.org">Next.js</ExtLink> site with a{' '}
          <ExtLink href="https://notion.so">Notion</ExtLink> powered blog that
          is deployed with <ExtLink href="https://vercel.com">Vercel</ExtLink>.
          I copied it pretty shamelessly from{' '}
          <ExtLink href="https://github.com/ijjk/notion-blog">here</ExtLink>.
          <br />
          <br />
          I built it to share some thoughts on the internet, and fiddle with
          tools to build websites more easily.
          <br />
          <br />I like news stuff, 3D printing, skeeball, and helping people. I
          care about privacy, human rights, and sustainability.
        </p>
      </div>
    </div>
  </>
)
