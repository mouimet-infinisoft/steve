import Box from "@mui/system/Box";

const Empty = () => {
  return (
    <Box
      p={8}
      display={"flex"}
      flexDirection="column"
      alignItems={"center"}
      justifyContent="center"
      minHeight="100px"
      maxWidth="600px"
      textAlign="justify"
      m="auto"
      component="blockquote"
    >
      <i>
        "It has come to my attention that people of accomplishment rarely sat
        back and let things happen to them. They went out and happened to
        things."
      </i>
      <p style={{ textAlign: "right", width: "100%" }}>- LEONARDO DA VINCI</p>
    </Box>
  );
};

export default Empty;
