const Page = () => (
  <div className='container'>
    <div className='logo'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        xmlSpace='preserve'
        width={200}
        height={200}
        fill='#0036ff'
        version='1.1'
        viewBox='-21.125 -5 100 100'>
        <path d='m60.053 3v18.439c0 1.657-1.293 3-2.89 3h-4.738v62.265c0 1.82-1.411 3.296-3.153 3.296h-38.605c-1.742 0-3.154-1.476-3.154-3.296v-62.265h-4.624c-1.596 0-2.889-1.343-2.889-3v-18.439c0-1.657 1.293-3 2.889-3h54.274c1.597 0 2.89 1.343 2.89 3zm-39.544 23.268c0-1.063-0.816-1.926-1.823-1.926h-3.931c-1.006 0-1.823 0.863-1.823 1.926v57.551c0 1.063 0.816 1.927 1.823 1.927h3.931c1.006 0 1.823-0.863 1.823-1.927v-57.551zm-10.583-22.896h-3.932c-1.006 0-1.822 0.784-1.822 1.75v13.221c0 0.967 0.816 1.751 1.822 1.751h3.932c1.006 0 1.822-0.784 1.822-1.751v-13.22c0-0.967-0.816-1.751-1.822-1.751z' />
      </svg>
    </div>

    <div className='intro'>
      <b>
        <a
          href='https://github.com/webpipes/webpipe-examples'
          title='GitHub for this project'
          target='_blank'>
          {'View on GitHub'}
        </a>
      </b>
      <h1>WebPip.es </h1>
      <i>A Public Service offered by WebPipes.org</i>
      <hr />
      <h3>Interactive Demos</h3>
      <ul>
        <li>
          <a
            href='https://repl.it/@matthewhudson/webpipeexamples'
            target='_blank'>
            repl.it
          </a>{' '}
          - JS Client + <a href='https://webpip.es/parse-url'>parse-url</a>
        </li>
        <li>
          <a
            href='https://codepen.io/matthewhudson/full/GVEmBo'
            target='_blank'>
            Codepen
          </a>{' '}
          - JS client +{' '}
          <a href='https://webpip.es/convert-markdown-to-html'>
            convert-markdown-to-html
          </a>
        </li>
      </ul>
      <hr />
      <h3>Live WebPipes</h3>
      <ul>
        <li>
          <a href='https://webpip.es/scrape-url-html'>scrape-url-html</a>
        </li>
        <li>
          <a href='https://webpip.es/parse-url'>parse-url</a>
        </li>
        <li>
          <a href='https://webpip.es/upload-url-to-s3'>upload-url-to-s3</a>
        </li>
        <li>
          <a href='https://webpip.es/convert-markdown-to-html'>
            convert-markdown-to-html
          </a>
        </li>
        <li>
          <a href='https://webpip.es/parse-rss'>parse-rss</a>
        </li>
        <li>
          <a href='https://webpip.es/pkg-news-api'>pkg-news-api</a>
        </li>
        <li>
          <a href='https://webpip.es/inspect-hostname-dns'>
            inspect-hostname-dns
          </a>
        </li>
        <li>
          <a href='calculate-square-root'>calculate-square-root</a>
        </li>
      </ul>
      <hr />
      <h3>Client & Server Libraries</h3>
      <ul className='ml0 pl0 f5 dib'>
        <li>
          <a
            className='dib'
            href='https://www.github.com/webpipes/node-webpipe'>
            Node/JavaScript Server
          </a>
        </li>
        <li>
          <a className='dib' href='https://github.com/webpipes/webpipe.js/'>
            JavaScript Client
          </a>
        </li>
        <li>
          <a className='dib' href='https://github.com/fkautz/golang-webpipes'>
            Go Server
          </a>
        </li>
        <li>
          <a
            className='dib'
            href='https://github.com/matthewhudson/webpipe.php'>
            PHP Client
          </a>
        </li>
      </ul>
      <hr />
      <h3>Community</h3>
      <ul className='ml0 pl0'>
        <li className='dib'>
          <a href='https://join.slack.com/t/webpipes/shared_invite/enQtNjgwMzUzMDk1NzAxLTUwNDE5ZTJmMTgyMWI4MjgxOGNjOWEzNzU3Yzc5MjM0M2E1MzJlYTI0OTY1Njc3YWJhODMxYzZkZjY2MzMyNDY'>
            Slack
          </a>
        </li>
        <li className='dib'>
          <a href='https://www.github.com/webpipes'>GitHub</a>
        </li>
        <li className='dib'>
          <a href='https://groups.google.com/forum/#!forum/webpipes'>
            Google Group
          </a>
        </li>
        <li className='dib'>
          <a href='https://spectrum.chat/webpipes?tab=posts'>Spectrum</a>
        </li>
      </ul>
      <hr />
      <p>
        View this project on{' '}
        <a
          href='https://github.com/webpipes/webpipe-examples'
          title='GitHub for this project'
          target='_blank'>
          GitHub
        </a>
        .
      </p>
    </div>
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }
      html,
      body {
        height: 100%;
      }
      body {
        margin: 0;
        color: white;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
          'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', sans-serif;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: radial-gradient(circle, #333, #333 1px, #000 1px, #000);
        background-size: 28px 28px;
        background-position: center;
        font-size: 18px;
        line-height: 1.6;
        font-weight: 400;
      }
      a {
        text-decoration: none;
        color: white;
      }
      strong {
        color: white;
        font-weight: 600;
      }
      code {
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace,
          serif;
        font-size: 0.9em;
      }
      code::before,
      code::after {
        content: '\`';
      }
      ::selection {
        background: #f81ce5;
        color: white;
      }
      ::-moz-selection {
        background: #f81ce5;
        color: white;
      }
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        max-width: 100%;
        width: 1080px;
        min-height: 100vh;
        margin: auto;
        padding: 30px 20px;
      }
      .logo {
        margin: 30px 0 20px;
      }
      .intro {
        text-align: left;
        max-width: 640px;
      }
      .intro a {
        margin-right: 0.15em;
        border-bottom: 1px solid;
      }
      h2 {
        font-size: 30px;
      }
      hr {
        border: none;
        border-bottom: 1px solid #666;
        margin: 1.5em 0;
      }
    `}</style>
  </div>
)

export default Page
