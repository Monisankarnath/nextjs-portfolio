import Head from "next/head";
import React from "react";
import type { ReactElement } from "react";
import Layout from "../src/Layout";
import NestedLayout from "../src/Layout/NestedLayout";
import type { NextPageWithLayout } from "./_app";

const Home: NextPageWithLayout = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Monisankar Nath</title>
        <meta
          name="description"
          content="Hi, I am Monisankar Nath and this is my portfolio website."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div>Portfolio</div>
    </React.Fragment>
  );
};

Home.getLayout = function getLayout(home: ReactElement) {
  return (
    <Layout>
      <NestedLayout>{home}</NestedLayout>
    </Layout>
  );
};

export default Home;
