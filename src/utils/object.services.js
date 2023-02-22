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


const services = [
  {
    id: 0,
    pathName: 'tabalhos-em-altura',
    icon: icon_manu,
    cover: capa_manutencao,
    title: 'Trabalhos em Altura',
    resumo: 'Fornecemos serviços especializados em trabalhos em altura com a máxima segurança.',
    text: 'Os trabalhos em altura são realizados com a utilização de equipamentos especializados e profissionais capacitados, garantindo assim a segurança dos envolvidos. Antes de iniciar o serviço, é realizada uma análise do local e das condições, para planejar e executar a atividade de maneira eficiente e segura. Durante o processo, são adotadas medidas de segurança rigorosas para garantir a integridade física dos profissionais envolvidos e do próprio imóvel. Ao finalizar, é feita uma avaliação para assegurar que tudo foi executado com perfeição e de acordo com as especificações. A Jonathan Manutenção prioriza sempre a qualidade e a segurança em todos os seus trabalhos, especialmente em altura.',
  },
  {
    id: 1,
    pathName: 'remodelacao',
    icon: icon_remo,
    cover: capa_remodelacao,
    title: 'Remodelação',
    resumo: 'Oferecemos soluções profissionais para remodelação e restauração de imóveis.',
    text: 'A Jonathan Manutenção oferece serviços de remodelação para melhorar e atualizar sua casa ou escritório. Nós trabalhamos com você para entender suas necessidades e criar soluções que atendam aos seus objetivos e desejos. Nossa equipe altamente qualificada é capaz de lidar com projetos grandes e pequenos, incluindo reformas de banheiros, cozinhas, quartos e salas. Além disso, garantimos a máxima precisão, eficiência e atenção aos detalhes em cada trabalho que realizamos. Se você está buscando renovar sua casa ou escritório, não hesite em entrar em contato com a Jonathan Manutenção.',
  },
  {
    id: 2,
    pathName: 'eletrica',
    icon: icon_ele,
    cover: capa_eletrica,
    title: 'Serviços Elétricos',
    resumo: 'Oferecemos serviços elétricos confiáveis e eficientes para atender às suas necessidades.',
    text: 'Os serviços elétricos da Jonathan Manutenção são realizados por profissionais altamente capacitados e experientes na área. Nós nos comprometemos em garantir a segurança de nossos clientes e de nossos funcionários, aplicando as normas e regulamentos elétricos necessários em cada projeto. Desde a instalação de novos sistemas elétricos até a manutenção e conserto de sistemas existentes, nós oferecemos soluções eficientes e confiáveis para atender às necessidades de nossos clientes. Além disso, nosso departamento de atendimento ao cliente está disponível 24 horas por dia, 7 dias por semana, para garantir suporte contínuo a nossos clientes.',
  },
  {
    id: 3,
    pathName: 'hidraulica',
    icon: icon_hidra,
    cover: capa_hidraulica,
    title: 'Serviços Hidráulicos',
    resumo: 'Soluções de alta qualidade para todas as suas necessidades hidráulicas.',
    text: 'Os serviços hidráulicos oferecidos pela Jonathan Manutenção são realizados por profissionais altamente capacitados e experientes na área. Eles possuem conhecimento sobre as normas e procedimentos necessários para garantir a eficiência e segurança nas instalações hidráulicas. Desde o projeto até a execução, a equipe segue rigorosamente todas as recomendações e padrões para realizar um trabalho de qualidade e garantir a satisfação dos clientes. Entre os serviços hidráulicos oferecidos estão a instalação de sistemas de água, esgoto e gás, reparos e manutenções em instalações hidráulicas existentes, entre outros.',
  },
  {
    id: 4,
    pathName: 'pintura',
    icon: icon_pint,
    cover: capa_pintura,
    title: 'Pintura',
    resumo: 'Oferecemos soluções de alta qualidade e acabamentos impecáveis para renovar qualquer ambiente.',
    text: 'Oferecemos soluções de alta qualidade e acabamentos impecáveis para renovar qualquer ambiente. Antes de iniciar o trabalho, nossa equipe realiza uma avaliação detalhada do local, verificando as condições da superfície a ser pintada, identificando eventuais problemas e elaborando um plano de trabalho específico para cada caso. Em seguida, procedemos à limpeza e preparação da superfície, aplicando as tintas selecionadas de acordo com as necessidades de cada projeto, garantindo assim uma pintura de qualidade e duradoura. Além disso, utilizamos materiais e equipamentos de última geração, garantindo um trabalho preciso e eficiente.',
  },
  {
    id: 5,
    pathName: 'drywall',
    icon: icon_dry,
    cover: capa_drywall,
    title: 'Drywall',
    resumo: 'Com uma equipe altamente capacitada, garantimos soluções de alta qualidade para a construção de paredes e tetos.',
    text: 'Os serviços de drywall são aplicados para a construção e instalação de paredes internas, divisórias e forros, oferecendo uma solução rápida e econômica para a necessidade de separação de ambientes e acústica. Nossa equipe é altamente qualificada e possui expertise em todas as etapas do processo, desde a preparação da superfície até a aplicação da massa corrida e pintura. Além disso, trabalhamos com materiais de alta qualidade e garantimos um acabamento perfeito e duradouro, tornando o ambiente mais funcional e agradável. O uso de drywall também é uma opção mais acessível e sustentável, pois permite a reutilização e reciclagem dos materiais usados.',
  },
  {
    id: 6,
    pathName: 'arcondicionado',
    icon: icon_arcond,
    cover: capa_arcond,
    title: 'Ar-Condicionado',
    resumo: 'Serviços completos para seu ar-condicionado: Instalação, Limpeza e Manutenção.',
    text: 'A limpeza e manutenção de ar condicionados é essencial para garantir o bom funcionamento e prolongar a vida útil do equipamento. Além disso, um ar condicionado limpo pode contribuir para uma melhoria da qualidade do ar interior e reduzir os custos de energia. Nossos serviços incluem a limpeza completa do equipamento, a troca de filtros e a verificação do funcionamento geral do sistema, garantindo que ele esteja em pleno funcionamento. Nossa equipe técnica altamente qualificada realiza esses serviços com eficiência e rapidez, garantindo a satisfação dos nossos clientes.',
  },
];

export default services;
