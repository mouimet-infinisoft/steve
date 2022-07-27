export const ItemMock =  {
    [a87666874687467454df53s4f34sa34asd34fasdfasd34f34asd5]: {
      timeline: {
        seperator: actionWithIcon,
        content: (
          <>
            <Typography variant="h6" textTransform={"capitalize"}>{actionOnTimeLine}</Typography>
            <Typography variant="body2" color="text.secondary">
              blanko.komain@gmail.com
            </Typography>
          </>
        ),
        opposite: (
          <Typography
            color="text.secondary"
            variant="body2"
            sx={{ ":hover": { cursor: "pointer", transform: "scale(1.1)" } }}
          >
            {new Date().toDateString()} 
          </Typography>
        ),
        sx: {
          "[class*=MuiTypography-root-MuiTimelineOppositeContent-root]": {
            display: "flex",
            alignItems: "center"
          }
        }
      },
      details: (
        <>
          <h1>Whatever header</h1>
          <h6>Description whatever</h6>
        </>
      )
    }
  };


  
  export  const ItemMockNoContent =  {
    [a87666874687467454df534fasdfasd34f34asd5]: {
      timeline: {
        seperator: actionWithIcon,
        opposite: (
          <Typography
            color="text.secondary"
            variant="body2"
            sx={{ ":hover": { cursor: "pointer", transform: "scale(1.1)" } }}
          >
            {new Date().toDateString()} 
          </Typography>
        ),
        sx: {
          "[class*=MuiTypography-root-MuiTimelineOppositeContent-root]": {
            display: "flex",
            alignItems: "center"
          }
        }
      },
      details: (
        <>
          <h1>Whatever header</h1>
          <h6>Description whatever</h6>
        </>
      )
    }
  };



  export  const ItemMockNoDetails =  {
    [a87666874688768ghf34sa34asd34fasdfasd34f34asd5]: {
      timeline: {
        seperator: actionWithIcon,
        content: (
          <>
            <Typography variant="h6" textTransform={"capitalize"}>{actionOnTimeLine}</Typography>
            <Typography variant="body2" color="text.secondary">
              blanko.komain@gmail.com
            </Typography>
          </>
        ),
        opposite: (
          <Typography
            color="text.secondary"
            variant="body2"
            sx={{ ":hover": { cursor: "pointer", transform: "scale(1.1)" } }}
          >
            {new Date().toDateString()} 
          </Typography>
        ),
        sx: {
          "[class*=MuiTypography-root-MuiTimelineOppositeContent-root]": {
            display: "flex",
            alignItems: "center"
          }
        }
      }
    }
  };
  

