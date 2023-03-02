import capa_manutencao from '../images/img-services/manutencao.webp';
import capa_remodelacao from '../images/img-services/remodelacao.webp';
import capa_eletrica from '../images/img-services/eletrica.webp';
import capa_hidraulica from '../images/img-services/hidraulica.webp';
import capa_pintura from '../images/img-services/pintura.webp';
import capa_drywall from '../images/img-services/drywall.webp';
import capa_arcond from '../images/img-services/arcond.webp';

import icon_manu from '../images/img-icon-service/manutencao.webp';
import icon_remo from '../images/img-icon-service/remodelacao.webp';
import icon_ele from '../images/img-icon-service/eletrica.webp';
import icon_hidra from '../images/img-icon-service/hidraulica.webp';
import icon_pint from '../images/img-icon-service/pintura.webp';
import icon_dry from '../images/img-icon-service/drywall.webp';
import icon_arcond from '../images/img-icon-service/arcond.webp';

const arcond = require.context('../images/img-services/arcond', true, /\.(png|jpg|jpeg|gif|svg|webp)$/);
const drywall = require.context('../images/img-services/drywall', true, /\.(png|jpg|jpeg|gif|svg|webp)$/);
const eletrica = require.context('../images/img-services/eletrica', true, /\.(png|jpg|jpeg|gif|svg|webp)$/);
const hidraulica = require.context('../images/img-services/hidraulica', true, /\.(png|jpg|jpeg|gif|svg|webp)$/);
const manutencao = require.context('../images/img-services/manutencao', true, /\.(png|jpg|jpeg|gif|svg|webp)$/);
const pintura = require.context('../images/img-services/pintura', true, /\.(png|jpg|jpeg|gif|svg|webp)$/);
const remodelacao = require.context('../images/img-services/remodelacao', true, /\.(png|jpg|jpeg|gif|svg|webp)$/);

