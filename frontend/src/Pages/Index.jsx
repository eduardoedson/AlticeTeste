import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import First from '../Components/Form/Steps/First';
import Second from '../Components/Form/Steps/Second';
import Third from '../Components/Form/Steps/Third';
import Logo from '../Assets/Images/logo_meo_preto.png';
import { useNome } from '../Contexts/First/Nome'
import { useEmail } from '../Contexts/First/Email'
import { useTelefone } from '../Contexts/First/Telefone'
import { useRua } from '../Contexts/First/Rua'
import { useComplemento } from '../Contexts/First/Complemento'
import { usePorta } from '../Contexts/First/Porta'
import { useCodigoPostal } from '../Contexts/First/CodigoPostal'
import { useCidade } from '../Contexts/First/Cidade'
import { useNomeOperadora } from '../Contexts/Second/NomeOperadora'
import { useQualidade } from '../Contexts/Second/Qualidade'
import { useValor } from '../Contexts/Second/Valor'
import { useVelocidade } from '../Contexts/Second/Velocidade'
import { useOpiniao } from '../Contexts/Third/Opiniao'
import Api from '../Services/Api'

function Tip() {
  return (
    <Typography color="text.secondary" align="left">
      <br />
      {'* Campo obrigatório'}
    </Typography>
  )
}

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.meo.pt/">
        MEO
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Dados Pessoais', 'Dados da Operadora', 'MEO'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <First />;
    case 1:
      return <Second />;
    case 2:
      return <Third />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#C90062',
    },
  },
});

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [nome] = useNome();
  const [email] = useEmail();
  const [rua] = useRua();
  const [complemento] = useComplemento();
  const [porta] = usePorta();
  const [codigoPostal] = useCodigoPostal();
  const [cidade] = useCidade();
  const [telefone] = useTelefone();
  const [nomeOperadora] = useNomeOperadora();
  const [qualidade] = useQualidade();
  const [valor] = useValor();
  const [velocidade] = useVelocidade();
  const [opiniao] = useOpiniao();

  const validarForm = () => {
    if(activeStep === 0) {
      if(nome.length === 0 || email.length === 0 || !/\S+@\S+\.\S+/.test(email) ||
        rua.length === 0 || porta.length === 0 || codigoPostal.length === 0 ||
        cidade.length === 0 || /[a-zA-Z]/.test(telefone)) {
          window.alert('Por favor, preencha o formulário corretamente antes de prosseguir.')
          return false
        }
    }
    return true
  }

  const submitForm = async () => {
    console.log('submit')
    await Api.post('/cadastrar', { 
      nome, 
      email,
      rua,
      porta,
      complemento_morada: complemento,
      codigo_postal: codigoPostal,
      cidade,
      telefone,
      nome_operadora: nomeOperadora,
      valor, 
      qualidade, 
      velocidade, 
      opiniao
    })
    .then(() => setActiveStep(activeStep + 1))
    .catch(() => window.alert('Houve um erro. Tente novamente ou entre em contato com o administrador do sistema.'))
  }

  const handleNext = () => {
    const valido = validarForm()
    if(valido && activeStep < 2) {
      setActiveStep(activeStep + 1);
    } else if (activeStep === 2) {
      submitForm()
    }
  };

  const handleBack = () => setActiveStep(activeStep - 1)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar><img className="logo-img" src={Logo} alt="Logo MEO" /></Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography className="titulo" component="h1" variant="h5" align="center">
            Cadastre-se na campanha XPTO da MEO
          </Typography> 
          <Stepper className="stepper" activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Obrigado pelo seu cadastro!
                </Typography>
                <Typography variant="subtitle1">
                  Suas informações serão de grande ajuda para que possamos
                  melhorar nossos serviços.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Tip />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Anterior
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Finalizar Cadastro' : 'Próximo'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}
