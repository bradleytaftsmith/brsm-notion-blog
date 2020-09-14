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
      <h1>Bradley Taft Smith</h1>
      <h2>Product guy with a love for news.</h2>

      <div className="explanation">
        <p>
          I'm Bradley Smith, a humble doer of stuff in tech living in Austin.
          <br />
          <br />
          I built this site as a homepage and blog to share some thoughts on the
          internet. I also wanted to fiddle with tools to build websites more
          easily.
          <br />
          <br />
          I like news stuff, 3D printing, skeeball, and helping people. I care
          about privacy, human rights, and sustainability.
          <br />
          <br />
          This is a statically generated{' '}
          <ExtLink href="https://nextjs.org">Next.js</ExtLink> site with a blog
          that has its content piped in from{' '}
          <ExtLink href="https://notion.so">Notion</ExtLink>. It'll probably
          break some day, as it's using an experimental API to get notion data.
          <br />
          <br />I copied it pretty shamelessly from{' '}
          <ExtLink href="https://github.com/ijjk/notion-blog">here</ExtLink>.
        </p>
      </div>
    </div>
  </>
)
