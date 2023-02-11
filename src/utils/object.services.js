import capa_manutencao from '../images/img-services/manutencao.webp';
import capa_remodelacao from '../images/img-services/remodelacao.webp';
import capa_eletrica from '../images/img-services/eletrica.webp';
import capa_hidraulica from '../images/img-services/hidraulica.webp';
import capa_pintura from '../images/img-services/pintura.webp';
import capa_drywall from '../images/img-services/drywall.webp';

import icon_manu from '../images/img-icon-service/manutencao.webp';
import icon_remo from '../images/img-icon-service/remodelacao.webp';
import icon_ele from '../images/img-icon-service/eletrica.webp';
import icon_hidra from '../images/img-icon-service/hidraulica.webp';
import icon_pint from '../images/img-icon-service/pintura.webp';
import icon_dry from '../images/img-icon-service/drywall.webp';


const services = [
  {
    id: 0,
    pathName: 'manutencao',
    icon: icon_manu,
    cover: capa_manutencao,
    title: 'Trabalhos em Altura',
    resumo: 'Fornecemos serviços especializados em trabalhos em altura com a máxima segurança.',
    text: '',
  },
  {
    id: 1,
    pathName: 'remodelacao',
    icon: icon_remo,
    cover: capa_remodelacao,
    title: 'Remodelação',
    resumo: 'Oferecemos soluções profissionais para remodelação e restauração de imóveis.',
    text: '',
  },
  {
    id: 2,
    pathName: 'eletrica',
    icon: icon_ele,
    cover: capa_eletrica,
    title: 'Serviços Elétricos',
    resumo: 'Oferecemos serviços elétricos confiáveis e eficientes para atender às suas necessidades.',
    text: '',
  },
  {
    id: 3,
    pathName: 'hidraulica',
    icon: icon_hidra,
    cover: capa_hidraulica,
    title: 'Serviços Hidráulicos',
    resumo: 'Soluções de alta qualidade para todas as suas necessidades hidráulicas.',
    text: '',
  },
  {
    id: 4,
    pathName: 'pintura',
    icon: icon_pint,
    cover: capa_pintura,
    title: 'Pintura',
    resumo: 'Oferecemos soluções de alta qualidade e acabamentos impecáveis para renovar qualquer ambiente.',
    text: '',
  },
  {
    id: 5,
    pathName: 'drywall',
    icon: icon_dry,
    cover: capa_drywall,
    title: 'Drywall',
    resumo: 'Com uma equipe altamente capacitada, garantimos soluções de alta qualidade para a construção de paredes e tetos.',
    text: '',
  },
];

export default services;
