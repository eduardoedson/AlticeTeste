import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useOpiniao } from '../../../Contexts/Third/Opiniao'

export default function Third() {
  const [opiniao, setOpiniao] = useOpiniao();

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="opiniao"
            name="opiniao"
            label="O que te faria mudar para a MEO?"
            fullWidth
            multiline
            maxRows={15}
            onChange={(e) => setOpiniao(e.target.value)}
            value={opiniao}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
