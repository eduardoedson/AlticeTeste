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
import { useErrorCidade } from '../../../Contexts/Errors/ErrorCidade'
import { useErrorCodigoPostal } from '../../../Contexts/Errors/ErrorCodigoPostal'
import { useErrorEmail } from '../../../Contexts/Errors/ErrorEmail'
import { useErrorNome } from '../../../Contexts/Errors/ErrorNome'
import { useErrorPorta } from '../../../Contexts/Errors/ErrorPorta'
import { useErrorRua } from '../../../Contexts/Errors/ErrorRua'

export default function First() {
  const [nome, setNome] = useNome();
  const [email, setEmail] = useEmail();
  const [telefone, setTelefone] = useTelefone();
  const [rua, setRua] = useRua();
  const [porta, setPorta] = usePorta();
  const [complemento, setComplemento] = useComplemento();
  const [codigoPostal, setCodigoPostal] = useCodigoPostal();
  const [cidade, setCidade] = useCidade();

  const [errorCidade] = useErrorCidade();
  const [errorCodigoPostal] = useErrorCodigoPostal();
  const [errorEmail] = useErrorEmail();
  const [errorNome] = useErrorNome();
  const [errorPorta] = useErrorPorta();
  const [errorRua] = useErrorRua();

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
            error={errorNome}
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
          {errorNome ? <Alert severity="error" style={{ marginTop: 10 }}>Insira o seu nome</Alert> : null}
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
            error={errorEmail}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          {errorEmail ? <Alert severity="error" style={{ marginTop: 10 }}>E-mail inválido</Alert> : null}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="telefone"
            name="telefone"
            label="Telemóvel"
            fullWidth
            onChange={(e) => setTelefone(e.target.value)}
            value={telefone}
            error={/[a-zA-Z]/.test(telefone) || telefone.length < 9}
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
          <Alert severity="error" style={{ marginTop: 10 }}>O campo deve ter 9 digitos numéricos!</Alert> 
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
            error={errorRua}
          />
          {errorRua ? <Alert severity="error" style={{ marginTop: 10 }}>Indique o nome da rua!</Alert> : null}
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
            error={errorPorta}
          />
          {errorPorta ? <Alert severity="error" style={{ marginTop: 10 }}>Indique o Nº da Porta!</Alert> : null}
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
            error={errorCodigoPostal}
            inputProps={{
              maxLength: 8
            }}
          />
          {errorCodigoPostal ? <Alert severity="error" style={{ marginTop: 10 }}>Indique o código postal!</Alert> : null}
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
            error={errorCidade}
          />
          {errorCidade ? <Alert severity="error" style={{ marginTop: 10 }}>Indique a cidade!</Alert> : null}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
