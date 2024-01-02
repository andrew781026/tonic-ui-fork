import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  useActiveCode
} from "@codesandbox/sandpack-react";
import {css} from "@emotion/css";
import {useState} from "react";

// let timeoutId;

const CustomCodeEditor = props => {

  const copier = css`
    right: 20px;
    top: calc(var(--sp-layout-headerHeight) + 12px);
    position: absolute;
  `;

  const {code, updateCode} = useActiveCode();
  const [isCopied, updateIsCopied] = useState(false);

  return (
    <div className={
      css`
        min-width: 100%;
        position: relative;
      `
    }>
      <SandpackCodeEditor/>
      <div className={copier}>
        {
          isCopied ?
            <span className="icon-[consumer-tonic-ui--small-check-mark] w-4 h-4"/> :
            <span className="icon-[consumer-tonic-ui--small-copy] w-4 h-4 cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText(code);
                    updateIsCopied(true);
                    // timeoutId && clearTimeout(timeoutId);
                    // timeoutId =
                    setTimeout(() => updateIsCopied(false), 1000);
                  }}/>
        }
      </div>
    </div>
  )
}


// doc : https://sandpack.codesandbox.io/docs/advanced-usage/components
export default () => {

  return (
    <SandpackProvider
      files={{"/button.js": `export default () => <button />`}}
      options={{

        classes: {
          "sp-wrapper": "custom-wrapper",
          "sp-layout": css``,
          // "sp-preview": css`min-height: 280px`,
          "sp-stack": css`min-width: 100%`,
          // "sp-tab-button": "custom-tab",
          //  sp-editor sp-stack
        },

        showTabs: true,
        closableTabs: false,
        showNavigator: false,

        showLineNumbers: false, // default - true
        showInlineErrors: true, // default - false
        wrapContent: true, // default - false
        editorHeight: 280, // default - 300
        editorWidthPercentage: 60, // default - 50

        recompileMode: "delayed",
        recompileDelay: 300,

        layout: "preview", // preview | tests | console
        visibleFiles: ["/App.js", "/button.js", "/index.js"],
        activeFile: "/button.js",
      }}
      template="react">
      <SandpackLayout>
        <SandpackPreview/>
        <CustomCodeEditor/>
      </SandpackLayout>
    </SandpackProvider>
  )
}
