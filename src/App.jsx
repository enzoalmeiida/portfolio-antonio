import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function App() {
  const [activeNav, setActiveNav] = useState(null)
  const [expandedProject, setExpandedProject] = useState(null)
  const [contactStatus, setContactStatus] = useState('')
  const contactFormRef = useRef(null)

  const contactEmail = 'antoniozakzukduarte@gmail.com'
  const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setActiveNav(id)
  }

  const handleContactSubmit = async (event) => {
    event.preventDefault()
    setContactStatus('')

    if (!emailJsServiceId || !emailJsTemplateId || !emailJsPublicKey) {
      setContactStatus('Configure as variáveis do EmailJS para ativar o envio.')
      return
    }

    try {
      await emailjs.sendForm(emailJsServiceId, emailJsTemplateId, contactFormRef.current, {
        publicKey: emailJsPublicKey,
      })

      setContactStatus('Mensagem enviada com sucesso.')
      contactFormRef.current?.reset()
    } catch {
      setContactStatus('Não foi possível enviar agora. Tente novamente em instantes.')
    }
  }

  const projects = [
    {
      id: 1,
      title: 'Sucrilhos x NBA',
      shortDesc: 'Edição especial de cereal com colaboração NBA',
      fullDesc: 'Na matéria Instrumentação Digital, tivemos que criar uma edição especial de caixa de cereal usando mockups Adobe. Escolhi a marca Sucrilhos para colaborar com a NBA, a liga de basquete americana famosa por suas parcerias com marcas como Hellmann\'s e Nescau. A energia matinal que o produto oferece combina perfeitamente com o universo esportivo, e o sabor de xarope de bordo (Maple Syrup) remete à cultura norte-americana, tornando a colaboração coerente e impactante.',
      context: 'Disciplina: Instrumentação Digital | Objetivo: Fundamentais do pacote Adobe',
      disciplines: ['Design Gráfico', 'Mockup 3D', 'Branding'],
      image: '[MOCKUP CAIXA SUCRILHOS x NBA - 300g - TIGRE TONY COM NBA]'
    },
    {
      id: 2,
      title: 'Thés Botaniques Phebo',
      shortDesc: 'Experiência sensorial completa de chás e perfumes',
      fullDesc: 'Na disciplina de Criação Publicitária, reimaginei a marca Phebo para 2050, inspirado no case de sucesso dos sorvetes Granado. Criei os "Thés Botaniques" - uma linha que combina chás e perfumes com fragrâncias similares, proporcionando uma experiência sensorial integrada. Cada kit contém 12 sachês de chá (2 de cada sabor) e 6 amostras de fragrâncias de 15ml. O design da caixa integra flores como Lavanda, Flor de Laranjeira, Lírio-do-vale, Magnólia, Jasmim Sambac e Rosa Damascena, remetendo a um jardim sofisticado. Trabalhei com carinho nos detalhes, inspirando-me nas pirâmides de fragrâncias do Fragrantica para a apresentação visual.',
      context: 'Disciplina: Criação Publicitária | Objetivo: Reimaginar produto para 2050',
      disciplines: ['Design de Embalagem', 'Criação Publicitária', 'Perfumaria'],
      image: '[CAIXAS PHEBO THÉS BOTANIQUES + VIDROS DE PERFUME - ROXO/ROSA/VERDE + ESTRUTURA OLFATIVA]'
    },
    {
      id: 3,
      title: 'Bolovo Eco Club',
      shortDesc: 'Campanha criativa para lifestyle sustentável e descolado',
      fullDesc: 'Em Criação Publicitária, desenvolvi uma campanha criativa e visualmente impactante para a Bolovo Eco Club, explorando identidade visual e público-alvo jovem interessado em sustentabilidade. O desafio era conscientizar sem ser "careta" ou "chato", tornando o ativismo mais descolado e próximo do consumidor. Participei do desenvolvimento de conceitos, design de peças de roupa, anúncios em formatos diversos (vídeo vertical 15s para TikTok, trailer longo, peças de rádio) e mantive coerência visual em todas as entregas com o garoto propaganda Fleezus.',
      context: 'Disciplina: Criação Publicitária | Foco: Campanha integrada e identidade visual',
      disciplines: ['Campanha Integrada', 'Design de Vestuário', 'Produção Audiovisual'],
      image: '[FLEEZUS COMO GAROTO PROPAGANDA + OUTDOOR METRÔ + MOCKUPS 4 CAMISETAS DIFERENTES CORES]'
    },
    {
      id: 4,
      title: 'Rota Alternativa',
      shortDesc: 'Livro de receitas de culinária da Ásia Central',
      fullDesc: 'Na disciplina de Instrumentação Digital II, aprendemos os fundamentos do InDesign criando um livro de receitas. No "Rota Alternativa", explorei a culinária de países com pouco destaque - a Ásia Central. Merguei na cultura e culinária do Quirguistão, Tajiquistão e Turcomenistão, desenvolvendo diagramação com fundo em papel pardo, receitas como Besh Barmak, Plov e Pishme, com seções de Modo de Preparo, Finalização e curiosidades "Você Sabia?". Um processo muito divertido que resultou em um livro visualmente coeso e educativo.',
      context: 'Disciplina: Instrumentação Digital II | Foco: Fundamentos InDesign',
      disciplines: ['Design Editorial', 'Diagramação', 'Pesquisa Cultural'],
      image: '[CAPA + PÁGINAS INTERNAS LIVRO ROTA ALTERNATIVA - FUNDO PAPEL PARDO - RECEITAS ÁSIA CENTRAL]'
    },
    {
      id: 5,
      title: 'Identidade Visual - Gedde Mack',
      shortDesc: 'Sistema de identidade visual completo para grupo de pesquisa',
      fullDesc: 'Como membro ativo do Grupo de Estudos de Direito Desportivo Empresarial do Mackenzie, participei na criação de artes, posts e edição de vídeos. Formulei uma nova identidade visual completa para o grupo: paleta de cores, fontes, padronagem e um novo logo que refletisse a modernidade e profissionalismo do grupo. O sistema visual foi aplicado em clipping semanal, posts padronizados e toda comunicação externa.',
      context: 'Contexto: Membro ativo do GEDDEM (Grupo de Estudos de Direito Desportivo Empresarial)',
      disciplines: ['Identidade Corporativa', 'Design de Posts', 'Edição de Vídeo'],
      image: '[JORNAL CLIPPING + POSTS PADRONIZADOS + SLIDE ANTES/DEPOIS LOGO]'
    }
  ]

  return (
    <div className="font-['Lexend'] scroll-smooth bg-[radial-gradient(circle_at_top_left,_rgba(255,142,0,0.16),_transparent_22%),radial-gradient(circle_at_top_right,_rgba(0,51,102,0.55),_transparent_28%),linear-gradient(180deg,_#001428_0%,_#002347_52%,_#001f3f_100%)] text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#001c38]/80 border-b border-[#003366]/60">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-wider text-white cursor-pointer hover:text-[#FF8E00] transition-colors">
            AZD
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-white/80 hover:text-[#FF8E00] transition-colors text-sm tracking-wide"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('projetos')}
              className="text-white/80 hover:text-[#FF8E00] transition-colors text-sm tracking-wide"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('musica')}
              className="text-white/80 hover:text-[#FF8E00] transition-colors text-sm tracking-wide"
            >
              Música
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-white/80 hover:text-[#FF8E00] transition-colors text-sm tracking-wide"
            >
              Contato
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 pt-16 bg-[radial-gradient(circle_at_top_left,_rgba(255,142,0,0.22),_transparent_24%),radial-gradient(circle_at_75%_20%,_rgba(0,51,102,0.68),_transparent_28%),linear-gradient(180deg,_rgba(0,36,71,0.92),_rgba(0,20,40,0.96))]">
        <div className="max-w-4xl text-center">
          <div className="mx-auto mb-8 h-px w-28 bg-gradient-to-r from-transparent via-[#FF8E00] to-transparent" />
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-tight">
            Antonio Zakzuk Duarte
          </h1>
          <p className="text-lg md:text-2xl text-white/80 mb-12 font-light tracking-wide">
            Publicitário em Formação | Social Media | Produção Musical
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('projetos')}
              className="px-8 py-4 bg-[#FF8E00] text-white font-semibold rounded-sm hover:bg-[#FD7702] transition-all duration-300 text-sm tracking-wider uppercase shadow-lg shadow-[#FF8E00]/20"
            >
              Explorar Projetos
            </button>
            <a
              href="/curriculo-antonio-zakzuk-duarte.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#FF8E00]/45 bg-[#001428]/55 text-white font-semibold rounded-sm hover:bg-[#002347]/80 hover:border-[#FF8E00]/80 transition-all duration-300 text-sm tracking-wider uppercase"
            >
              Baixar Curriculo
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3v12" />
                <path d="m7 10 5 5 5-5" />
                <path d="M4 20h16" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* SOBRE MIM */}
      <section id="sobre" className="py-24 px-6 border-t border-[#003366]/70 bg-[#001428]/35">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight">
            Quem Eu Sou
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Imagens */}
            <div className="space-y-6">
              <div className="aspect-square bg-gradient-to-br from-[#002347] to-[#001428] rounded-lg border border-[#003366] flex items-center justify-center overflow-hidden shadow-[0_0_0_1px_rgba(255,142,0,0.08)]">
                <span className="text-white/60 text-sm text-center px-4">[FOTO ANTONIO EM MUSEU - "A MORTE DE MARAT"]</span>
              </div>
              <div className="aspect-square bg-gradient-to-br from-[#001f3f] via-[#002347] to-[#001428] rounded-lg border border-[#FF8E00]/40 flex items-center justify-center overflow-hidden shadow-[0_0_0_1px_rgba(0,51,102,0.2)]">
                <span className="text-white/60 text-sm text-center px-4">[COSTAS CAMISETA "POST ARCHIVE SPORTSWEAR APPAREL FROM LONDON"]</span>
              </div>
            </div>

            {/* Biografia */}
            <div>
              <h3 className="text-3xl font-semibold text-white mb-8 leading-tight">
                Criatividade, Inovação e Detalhismo
              </h3>
              <div className="space-y-6 text-white/85 leading-relaxed text-base">
                <p>
                  Sou Antonio Zakzuk Duarte, publicitário em formação, apaixonado por criatividade e inovação. Minha trajetória combina habilidades em <span className="text-white font-semibold">produção musical, design gráfico e manipulação de imagens</span>, sempre buscando transformar ideias em experiências impactantes.
                </p>
                <p>
                  Tenho um olhar <span className="text-white font-semibold">detalhista e técnico</span>, que une estética e função. Isso seja compondo, aplicando designs em mockups ou desenvolvendo conceitos visuais que comunicam com precisão.
                </p>
                <p>
                  Aqui, você vai encontrar projetos que refletem minha <span className="text-white font-semibold">dedicação, curiosidade e a vontade constante de explorar novas possibilidades criativas</span>. Cada trabalho representa uma jornada de aprendizado e inovação, desde campanhas integradas até identidades visuais robustas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="py-24 px-6 border-t border-[#003366]/70 bg-[linear-gradient(180deg,_rgba(0,31,63,0.32),_rgba(0,20,40,0.08))]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Meus Projetos
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Aqui incluo meus projetos tanto pessoais quanto feitos em aulas na faculdade, que refletem minhas ideias, gostos, curiosidade e a vontade constante de explorar novas possibilidades criativas.
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, idx) => (
              <div key={project.id} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-start ${idx % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                {/* Imagem */}
                <div className={`flex items-center justify-center ${idx % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div className={`w-full aspect-square rounded-lg border flex items-center justify-center overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 ${idx % 2 === 0 ? 'bg-gradient-to-br from-[#002347] via-[#001f3f] to-[#001428] border-[#003366] hover:border-[#FF8E00]' : 'bg-gradient-to-br from-[#001f3f] via-[#002347] to-[#003366] border-[#FF8E00]/35 hover:border-[#FF8E00]'}`}>
                    <span className="text-white/60 text-sm text-center">{project.image}</span>
                  </div>
                </div>

                {/* Conteúdo */}
                <div className={`${idx % 2 === 1 ? 'md:col-start-1' : ''}`}>
                  <div className="mb-4">
                    <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">
                      {project.title}
                    </h3>
                    <p className={`text-sm uppercase tracking-wider ${idx % 2 === 0 ? 'text-[#FF8E00]/90' : 'text-white/60'}`}>
                      {project.context}
                    </p>
                  </div>

                  <p className="text-white/80 leading-relaxed mb-6">
                    {project.shortDesc}
                  </p>

                  <button
                    onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                    className={`transition-colors mb-6 text-sm tracking-wider uppercase font-semibold ${idx % 2 === 0 ? 'text-[#FF8E00] hover:text-[#FD7702]' : 'text-[#FFD29A] hover:text-white'}`}
                  >
                    {expandedProject === project.id ? '» Menos Detalhes' : '» Mais Detalhes'}
                  </button>

                  {expandedProject === project.id && (
                    <div className={`rounded-lg p-6 mb-6 border ${idx % 2 === 0 ? 'bg-[#001428]/70 border-[#003366]' : 'bg-[#002347]/70 border-[#FF8E00]/30'}`}>
                      <p className="text-white/85 leading-relaxed text-base">
                        {project.fullDesc}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {project.disciplines.map((disc) => (
                      <span key={disc} className={`px-3 py-1 text-white text-xs rounded-full tracking-wider border ${idx % 2 === 0 ? 'bg-[#003366] border-[#FF8E00]/30' : 'bg-[#FF8E00]/15 border-[#FF8E00]/25'}`}>
                        {disc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÚSICA E CRIATIVIDADE */}
      <section id="musica" className="py-24 px-6 bg-[linear-gradient(180deg,_rgba(0,36,71,0.55),_rgba(0,20,40,0.92))] border-t border-[#003366]/70">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Imagens */}
            <div className="space-y-6">
              <div className="aspect-square bg-gradient-to-br from-[#001428] via-[#002347] to-[#003366] rounded-lg border border-[#003366] flex items-center justify-center overflow-hidden">
                <span className="text-white/60 text-sm text-center px-4">[CAPA CD/DVD "WE'VE BEEN HERE BEFORE" - VAPORWAVE ROXO]</span>
              </div>
              <div className="aspect-square bg-gradient-to-br from-[#FF8E00]/15 via-[#001f3f] to-[#002347] rounded-lg border border-[#FF8E00]/30 flex items-center justify-center overflow-hidden">
                <span className="text-white/60 text-sm text-center px-4">[LOGIC PRO - INTERFACE COM MÚLTIPLAS PISTAS GRAVADAS]</span>
              </div>
            </div>

            {/* Conteúdo */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
                Música & Criatividade
              </h2>
              <div className="space-y-6 text-white/85 leading-relaxed text-base">
                <p>
                  Além de tudo exibido, também componho e faço minhas próprias músicas no software <span className="text-white font-semibold">Logic Pro</span> da Apple. Toco <span className="text-white font-semibold">piano desde os meus 6 anos</span>, o que moldou minha percepção rítmica e harmônica.
                </p>
                <p>
                  Minha produção musical explora diferentes contextos e gêneros, desde compositores experimentais até arranjos contemplativos. A música informa meu trabalho visual - ritmo, harmonia, proporção e emoção são elementos que transfero para o design.
                </p>
                <p>
                  Aqui também reúno minhas criações pessoais, feitas por diversão no meu tempo livre, fora do âmbito institucional, em diferentes contextos criativos. Cada track é uma exploração sonora que complementa minha identidade profissional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER / CONTATO */}
      <section id="contato" className="relative overflow-hidden py-24 px-6 border-t border-[#003366]/70 bg-[linear-gradient(180deg,_rgba(0,31,63,0.55),_rgba(0,20,40,0.95))]">
        <div className="pointer-events-none absolute -top-24 -left-16 h-64 w-64 rounded-full bg-[#FF8E00]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-[#003366]/45 blur-3xl" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[#FF8E00] uppercase tracking-[0.2em] text-xs mb-4">Contato</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
               Entre em contato comigo!
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-xl">
              Tenho interesse em projetos que unem criatividade, estratégia e execução impecável. Se você quer colaborar ou tem uma oportunidade, envie uma mensagem e eu retorno em breve.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${contactEmail}`}
                className="group flex items-center gap-4 rounded-xl border border-[#003366] bg-[#001428]/55 px-5 py-4 hover:border-[#FF8E00]/70 hover:bg-[#002347]/75 transition-all duration-300"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF8E00]/20 text-[#FF8E00]">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 6h16v12H4z" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </span>
                <span>
                  <span className="block text-white font-semibold">E-mail</span>
                  <span className="block text-white/65 text-sm group-hover:text-white/85 transition-colors">{contactEmail}</span>
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/antoniozakzukduarte/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-[#003366] bg-[#001428]/55 px-5 py-4 hover:border-[#FF8E00]/70 hover:bg-[#002347]/75 transition-all duration-300"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF8E00]/20 text-[#FF8E00]">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.96 1.96 0 1 0 5.3 6.9 1.96 1.96 0 0 0 5.25 3ZM20.44 13.55c0-3.12-1.67-4.57-3.9-4.57-1.8 0-2.6.99-3.04 1.69V8.5h-3.38V20h3.38v-6.15c0-1.62.31-3.2 2.31-3.2 1.97 0 2 1.84 2 3.3V20h3.37v-6.45Z" />
                  </svg>
                </span>
                <span>
                  <span className="block text-white font-semibold">LinkedIn</span>
                  <span className="block text-white/65 text-sm group-hover:text-white/85 transition-colors">linkedin.com</span>
                </span>
              </a>

              <a
                href="https://wa.me/5511994900765"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-[#003366] bg-[#001428]/55 px-5 py-4 hover:border-[#FF8E00]/70 hover:bg-[#002347]/75 transition-all duration-300"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF8E00]/20 text-[#FF8E00]">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d="M20.52 3.48A11.82 11.82 0 0 0 12.06.02C5.6.02.33 5.29.33 11.76c0 2.06.54 4.08 1.56 5.86L.25 23.98l6.53-1.71a11.77 11.77 0 0 0 5.28 1.26h.01c6.46 0 11.73-5.27 11.73-11.74 0-3.13-1.22-6.08-3.28-8.31Zm-8.46 18.1h-.01a9.84 9.84 0 0 1-5.01-1.37l-.36-.22-3.87 1.01 1.03-3.78-.24-.39a9.83 9.83 0 0 1-1.5-5.23c0-5.44 4.42-9.86 9.86-9.86 2.64 0 5.12 1.03 6.99 2.9a9.81 9.81 0 0 1 2.89 6.98c0 5.44-4.43 9.86-9.78 9.96Zm5.4-7.38c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.23-.64.08-.3-.15-1.25-.46-2.37-1.47-.88-.78-1.47-1.74-1.65-2.03-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.67-1.61-.91-2.2-.24-.57-.49-.49-.67-.5h-.57c-.2 0-.53.08-.8.38-.27.3-1.03 1-.1 2.44.93 1.45 1.33 2.14 2.86 3.47 1.54 1.33 2.55 1.76 3.47 2.08.92.32 1.76.27 2.42.16.74-.11 1.76-.72 2.01-1.42.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35Z" />
                  </svg>
                </span>
                <span>
                  <span className="block text-white font-semibold">WhatsApp</span>
                  <span className="block text-white/65 text-sm group-hover:text-white/85 transition-colors">+55 11 99490-0765</span>
                </span>
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-[#003366] bg-[#001428]/65 backdrop-blur-sm p-6 md:p-8 shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
            <h3 className="text-white text-2xl font-semibold mb-2">Envie uma mensagem</h3>
            <p className="text-white/65 text-sm mb-6">Preencha os campos e vamos conversar sobre seu projeto.</p>

            <form ref={contactFormRef} className="space-y-5" onSubmit={handleContactSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block">
                  <span className="block text-white/75 text-xs uppercase tracking-[0.18em] mb-2">Nome</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    className="w-full rounded-lg border border-[#003366] bg-[#002347]/45 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-[#FF8E00] focus:ring-2 focus:ring-[#FF8E00]/20 transition-all"
                  />
                </label>
                <label className="block">
                  <span className="block text-white/75 text-xs uppercase tracking-[0.18em] mb-2">E-mail</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="seuemail@gmail.com"
                    className="w-full rounded-lg border border-[#003366] bg-[#002347]/45 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-[#FF8E00] focus:ring-2 focus:ring-[#FF8E00]/20 transition-all"
                  />
                </label>
              </div>

              <label className="block">
                <span className="block text-white/75 text-xs uppercase tracking-[0.18em] mb-2">Mensagem</span>
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Conte brevemente sobre sua ideia ou projeto..."
                  className="w-full rounded-lg border border-[#003366] bg-[#002347]/45 px-4 py-3 text-white placeholder:text-white/35 outline-none focus:border-[#FF8E00] focus:ring-2 focus:ring-[#FF8E00]/20 transition-all resize-none"
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg bg-[#FF8E00] text-white font-semibold uppercase tracking-wider text-sm hover:bg-[#FD7702] transition-all duration-300 shadow-lg shadow-[#FF8E00]/25"
              >
                Enviar mensagem
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>

              {contactStatus ? (
                <p className="text-sm text-white/70">{contactStatus}</p>
              ) : null}
            </form>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <footer className="py-8 px-6 border-t border-[#003366]/70 text-center text-white/60 text-sm tracking-wide bg-[#001428]/40">
        <p>© 2026 Antonio Zakzuk Duarte. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default App
