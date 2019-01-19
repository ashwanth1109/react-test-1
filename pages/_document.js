// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import Document, { Head, Main, NextScript } from "next/document"; // Import default Document from Next JS
// ------------------------------------------------------------
// Customizing the default Document
// ------------------------------------------------------------
class MyDoc extends Document {
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    {/* linking COINY from google fonts */}
                    <link
                        href="https://fonts.googleapis.com/css?family=Coiny"
                        rel="stylesheet"
                    />
                    {/* link progress bar CSS - NPROGRESS */}
                    <link
                        href="https://storage.googleapis.com/resource-book/nprogress.min.css"
                        rel="stylesheet"
                    />
                    {/* global styles go here - also hover, keyframe animations etc. */}
                    <style>{`
                        * {
                            margin: 0;
                            padding: 0;
                        }

                        .btn:hover {
                            background-color: #fff;
                            color: #222;
                        }
                    `}</style>
                </Head>
                {/* Add body styles here */}
                <body
                    style={{
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "#222",
                        color: "#fff"
                    }}
                >
                    {/* from next js documentation */}
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
// ------------------------------------------------------------
// export customized document
// ------------------------------------------------------------
export default MyDoc;
