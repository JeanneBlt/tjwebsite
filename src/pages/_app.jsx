import Head from "next/head";
import '../styles/globals.css';
const Rokstar = ({Component, pageProps}) => {
    return (
        <>
            <Head>
                <title>TechnoloJ Web Site</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default Rokstar
