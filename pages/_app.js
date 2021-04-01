import '../styles/globals.css'
import Layout from "../components/Layout/Layout";
import Head from "next/head";
function MyApp({Component, pageProps}) {
    return <Layout>
        <Head>
            <meta name='viewport' content='initial-scale=1,width=device-width' />
        </Head>
        <Component {...pageProps} />
    </Layout>
}

export default MyApp
