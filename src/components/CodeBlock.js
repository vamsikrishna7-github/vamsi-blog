"use client";
import { useState, useEffect } from "react";
import { Clipboard, ClipboardCheck } from "lucide-react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; 

const CodeBlock = ({ language = "javascript", code = "" }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    import(`prismjs/components/prism-${language}`)
      .then(() => Prism.highlightAll())
      .catch(() => console.warn(`Unsupported language: '${language}', using plaintext.`));
  }, [language, code]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
<div className="position-relative text-white p-2 rounded-0" style={{ backgroundColor: "#2d2d2d"}}>
  <button
    className="btn btn-sm btn-secondary position-absolute top-0 end-0 m-2"
    onClick={handleCopy}
  >
    {copied ? <ClipboardCheck size={16} /> : <Clipboard size={16} />}
  </button>

  <pre className="overflow-auto rounded p-3">
    <code className={`language-${language}`}>{code}</code>
  </pre>
</div>

  );
};

export default CodeBlock;
