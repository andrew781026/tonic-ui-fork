import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  useActiveCode
} from "@codesandbox/sandpack-react";
import {css} from "@emotion/css";
import {useState, useRef, useEffect,useLayoutEffect} from "react";

const ExpendDiv = props => {

  const {showCode, updateShowCode} = props;

  // trnaslateX(-40px)

  const iconTransition = css`
    transform: translateX(24px);
    transition: transform 0.3s;

    .demo-block-control:hover > & {
      transform: translateX(-10px);
    }
  `

  const expandTransition = css`
    opacity: 0;
    transform: translateX(20px);
    transition: all 0.3s;

    .demo-block-control:hover > & {
      opacity: 1;
      transform: translateX(0px);
    }
  `

  const tryItTransition = css`
    opacity: 0;
    transition: opacity 0.3s;

    .demo-block-control:hover > & {
      opacity: 1;
    }
  `

  return (
    <div
      className="demo-block-control bg-white w-full flex justify-center items-center relative p-4 cursor-pointer hover:bg-tcsmd-ref-palette-blue-10"
      onClick={() => updateShowCode(!showCode)}>
      {
        showCode ?
          <span
            className={`icon-[consumer-tonic-ui--small-arrow-up-chevron] w-4 h-4 text-center ${iconTransition}`}></span> :
          <span
            className={`icon-[consumer-tonic-ui--small-arrow-down-chevron] w-4 h-4 text-center ${iconTransition}`}></span>
      }
      <span className={expandTransition}>{showCode ? 'Hide' : 'Expand'}</span>
      <span className={`absolute right-4 top-4 ${tryItTransition}`}>Try it!</span>
    </div>
  )
}

const CustomCodeEditor = props => {

  const wrapperRef = useRef(null);

  const copier = css`
    right: 8px;
    top: calc(var(--sp-layout-headerHeight) + 8px);
    position: absolute;
  `;

  const {showCode} = props;
  const {code, updateCode} = useActiveCode();
  const [isCopied, updateIsCopied] = useState(false);

  useLayoutEffect(() => {
    if (wrapperRef.current) {
      if (showCode) wrapperRef.current.style.maxHeight = "300px"; // (wrapperRef.current.scrollHeight + 20) + "px";
      else wrapperRef.current.style.maxHeight = null;
    }
  }, [showCode]);

  console.log('updated');

  return (
    <div
      ref={wrapperRef}
      className={
        css`
          min-width: 100%;
          position: relative;

          // ref : https://www.w3schools.com/howto/howto_js_collapsible.asp
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        `
      }>
      <SandpackCodeEditor wrapContent readOnly/>
      <div
        className={`${copier} border-tcsmd-ref-palette-gray-40 border p-1 rounded z-40 bg-white hover:bg-tcsmd-ref-palette-gray-20`}
        title="copy">
        {
          isCopied ?
            <span className="icon-[consumer-tonic-ui--small-check-mark] w-4 h-4"/> :
            <span className="icon-[consumer-tonic-ui--small-copy] w-4 h-4 cursor-pointer"
                  onClick={() => {
                    navigator.clipboard.writeText(code);
                    updateIsCopied(true);
                    setTimeout(() => updateIsCopied(false), 1000);
                  }}/>
        }
      </div>
    </div>
  )
}


// doc : https://sandpack.codesandbox.io/docs/advanced-usage/components
export default () => {

  const [showCode, updateShowCode] = useState(false);

  // sp-editor

  return (
    <SandpackProvider
      files={{"/button.js": `export default () => <button />`}}
      options={{

        classes: {
          "sp-wrapper": `${showCode ? 'open' : ''} not-content`,
          "sp-layout": css``,
          "sp-preview": css`min-width: 100%`,
          "sp-stack": css``,
          "sp-editor": css`height: 100%`,
          "sp-tab-button": css``,
        },

        showTabs: true,
        closableTabs: false,
        showNavigator: false,

        showLineNumbers: false, // default - true
        showInlineErrors: true, // default - false
        wrapContent: true, // default - false
        editorHeight: 280, // default - 300
        editorWidthPercentage: 100, // default - 50


        recompileMode: "delayed",
        recompileDelay: 300,

        layout: "preview", // preview | tests | console
        visibleFiles: ["/App.js", "/button.js", "/index.js"],
        activeFile: "/button.js",
      }}
      template="react">
      <SandpackLayout>
        <SandpackPreview/>
        <CustomCodeEditor showCode={showCode}/>
        <ExpendDiv showCode={showCode} updateShowCode={updateShowCode}/>
      </SandpackLayout>
    </SandpackProvider>
  )
}
