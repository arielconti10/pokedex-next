import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'

import { ServerStyleSheet } from '@xstyled/styled-components'
import { Fragment } from 'react'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) =>
            function enhance(props) {
              return sheet.collectStyles(<App {...props} />)
            }
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [
          <Fragment key={1}>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </Fragment>
        ]
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en-US">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
