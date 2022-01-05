import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const initialProps = await Document.getInitialProps(context)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument