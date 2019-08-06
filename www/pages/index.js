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
      <h1>
        Uh oh! If you're here you're probably a little lost, need a little help?
      </h1>
      <h3>Warning Notice</h3>
      <p>
        Webpip.es do not accept HTTP <code>GET</code> requests.
      </p>
      <p>
        Please remember to use the appropriate HTTP Method, either{' '}
        <code>OPTIONS</code>
        or <code>POST</code>.
      </p>

      <hr />
      <h3>Helpful Resources</h3>
      <p>
        You might find this{' '}
        <a href='https://codepen.io/matthewhudson/full/GVEmBo' target='_blank'>
          Codepen
        </a>{' '}
        helpful, it's an example of the JavaScript client invoking a simple
        WebPipe that converts GitHub-flavored Markdown.
      </p>
      <p>
        You can also visit the{' '}
        <a
          href='https://webpipes.org'
          title='WebPipes Official Site'
          target='_blank'>
          WebPipes.org
        </a>{' '}
        Official Site for a Slack invite, and access to other community
        resources &amp; gathering spots.
      </p>

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
        display: none;
        border: none;
        border-bottom: 1px solid #666;
        width: 100px;
        margin: 30px 0;
      }
      .clocks {
        display: flex;
        flex-wrap: wrap;
        flex: 1;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin: 0 -10px;
        padding: 40px 0;
        max-height: 500px;
      }
      .clocks a {
        position: relative;
        flex: 1 0 25%;
        text-align: center;
        padding: 10px;
        margin: 20px 0;
        font-size: 17px;
        transition: all 0.1s ease;
      }
      .clocks a:hover {
        box-shadow: 0 0 0 1px #666;
      }
      .clock span {
        font-weight: 700;
      }
      .clock time {
        display: block;
        height: 3.2em;
        font-weight: 700;
        color: #fff;
        animation: pulse 1s forwards;
      }
      @keyframes pulse {
        from {
          color: #fff;
        }
        to {
          color: #bbb;
        }
      }
      @media screen and (max-width: 960px) {
        .clocks a {
          flex: 1 0 50%;
          font-size: 20px;
        }
      }
      @media screen and (max-width: 480px) {
        .clocks a {
          flex: 1 0 100%;
        }
        .clocks {
          max-height: unset;
        }
        hr {
          display: block;
        }
      }
    `}</style>
  </div>
)

export default Page
