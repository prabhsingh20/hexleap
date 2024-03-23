import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="icon" type="image/svg+xml" href="/vite.svg" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=optional:opsz,wght,FILL,GRAD@24,400,0,0"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {/* <title>sfd</title> */}
        </Head>
        <body className="bg-light-main font-Inter text-light-main dark:bg-dark-main dark:text-dark-text">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
