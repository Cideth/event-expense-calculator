import { useCallback } from "react";

// Custom hook에서 상태를 주입받는 구조로 변경
export const useClipBoardCopyHook = (
  setCopySuccess: (isCopied: boolean) => void // 상태를 외부에서 주입받음
) => {
  const clipboardCopy = useCallback(
    async (text: string) => {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text);
          setCopySuccess(true);
        } else {
          const textArea = document.createElement("textarea");
          textArea.value = text;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand("copy");
          document.body.removeChild(textArea);
          setCopySuccess(true);
        }
      } catch (err) {
        setCopySuccess(false);
        console.error("Error copying text: ", err);
      }
    },
    [setCopySuccess]
  );

  return { clipboardCopy };
};
