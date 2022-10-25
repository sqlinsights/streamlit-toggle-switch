import {
  ComponentProps,
  Streamlit,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { useEffect } from "react"
import { createTheme } from '@material-ui/core/styles';
import { Typography,Switch, Grid } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/styles';



const StreamlitToogle = (props: ComponentProps) => {

  const {default_value, label_end, label_start,justify, active_color, inactive_color, track_color} = props.args;
  useEffect(() => Streamlit.setFrameHeight());


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    Streamlit.setComponentValue(event.target.checked );
  };
  const [state, setState] = React.useState({
      checkStatus: default_value
  });

  const snowflakeTheme = createTheme({
    overrides: {
      MuiSwitch: {
        switchBase:
         {
          // Controls default (unchecked) color for the thumb
          color: inactive_color
        },
        colorSecondary: {
          "&$checked": {
            // Controls checked color for the thumb
            color: active_color
          }
        },
        track: {
          // Controls default (unchecked) color for the track
          opacity: 0.1,
          backgroundColor: track_color,
          "$checked$checked + &": {
            opacity: 1,
            backgroundColor: track_color,

          }
        }
      }
    }
  });

  return (
    <ThemeProvider theme={snowflakeTheme}>
    <Typography  component="div" variant="subtitle1" paragraph={false} gutterBottom={false}>
    <Grid component="label" container justifyContent={justify}>
      <Grid item >{label_start}</Grid>
      <Grid item>
      <Switch
          checked={state.checkStatus}
          onChange={handleChange}
          name="checkStatus"/>
      </Grid>
      <Grid item>{label_end}</Grid> 
    </Grid>
    </Typography>
    </ThemeProvider>
  );
}

export default withStreamlitConnection(StreamlitToogle);
