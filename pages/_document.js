import Document, { Head, Main, NextScript } from "next/document";

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
                    <link
                        href="https://fonts.googleapis.com/css?family=Coiny"
                        rel="stylesheet"
                    />
                    {/* GLOBAL STYLES GO HERE */}
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
                <body
                    style={{
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "#222",
                        color: "#fff"
                    }}
                >
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default MyDoc;
