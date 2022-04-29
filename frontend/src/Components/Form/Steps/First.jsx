import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useNome } from '../../../Contexts/First/Nome'
import { useEmail } from '../../../Contexts/First/Email'
import { useTelefone } from '../../../Contexts/First/Telefone'
import { useRua } from '../../../Contexts/First/Rua'
import { usePorta } from '../../../Contexts/First/Porta'
import { useComplemento } from '../../../Contexts/First/Complemento'
import { useCodigoPostal } from '../../../Contexts/First/CodigoPostal'
import { useCidade } from '../../../Contexts/First/Cidade'
import Alert from '@mui/material/Alert';

export default function First() {
  const [nome, setNome] = useNome();
  const [email, setEmail] = useEmail();
  const [telefone, setTelefone] = useTelefone();
  const [rua, setRua] = useRua();
  const [porta, setPorta] = usePorta();
  const [complemento, setComplemento] = useComplemento();
  const [codigoPostal, setCodigoPostal] = useCodigoPostal();
  const [cidade, setCidade] = useCidade();

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="nome"
            name="nome"
            label="Nome Completo"
            fullWidth
            error={nome.length === 0 ? true : false}
            onChange={(e) => setNome(e.target.value)}
            value={nome}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />
          {nome.length === 0 ? 
          <Alert severity="error" style={{ marginTop: 10 }}>Seu nome não pode ficar vazio!</Alert> 
          : null}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="E-mail"
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            error={/\S+@\S+\.\S+/.test(email) ? false : true}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          {email.length === 0 || !/\S+@\S+\.\S+/.test(email) ? 
          <Alert severity="error" style={{ marginTop: 10 }}>Você precisa fornecer um e-mail válido!</Alert> 
          : null}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="telefone"
            name="telefone"
            label="Telemóvel"
            fullWidth
            onChange={(e) => setTelefone(e.target.value)}
            value={telefone}
            error={/[a-zA-Z]/.test(telefone) ? true : false}
            inputProps={{
              maxLength: 9
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocalPhoneIcon /> +351
                </InputAdornment>
              ),
            }}
          />
          {/[a-zA-Z]/.test(telefone) ? 
          <Alert severity="error" style={{ marginTop: 10 }}>Utilize somente números no campo Telemóvel!</Alert> 
          : null}
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="rua"
            name="rua"
            label="Rua"
            fullWidth
            onChange={(e) => setRua(e.target.value)}
            value={rua}
            error={rua.length === 0 ? true : false}
          />
          {rua.length === 0 ? 
          <Alert severity="error" style={{ marginTop: 10 }}>Sua rua não pode ficar vazia!</Alert> 
          : null}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="porta"
            name="porta"
            label="Nº Edifício/Porta"
            fullWidth
            onChange={(e) => setPorta(e.target.value)}
            value={porta}
            error={porta.length === 0 ? true : false}
          />
          {porta.length === 0 ? 
          <Alert severity="error" style={{ marginTop: 10 }}>Seu Nº Edifício/Porta não pode ficar vazio!</Alert> 
          : null}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="complemento"
            name="complemento"
            label="Complemento Morada"
            fullWidth
            onChange={(e) => setComplemento(e.target.value)}
            value={complemento}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="codigo_postal"
            name="codigo_postal"
            label="Código Postal"
            fullWidth
            onChange={(e) => setCodigoPostal(e.target.value)}
            value={codigoPostal}
            error={codigoPostal.length === 0 ? true : false}
          />
          {codigoPostal.length === 0 ? 
          <Alert severity="error" style={{ marginTop: 10 }}>Seu código postal não pode ficar vazio!</Alert> 
          : null}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="cidade"
            name="cidade"
            label="Cidade"
            fullWidth
            onChange={(e) => setCidade(e.target.value)}
            value={cidade}
            error={cidade.length === 0 ? true : false}
          />
          {cidade.length === 0 ? 
          <Alert severity="error" style={{ marginTop: 10 }}>Sua cidade não pode ficar vazia!</Alert> 
          : null}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
