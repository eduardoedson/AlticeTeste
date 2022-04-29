import CombineComponents from './CombineProviders';
import { NomeProvider } from './First/Nome';
import { TelefoneProvider } from './First/Telefone';
import { EmailProvider } from './First/Email';
import { ComplementoProvider } from './First/Complemento';
import { CodigoPostalProvider } from './First/CodigoPostal';
import { CidadeProvider } from './First/Cidade';
import { RuaProvider } from './First/Rua';
import { PortaProvider } from './First/Porta';
import { NomeOperadoraProvider } from './Second/NomeOperadora';
import { ValorProvider } from './Second/Valor';
import { QualidadeProvider } from './Second/Qualidade';
import { VelocidadeProvider } from './Second/Velocidade';
import { OpiniaoProvider } from './Third/Opiniao';

const providers = [
  CidadeProvider,
  CodigoPostalProvider,
  ComplementoProvider,
  PortaProvider,
  OpiniaoProvider,
  VelocidadeProvider,
  QualidadeProvider,
  ValorProvider,
  NomeOperadoraProvider,
  RuaProvider,
  EmailProvider,
  TelefoneProvider,
  NomeProvider,
];

const AppContextProvider = CombineComponents(...providers);

export default AppContextProvider;
