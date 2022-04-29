import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import ComputerIcon from '@mui/icons-material/Computer';
import EuroIcon from '@mui/icons-material/Euro';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import { useNomeOperadora } from '../../../Contexts/Second/NomeOperadora'
import { useValor } from '../../../Contexts/Second/Valor'
import { useQualidade } from '../../../Contexts/Second/Qualidade'
import { useVelocidade } from '../../../Contexts/Second/Velocidade'

export default function Second() {
  const [nomeOperadora, setNomeOperadora] = useNomeOperadora();
  const [valor, setValor] = useValor();
  const [qualidade, setQualidade] = useQualidade();
  const [velocidade, setVelocidade] = useVelocidade();

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="nome"
            name="nome"
            label="Nome da sua atual operadora"
            fullWidth
            onChange={(e) => setNomeOperadora(e.target.value)}
            value={nomeOperadora}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ComputerIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="valor"
            name="valor"
            label="Valor pago atualmente"
            fullWidth
            onChange={(e) => setValor(e.target.value)}
            value={valor}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EuroIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel id="qualidade">Qualidade do serviço atual</InputLabel>
          <Select
            labelId="qualidade"
            id="qualidade"
            value={qualidade}
            onChange={(e) => setQualidade(e.target.value)}
            label="Qualidade do serviço atual"
          >
            <MenuItem value={'Mau'}>Mau</MenuItem>
            <MenuItem value={'Razoável'}>Razoável</MenuItem>
            <MenuItem value={'Bom'}>Bom</MenuItem>
            <MenuItem value={'Muito Bom'}>Muito Bom</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="valocidade"
            name="velocidade"
            label="Velocidade atual"
            fullWidth
            onChange={(e) => setVelocidade(e.target.value)}
            value={velocidade}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <NetworkCheckIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
