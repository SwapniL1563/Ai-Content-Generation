import React, { useEffect, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface Props {
  aiOutput: string;
}

const OutputSection = ({ aiOutput }: Props) => {
  // Specify the type of the ref to match the Editor instance
  const editorRef = useRef<Editor>(null);

  useEffect(() => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      editorInstance.setMarkdown(aiOutput || ''); // Ensure valid fallback
    }
  }, [aiOutput]);

  const copyToClipboard = () => {
    if (aiOutput) {
      navigator.clipboard.writeText(aiOutput);
    }
  };

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Your Result</h2>
        <Button onClick={copyToClipboard} className="flex gap-2">
          <Copy className="h-4 w-4" /> Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={() => console.log(editorRef.current?.getInstance().getMarkdown())}
      />
    </div>
  );
};

export default OutputSection;
