import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box'

const ListKeyTag = ({title, telephones=[], styleProps}) =>  <Box {...styleProps}>

<Typography variant="subtitle2">{title}</Typography>
<Box
  sx={{
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column"
  }}
  component="span"
>
  {list?.map(({ key, label, tag }) => (
    <Box key={key} component="span">
      <Typography
        variant="body2"
        color="text.secondary"
        component="span"
        mr={1}
      >
        {label}
      </Typography>
      {showTag && <Typography
        variant="caption"
        color="text.secondary.light"
        component="span"
        mr={1}
      >
        {tag}
      </Typography>}
    </Box>
  ))}
</Box>
</Box>

export default ListKeyTag