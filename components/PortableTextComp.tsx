import { PortableText, PortableTextBlock } from "@portabletext/react";
import React from "react";

export default function PortableTextComp({
  content,
}: {
  content: PortableTextBlock;
}) {
  return <PortableText value={content} />;
}