const services = [
  {
    id: 0,
    pathName: 'tabalhos-em-altura',
    icon: icon_manu,
    cover: capa_manutencao,
    title: 'Trabalhos em Altura',
    resumo: 'Fornecemos serviços especializados em trabalhos em altura com a máxima segurança.',
    text: 'Os trabalhos em altura são realizados com a utilização de equipamentos especializados e profissionais capacitados, garantindo assim a segurança dos envolvidos. Antes de iniciar o serviço, é realizada uma análise do local e das condições, para planejar e executar a atividade de maneira eficiente e segura. Durante o processo, são adotadas medidas de segurança rigorosas para garantir a integridade física dos profissionais envolvidos e do próprio imóvel. Ao finalizar, é feita uma avaliação para assegurar que tudo foi executado com perfeição e de acordo com as especificações. A Jonathan Manutenção prioriza sempre a qualidade e a segurança em todos os seus trabalhos, especialmente em altura.',
    servicos: [],
    images: manutencao,
  },
  {
    id: 1,
    pathName: 'remodelacao',
    icon: icon_remo,
    cover: capa_remodelacao,
    title: 'Remodelação',
    resumo: 'Oferecemos soluções profissionais para remodelação e restauração de imóveis.',
    text: 'A Jonathan Manutenção oferece serviços de remodelação para melhorar e atualizar sua casa ou escritório. Nós trabalhamos com você para entender suas necessidades e criar soluções que atendam aos seus objetivos e desejos. Nossa equipe altamente qualificada é capaz de lidar com projetos grandes e pequenos, incluindo reformas de banheiros, cozinhas, quartos e salas. Além disso, garantimos a máxima precisão, eficiência e atenção aos detalhes em cada trabalho que realizamos. Se você está buscando renovar sua casa ou escritório, não hesite em entrar em contato com a Jonathan Manutenção.',
    servicos: [],
    images: remodelacao,
  },
  {
    id: 2,
    pathName: 'eletrica',
    icon: icon_ele,
    cover: capa_eletrica,
    title: 'Serviços Elétricos',
    resumo: 'Oferecemos serviços elétricos confiáveis e eficientes para atender às suas necessidades.',
    text: 'Os serviços elétricos da Jonathan Manutenção são realizados por profissionais altamente capacitados e experientes na área. Nós nos comprometemos em garantir a segurança de nossos clientes e de nossos funcionários, aplicando as normas e regulamentos elétricos necessários em cada projeto.',
    servicos: [
      "Instalação de novos pontos de energia",
      "Reparo de fios e cabos elétricos",
      "Substituição de disjuntores e fusíveis",
      "Instalação e manutenção de quadros elétricos",
      "Instalação de tomadas e interruptores",
      "Instalação e manutenção de iluminação",
      "Inspeção e manutenção de sistemas elétricos",
      "Projetos elétricos para residências e empresas",
    ],
    images: eletrica,
  },
  {
    id: 3,
    pathName: 'hidraulica',
    icon: icon_hidra,
    cover: capa_hidraulica,
    title: 'Serviços Hidráulicos',
    resumo: 'Soluções de alta qualidade para todas as suas necessidades hidráulicas.',
    text: 'Os serviços hidráulicos oferecidos pela Jonathan Manutenção são realizados por profissionais altamente capacitados e experientes na área.',
    servicos: [
      "Detecção e reparo de vazamentos",
      "Instalação de tubulações de água quente e fria",
      "Instalação e manutenção de torneiras, chuveiros e válvulas",
      "Reparo e substituição de encanamentos",
      "Limpeza e desentupimento de canos e ralos",
      "Instalação e manutenção de sistemas de esgoto e drenagem",
    ],
    images: hidraulica,
  },
  {
    id: 4,
    pathName: 'pintura',
    icon: icon_pint,
    cover: capa_pintura,
    title: 'Pintura',
    resumo: 'Oferecemos soluções de alta qualidade e acabamentos impecáveis para renovar qualquer ambiente.',
    text: 'Oferecemos soluções de alta qualidade e acabamentos impecáveis para renovar qualquer ambiente.',
    servicos: [
      'Pintura de interiores',
      'Pintura de exteriores',
      'Pintura de fachadas',
      'Pintura de tetos e paredes',
      'Pintura de portas e janelas',
      'Texturização de paredes',
      'Aplicação de verniz',
      'Pintura de grades e portões',
      'Pintura de piso',
      'Pintura de estacionamento',
    ],
    images: pintura,
  },
  {
    id: 5,
    pathName: 'drywall',
    icon: icon_dry,
    cover: capa_drywall,
    title: 'Drywall',
    resumo: 'Com uma equipe altamente capacitada, garantimos soluções de alta qualidade para a construção de paredes e tetos.',
    text: 'Os serviços de drywall são aplicados para a construção e instalação de paredes internas, divisórias e forros, oferecendo uma solução rápida e econômica para a necessidade de separação de ambientes e acústica. O uso de drywall também é uma opção mais acessível e sustentável, pois permite a reutilização e reciclagem dos materiais usados.',
    servicos: [],
    images: drywall,
  },
  {
    id: 6,
    pathName: 'arcondicionado',
    icon: icon_arcond,
    cover: capa_arcond,
    title: 'Ar-Condicionado',
    resumo: 'Serviços completos para seu ar-condicionado: Instalação, Limpeza e Manutenção.',
    text: 'A limpeza e manutenção de ar condicionados é essencial para garantir o bom funcionamento e prolongar a vida útil do equipamento.',
    servicos: [
      "Limpeza dos filtros",
      "Limpeza dos componentes internos",
      "Verificação do funcionamento geral do aparelho",
      "Troca de peças danificadas",
      "Recarga de gás refrigerante",
      "Instalação de novos aparelhos",
      "Remoção e descarte de aparelhos antigos",
      "Manutenção preventiva periódica",
    ],
    images: arcond,
  },
];

export default services;
