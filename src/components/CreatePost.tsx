import React from "react";
import { Stack } from "office-ui-fabric-react";
import { TextField } from "office-ui-fabric-react/lib/TextField";

function CreatePost() {
  return (
    <Stack
      horizontalAlign="center"
      verticalAlign="center"
      verticalFill={true}
      // tslint:disable-next-line: jsx-no-multiline-js
      styles={{
        root: {
          width: "960px",
          margin: "0 auto",
          textAlign: "center",
          color: "#605e5c"
        }
      }}
      gap={35}
    >
      <TextField label="title" />

      <TextField label="body" />
    </Stack>
  );
}

export default CreatePost;
