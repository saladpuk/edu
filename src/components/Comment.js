import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export function Comment() {
  if (process.env.NODE_ENV !== "production") {
    return <div className="card card-comment"> โซนคุยกัน (￣y▽￣)╭ (*≧︶≦))(￣▽￣* )ゞ</div>
  }

  const { colorMode } = useColorMode();
  return (
    <Giscus
      repo="saladpuk/edu"
      repoId={process.env.giscusRepoId}
      category="Q&A"
      categoryId={process.env.giscusCategoryId}
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={colorMode}
      lang="th"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  );
};