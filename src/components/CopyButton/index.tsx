import React, { useState, useEffect } from "react";
import copy from "copy-to-clipboard";

import { Stack, Button } from "@mui/material";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
type CopyButtonProps = {
  content: string | string[];
};
const CopyButton = ({ content }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, [copied]);

  const copyParser = (str: string | string[]): string => {
    if (typeof str === "string") return str;
    return str.join("\n");
  };

  const copyHandler = () => {
    copy(copyParser(content));
    setCopied(true);
  };

  return (
    <Stack>
      <Button
        variant="contained"
        color={copied ? "success" : "primary"}
        sx={{ fontSize: "1rem" }}
        startIcon={copied ? <CheckIcon /> : <ContentCopyIcon />}
        onClick={copyHandler}
      >
        {copied ? "کپی شد" : "کپی"}
      </Button>
    </Stack>
  );
};

export default CopyButton;
