import { useMicroState } from "@/core/state";
import { config } from '../../config'
import { useItem } from "@/core/hooks";
import { Box, useTheme } from "@mui/system";
import ConnectWithoutContactTwoToneIcon from "@mui/icons-material/ConnectWithoutContactTwoTone";
import { Chip, Typography } from "@mui/material";
import FadeInOutEffect from "@/components/fade-effect";

const Relations = () => {
    const theme = useTheme();
    const selectedId = useMicroState((s) => s[config.feature.name].selectedId);
    const { item } = useItem({
        id: selectedId,
        feature: config.feature.name
    });
    const { __relation__ = [] } = item;
    return (
        <FadeInOutEffect>
            <Box display="flex" gap={theme.spacing(4)}>
                {__relation__?.map((relation) => (
                    <Box display="flex" gap={theme.spacing(2)} mb={theme.spacing(2)}>
                        <ConnectWithoutContactTwoToneIcon />
                        <Box>
                            <Typography textTransform={"capitalize"} variant="body1">
                                {relation.key}
                            </Typography>
                            <Chip size="small" label={relation.value} />
                        </Box>
                    </Box>
                )
                )}
            </Box>
        </FadeInOutEffect>
    )
}

export default Relations;