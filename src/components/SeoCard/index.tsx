import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material";

export default function SeoCard() {
  const [open, setOpen] = useState(true);
  return (
    <>
      {open && (
        <Box
          sx={{
            minWidth: "100%",
            p: 2,
            m: "15px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="/images/seo.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                آنالیز سئو
              </Typography>
              <Typography variant="body2" color="text.secondary">
                شما میتونید با انتخاب لینک‌ها، سئوی اونها رو آنالیز کنید. برای
                این کار کافیه لینکهایی که میخاید رو از لیست زیر انتخاب کنید.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => setOpen(false)}>
                بستن
              </Button>
              <Button size="small">اطلاعات بیشتر</Button>
            </CardActions>
          </Card>
        </Box>
      )}
    </>
  );
}
