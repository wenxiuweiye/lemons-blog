import React, { Suspense,useRef } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import styles from "./index.module.css";
import VideoPlayer from "./videoPlayer";



export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  function decimalismToBinary( num: number ): number{
    let current = num , remainder = [] 
      // while(current %2 >=0){

      //   remainder.push(current%2)
      //   current = current/2
      // }
      // console.log(remainder);
      
      return 0
  }
  decimalismToBinary(26)
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <VideoPlayer></VideoPlayer>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
