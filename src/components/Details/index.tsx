import * as React from "react";

import { Box, Stack, Paper, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import { SitemapResponseMeta } from "../../types";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),

  textAlign: "center",
  color: theme.palette.text.secondary,
}));

type MainLayoutProps = {
  meta: SitemapResponseMeta[];
  extraMeta: SitemapResponseMeta[];
  //   children?: React.ReactNode;
};

const feedBulder = (metas: SitemapResponseMeta[]) => {
  return metas.map((f, key) => {
    let value = <div>{f.value}</div>;
    if (f.type === "link") {
      value = (
        <div>
          <Link href={f.value} target="_blank" underline="none">
            {f.value}
          </Link>
        </div>
      );
    }
    return (
      <Item key={key}>
        <div style={{ margin: "0 0 7px 0" }}>
          <b>{f.key}</b>
        </div>
        {value}
      </Item>
    );
  });
};

const Details = ({ meta, extraMeta }: MainLayoutProps): JSX.Element => {
  return (
    <Box
      sx={{
        minWidth: "100%",
        p: 2,
        m: "15px 0",
        borderRadius: "4px",
        display: "flex",
        border: "solid 1px #e0e0e0",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack spacing={1} direction={{ zero: "column", sm: "row" }}>
        {feedBulder([...meta, ...extraMeta])}
      </Stack>
    </Box>
  );
};

export default Details;
