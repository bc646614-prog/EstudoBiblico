/**
 * Conteúdo dos Ebooks - Estudos Bíblicos para Pregação
 * Versões longas e completas • Estilo pentecostal • Versículo a versículo
 */

const BOOKS = {
  salvacao: {
    title: "Salvação",
    subtitle: "João 3 · Romanos 3, 5 e 10 · Efésios 2 · 2 Coríntios 5",
    chapters: [
      {
        title: "Introdução",
        content: `
          <h1>Salvação</h1>
          <p class="subtitle">Estudo Completo para Pregação — Versículo a Versículo</p>
          <div class="intro">
            <p>A salvação é o tema central de toda a Bíblia. Desde Gênesis 3, quando o pecado entrou no mundo, até Apocalipse 22, a Escritura revela o plano de Deus para resgatar o homem perdido. Não existe mensagem mais importante, mais urgente e mais gloriosa do que esta: <strong>Jesus Cristo salva pecadores</strong>.</p>
            <p>Neste estudo veremos: (1) a necessidade da salvação; (2) a impossibilidade de o homem se salvar a si mesmo; (3) a obra completa de Cristo; (4) as condições para receber a salvação; (5) os resultados da salvação; e (6) a urgência de decidir.</p>
            <p><strong>Textos-chave:</strong> João 3:16-18 · Romanos 3:23-26 · Romanos 5:6-11 · Romanos 10:9-13 · Efésios 2:1-10 · 2 Coríntios 5:17-21</p>
          </div>
        `
      },
      {
        title: "1. A Necessidade da Salvação",
        content: `
          <h2>1. A Necessidade da Salvação</h2>
          <p>Antes de apresentar o remédio, a Bíblia faz o diagnóstico. Sem compreender a gravidade do pecado, a salvação parece opcional.</p>

          <div class="verse">
            <strong>Romanos 3:23</strong><br>
            “Porque todos pecaram e destituídos estão da glória de Deus.”
          </div>
          <div class="explanation">
            <p><strong>Todos pecaram.</strong> Não há exceção de raça, classe social, moralidade ou religião. O verbo no aoristo aponta para o fato consumado: a humanidade inteira está sob a sentença do pecado. “Destituídos” (hysteréō) significa “ficar aquém”, “carecer”. Perdemos a glória de Deus — a comunhão, a semelhança e a presença dEle.</p>
            <p><strong>Aplicação:</strong> Não existe “bom o suficiente”. Comparar-se com outros pecadores não ajuda. O padrão é a glória de Deus.</p>
          </div>

          <div class="verse">
            <strong>Romanos 3:10-12</strong><br>
            “Como está escrito: Não há um justo, nem um sequer. Não há ninguém que entenda; não há ninguém que busque a Deus. Todos se extraviaram e juntamente se fizeram inúteis. Não há quem faça o bem, não há nem um só.”
          </div>
          <div class="explanation">
            <p>Paulo cita o Antigo Testamento para provar que a corrupção é total: intelecto (não entendem), vontade (não buscam) e conduta (não fazem o bem). O homem natural está espiritualmente morto e incapaz de se salvar.</p>
          </div>

          <div class="verse">
            <strong>Efésios 2:1-3</strong><br>
            “Ele vos deu vida, estando vós mortos nos vossos delitos e pecados, nos quais andastes outrora, segundo o curso deste mundo, segundo o príncipe da potestade do ar, do espírito que agora opera nos filhos da desobediência; entre os quais todos nós também antes andávamos nos desejos da nossa carne, fazendo a vontade da carne e dos pensamentos; e éramos por natureza filhos da ira, como também os demais.”
          </div>
          <div class="explanation">
            <p>Três realidades terríveis: (1) <strong>Mortos</strong> espiritualmente — não doentes, mortos; (2) <strong>Andávamos</strong> segundo o mundo e sob o domínio de Satanás; (3) <strong>Filhos da ira</strong> por natureza. A ira de Deus não é temperamento; é a reação santa e justa de Deus contra o pecado.</p>
          </div>

          <div class="verse">
            <strong>Romanos 6:23a</strong><br>
            “Porque o salário do pecado é a morte...”
          </div>
          <div class="explanation">
            <p>O pecado paga salário: morte física, espiritual e eterna (separação definitiva de Deus). Não é exagero; é justiça.</p>
          </div>
        `
      },
      {
        title: "2. A Impossibilidade das Obras",
        content: `
          <h2>2. A Impossibilidade de Salvação pelas Obras</h2>

          <div class="verse">
            <strong>Efésios 2:8-9</strong><br>
            “Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus. Não vem das obras, para que ninguém se glorie.”
          </div>
          <div class="explanation">
            <p>A salvação é 100% graça. “Dom” (dōron) = presente. Se fosse por obras, o homem poderia se gloriar. Deus removeu toda base de orgulho humano. A fé não é mérito; é a mão vazia que recebe o presente.</p>
          </div>

          <div class="verse">
            <strong>Tito 3:5</strong><br>
            “Não por obras de justiça que houvéssemos feito, mas segundo a sua misericórdia, ele nos salvou pela lavagem da regeneração e renovação do Espírito Santo.”
          </div>
          <div class="explanation">
            <p>Mesmo as “obras de justiça” humanas não salvam. A salvação vem da misericórdia de Deus, pela regeneração (novo nascimento) e renovação do Espírito.</p>
          </div>

          <div class="verse">
            <strong>Isaías 64:6</strong><br>
            “Mas todos nós somos como o imundo, e todas as nossas justiças como trapo da imundícia...”
          </div>
          <div class="explanation">
            <p>As melhores obras do homem natural, diante da santidade de Deus, são como trapos imundos. Isso humilha o orgulho religioso.</p>
          </div>

          <div class="verse">
            <strong>Romanos 3:20</strong><br>
            “Porquanto pela lei ninguém será justificado diante dele, pois pela lei vem o pleno conhecimento do pecado.”
          </div>
          <div class="explanation">
            <p>A lei não salva; a lei revela o pecado. É como um espelho que mostra a sujeira, mas não lava. O propósito da lei é conduzir o pecador a Cristo (Gálatas 3:24).</p>
          </div>
        `
      },
      {
        title: "3. A Obra de Cristo",
        content: `
          <h2>3. A Obra Completa de Cristo</h2>

          <div class="verse">
            <strong>João 3:16</strong><br>
            “Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.”
          </div>
          <div class="explanation">
            <p>O motivo é o amor de Deus. “De tal maneira” (houtōs) aponta para a intensidade e a forma do amor: Ele <strong>deu</strong> o Filho. A condição é uma só: crer. O resultado é duplo: não perecer + ter vida eterna.</p>
          </div>

          <div class="verse">
            <strong>Romanos 5:6-8</strong><br>
            “Porque Cristo, quando ainda éramos fracos, morreu a seu tempo pelos ímpios. Porque dificilmente alguém morrerá por um justo; pois poderá ser que pelo homem bom alguém ouse morrer. Mas Deus prova o seu amor para conosco em que Cristo morreu por nós, sendo nós ainda pecadores.”
          </div>
          <div class="explanation">
            <p>Cristo morreu por nós quando ainda éramos: fracos, ímpios e pecadores. Não esperou melhoria moral. O amor de Deus é demonstrado na cruz, não em sentimentos vagos.</p>
          </div>

          <div class="verse">
            <strong>2 Coríntios 5:21</strong><br>
            “Àquele que não conheceu pecado, o fez pecado por nós, para que nele fôssemos feitos justiça de Deus.”
          </div>
          <div class="explanation">
            <p>A grande troca (substituição penal): Jesus, que nunca pecou, foi tratado como pecado; nós, que só pecamos, somos tratados como justiça de Deus. Esta é a base da justificação.</p>
          </div>

          <div class="verse">
            <strong>Romanos 3:24-26</strong><br>
            “Sendo justificados gratuitamente pela sua graça, pela redenção que há em Cristo Jesus, ao qual Deus propôs para propiciação pela fé no seu sangue, para demonstrar a sua justiça... para que ele seja justo e justificador daquele que tem fé em Jesus.”
          </div>
          <div class="explanation">
            <p>Três palavras fundamentais: <strong>Justificação</strong> (declarado justo), <strong>Redenção</strong> (comprado e libertado) e <strong>Propiciação</strong> (a ira de Deus é satisfeita no sangue de Cristo). Deus permanece justo e, ao mesmo tempo, justifica o pecador que crê.</p>
          </div>

          <div class="verse">
            <strong>1 Pedro 2:24</strong><br>
            “Levando ele mesmo em seu corpo os nossos pecados sobre o madeiro, para que, mortos para os pecados, pudéssemos viver para a justiça; e pelas suas feridas fostes sarados.”
          </div>
          <div class="explanation">
            <p>Cristo carregou pessoalmente os nossos pecados na cruz. O objetivo não é apenas perdão, mas uma vida nova: mortos para o pecado e vivos para a justiça.</p>
          </div>
        `
      },
      {
        title: "4. Como Receber a Salvação",
        content: `
          <h2>4. Como Receber a Salvação</h2>

          <div class="verse">
            <strong>Romanos 10:9-10</strong><br>
            “Se com a tua boca confessares ao Senhor Jesus, e em teu coração creres que Deus o ressuscitou dentre os mortos, serás salvo. Porque com o coração se crê para a justiça, e com a boca se faz confissão para a salvação.”
          </div>
          <div class="explanation">
            <p>Dois movimentos inseparáveis: <strong>crer no coração</strong> (confiança genuína na pessoa e obra de Cristo, especialmente na ressurreição) e <strong>confessar com a boca</strong> (reconhecer publicamente que Jesus é Senhor). A fé salvífica não é mera aceitação intelectual; é entrega confiante.</p>
          </div>

          <div class="verse">
            <strong>Romanos 10:13</strong><br>
            “Porque todo aquele que invocar o nome do Senhor será salvo.”
          </div>
          <div class="explanation">
            <p>“Todo aquele” — sem restrição de origem. “Invocar” é clamar em dependência e fé. A salvação está ao alcance de qualquer um que chame por Jesus.</p>
          </div>

          <div class="verse">
            <strong>João 1:12-13</strong><br>
            “Mas, a todos quantos o receberam, deu-lhes o poder de serem feitos filhos de Deus, aos que creem no seu nome; os quais não nasceram do sangue, nem da vontade da carne, nem da vontade do homem, mas de Deus.”
          </div>
          <div class="explanation">
            <p>Receber Jesus = crer no Seu nome. O resultado é adoção: tornamo-nos filhos de Deus. O novo nascimento não depende de linhagem, esforço humano ou decisão de outros; nasce de Deus.</p>
          </div>

          <div class="verse">
            <strong>Atos 16:30-31</strong><br>
            “Senhores, que é necessário que eu faça para me salvar? E eles disseram: Crê no Senhor Jesus Cristo e serás salvo, tu e a tua casa.”
          </div>
          <div class="explanation">
            <p>A resposta apostólica é simples e direta: <strong>Crê no Senhor Jesus Cristo</strong>. Não há lista de obras prévias. A fé em Cristo é suficiente.</p>
          </div>

          <div class="verse">
            <strong>Marcos 1:15</strong><br>
            “O tempo está cumprido, e o Reino de Deus está próximo. Arrependei-vos e crede no evangelho.”
          </div>
          <div class="explanation">
            <p>Jesus uniu arrependimento e fé. Arrepender-se é mudar de mente sobre o pecado e sobre si mesmo; crer é confiar em Cristo. Os dois andam juntos.</p>
          </div>
        `
      },
      {
        title: "5. Resultados da Salvação",
        content: `
          <h2>5. Resultados da Salvação</h2>

          <div class="verse">
            <strong>2 Coríntios 5:17</strong><br>
            “Assim que, se alguém está em Cristo, nova criatura é: as coisas antigas já passaram; eis que tudo se fez novo.”
          </div>
          <div class="explanation">
            <p>Salvação produz nova criação. Não é reforma; é regeneração. A identidade muda: estamos “em Cristo”.</p>
          </div>

          <div class="verse">
            <strong>Romanos 5:1</strong><br>
            “Sendo, pois, justificados pela fé, temos paz com Deus por nosso Senhor Jesus Cristo.”
          </div>
          <div class="explanation">
            <p>Paz com Deus — não apenas paz de espírito, mas fim da inimizade. Estamos reconciliados.</p>
          </div>

          <div class="verse">
            <strong>Romanos 8:1</strong><br>
            “Portanto, agora, nenhuma condenação há para os que estão em Cristo Jesus.”
          </div>
          <div class="explanation">
            <p>Nenhuma condenação. A sentença foi executada em Cristo. O crente está livre da culpa e da pena do pecado.</p>
          </div>

          <div class="verse">
            <strong>João 10:28-29</strong><br>
            “E dou-lhes a vida eterna, e nunca hão de perecer, e ninguém as arrebatará da minha mão. Meu Pai, que mas deu, é maior do que todos; e ninguém pode arrebatá-las da mão de meu Pai.”
          </div>
          <div class="explanation">
            <p>Segurança eterna. A salvação verdadeira não se perde, porque depende das mãos de Cristo e do Pai, não da nossa força.</p>
          </div>

          <div class="verse">
            <strong>Efésios 2:10</strong><br>
            “Porque somos feitura sua, criados em Cristo Jesus para as boas obras, as quais Deus preparou para que andássemos nelas.”
          </div>
          <div class="explanation">
            <p>As boas obras não salvam, mas são o caminho preparado por Deus para os salvos. Salvação produz frutos.</p>
          </div>
        `
      },
      {
        title: "6. Aplicação e Apelo",
        content: `
          <h2>6. Aplicação e Apelo</h2>
          <div class="application">
            <h3>Esboço para Pregação</h3>
            <ol>
              <li><strong>Diagnóstico:</strong> Todos pecaram e estão destituídos da glória de Deus (Rm 3:23).</li>
              <li><strong>Impossibilidade:</strong> Obras não salvam (Ef 2:8-9; Tt 3:5).</li>
              <li><strong>Remédio:</strong> Cristo morreu por pecadores e ressuscitou (Rm 5:8; 2 Co 5:21).</li>
              <li><strong>Condição:</strong> Arrependimento + fé em Jesus (Rm 10:9-10; Mc 1:15).</li>
              <li><strong>Resultado:</strong> Justificação, paz, nova criação, segurança e boas obras.</li>
              <li><strong>Urgência:</strong> “Hoje, se ouvirdes a sua voz, não endureçais o vosso coração” (Hb 3:15). “Eis agora o tempo aceitável, eis agora o dia da salvação” (2 Co 6:2).</li>
            </ol>
            <h3>Perguntas para o ouvinte</h3>
            <ul>
              <li>Você já reconheceu que é pecador diante de Deus?</li>
              <li>Você está tentando se salvar por obras ou religião?</li>
              <li>Você já recebeu Jesus Cristo pela fé?</li>
              <li>Sua vida mostra evidências de nova criação?</li>
            </ul>
            <p><strong>Apelo:</strong> “Se hoje você reconhece que precisa ser salvo, não adie. Com o coração, creia que Jesus morreu e ressuscitou por você. Com a boca, confesse-O como Senhor. Ele promete: todo aquele que invocar o nome do Senhor será salvo.”</p>
          </div>
          <p style="margin-top: 2rem; text-align: center; color: var(--text-muted); font-style: italic;">
            “Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.” — João 3:16
          </p>
        `
      }
    ]
  },

  arrependimento: {
    title: "Arrependimento",
    subtitle: "Atos 2 e 3 · 2 Coríntios 7 · Lucas 15 · Marcos 1",
    chapters: [
      {
        title: "Introdução",
        content: `
          <h1>Arrependimento</h1>
          <p class="subtitle">Estudo Completo para Pregação — Versículo a Versículo</p>
          <div class="intro">
            <p>O arrependimento é a porta de entrada do Reino de Deus. João Batista pregou: “Arrependei-vos”. Jesus começou Seu ministério dizendo: “Arrependei-vos e crede no evangelho”. Pedro, no dia de Pentecostes, respondeu à multidão: “Arrependei-vos”. Sem arrependimento genuíno não há conversão verdadeira, não há salvação bíblica e não há avivamento duradouro.</p>
            <p>Neste estudo veremos o significado bíblico do arrependimento, a diferença entre tristeza do mundo e tristeza segundo Deus, exemplos bíblicos, a relação com a fé e os frutos que o acompanham.</p>
            <p><strong>Textos-chave:</strong> Marcos 1:15 · Atos 2:37-38 · Atos 3:19 · 2 Coríntios 7:9-11 · Lucas 15:11-24 · Atos 26:20</p>
          </div>
        `
      },
      {
        title: "1. O Que É Arrependimento",
        content: `
          <h2>1. O Que É Arrependimento Bíblico</h2>

          <div class="verse">
            <strong>Marcos 1:15</strong><br>
            “O tempo está cumprido, e o Reino de Deus está próximo. Arrependei-vos e crede no evangelho.”
          </div>
          <div class="explanation">
            <p>A palavra grega <em>metanoeō</em> significa “mudar de mente”. Não é apenas sentir tristeza; é mudança de compreensão, de atitude e de direção. O arrependimento envolve intelecto (reconhecer o pecado), emoção (tristeza santa) e vontade (voltar-se para Deus).</p>
          </div>

          <div class="verse">
            <strong>2 Coríntios 7:10</strong><br>
            “Porque a tristeza segundo Deus opera arrependimento para a salvação, da qual ninguém se arrepende; mas a tristeza do mundo opera a morte.”
          </div>
          <div class="explanation">
            <p>Há duas tristezas: <strong>segundo Deus</strong> (produz arrependimento e salvação) e <strong>do mundo</strong> (produz morte). A tristeza do mundo é remorso, medo das consequências, vergonha social. A tristeza segundo Deus é dor por ter ofendido a um Deus santo e amoroso. Judas sentiu tristeza e se enforcou; Pedro chorou amargamente e foi restaurado.</p>
          </div>

          <div class="verse">
            <strong>2 Coríntios 7:11</strong><br>
            “Porque, quanto cuidado não produziu isto mesmo em vós que, segundo Deus, fostes contristados! Que defesa, que indignação, que temor, que saudades, que zelo, que vingança! Em tudo mostrastes estar puros neste negócio.”
          </div>
          <div class="explanation">
            <p>Paulo lista os frutos do verdadeiro arrependimento: cuidado, defesa da verdade, indignação contra o pecado, temor a Deus, saudade de Deus, zelo e disposição de corrigir o erro. Arrependimento genuíno é ativo, não passivo.</p>
          </div>
        `
      },
      {
        title: "2. O Exemplo do Filho Pródigo",
        content: `
          <h2>2. O Filho Pródigo — Modelo de Arrependimento (Lucas 15)</h2>

          <div class="verse">
            <strong>Lucas 15:17</strong><br>
            “E, caindo em si, disse: Quantos jornaleiros de meu pai têm abundância de pão, e eu aqui pereço de fome!”
          </div>
          <div class="explanation">
            <p><strong>“Caindo em si”</strong> — o primeiro passo é o despertar da consciência. O pecado cega; o Espírito convence. Ele compara a miséria atual com a abundância da casa do pai.</p>
          </div>

          <div class="verse">
            <strong>Lucas 15:18-19</strong><br>
            “Levantar-me-ei, e irei ter com meu pai, e dir-lhe-ei: Pai, pequei contra o céu e perante ti e já não sou digno de ser chamado teu filho; faze-me como um dos teus jornaleiros.”
          </div>
          <div class="explanation">
            <p>Três elementos: (1) <strong>Decisão</strong> — “levantar-me-ei”; (2) <strong>Confissão</strong> — “pequei contra o céu e perante ti”; (3) <strong>Humildade</strong> — reconhece que não merece o lugar de filho. O arrependimento verdadeiro inclui confissão específica e disposição de aceitar as consequências.</p>
          </div>

          <div class="verse">
            <strong>Lucas 15:20</strong><br>
            “E, levantando-se, foi para seu pai; e, quando ainda estava longe, viu-o seu pai, e se moveu de íntima compaixão, e, correndo, lançou-se-lhe ao pescoço e o beijou.”
          </div>
          <div class="explanation">
            <p>Ele não apenas planejou; <strong>levantou-se e foi</strong>. Arrependimento sem ação é ilusão. E o pai correu ao encontro — imagem do Deus que recebe o pecador arrependido com compaixão e festa.</p>
          </div>
        `
      },
      {
        title: "3. Arrependimento na Pregação Apostólica",
        content: `
          <h2>3. Arrependimento na Pregação Apostólica</h2>

          <div class="verse">
            <strong>Atos 2:37-38</strong><br>
            “E, ouvindo eles isto, compungiram-se em seu coração e perguntaram a Pedro e aos demais apóstolos: Que faremos, varões irmãos? E disse-lhes Pedro: Arrependei-vos, e cada um de vós seja batizado em nome de Jesus Cristo para perdão dos pecados, e recebereis o dom do Espírito Santo.”
          </div>
          <div class="explanation">
            <p>A pregação de Pedro sobre a cruz e a ressurreição produziu <strong>compunção</strong> (katenýgēsan — foram furados no coração). A primeira ordem é: arrependei-vos. Depois vem o batismo e a promessa do Espírito. O arrependimento é a resposta inicial ao evangelho.</p>
          </div>

          <div class="verse">
            <strong>Atos 3:19</strong><br>
            “Arrependei-vos, pois, e convertei-vos, para que sejam apagados os vossos pecados, e venham, assim, os tempos do refrigério pela presença do Senhor.”
          </div>
          <div class="explanation">
            <p>Arrependimento + conversão = pecados apagados + tempos de refrigério (avivamento, refrigério da presença de Deus). O arrependimento abre a porta para a visitação divina.</p>
          </div>

          <div class="verse">
            <strong>Atos 17:30</strong><br>
            “Mas Deus, não tendo em conta os tempos da ignorância, anuncia agora a todos os homens, em todo lugar, que se arrependam.”
          </div>
          <div class="explanation">
            <p>O arrependimento é comando universal. Deus ordena que todos, em todo lugar, se arrependam. Não é sugestão; é exigência do evangelho.</p>
          </div>

          <div class="verse">
            <strong>Atos 26:20</strong><br>
            “Antes, anunciei... que se arrependessem e se convertessem a Deus, praticando obras dignas de arrependimento.”
          </div>
          <div class="explanation">
            <p>Paulo resume sua pregação: arrependimento, conversão a Deus e <strong>obras dignas de arrependimento</strong>. O verdadeiro arrependimento produz mudança de vida visível.</p>
          </div>
        `
      },
      {
        title: "4. Frutos e Advertências",
        content: `
          <h2>4. Frutos do Arrependimento e Advertências</h2>

          <div class="verse">
            <strong>Mateus 3:8</strong><br>
            “Produzi, pois, frutos dignos de arrependimento.”
          </div>
          <div class="explanation">
            <p>João Batista exigiu frutos. Confissão de lábios sem mudança de conduta não é arrependimento bíblico.</p>
          </div>

          <div class="verse">
            <strong>Lucas 13:3, 5</strong><br>
            “Não, eu vos digo; antes, se não vos arrependerdes, todos de igual modo perecereis.”
          </div>
          <div class="explanation">
            <p>Jesus repetiu a advertência. Sem arrependimento, o destino é o perecimento. Não há caminho alternativo.</p>
          </div>

          <div class="verse">
            <strong>Apocalipse 2:5</strong><br>
            “Lembra-te, pois, de onde caíste, e arrepende-te, e pratica as primeiras obras; quando não, brevemente a ti virei e tirarei do seu lugar o teu castiçal, se não te arrependeres.”
          </div>
          <div class="explanation">
            <p>Mesmo a igreja é chamada ao arrependimento. Éfeso tinha ortodoxia e trabalho, mas abandonara o primeiro amor. Deus exige arrependimento também dos crentes.</p>
          </div>

          <div class="verse">
            <strong>Romanos 2:4</strong><br>
            “Ou desprezas tu as riquezas da sua benignidade, e paciência, e longanimidade, ignorando que a benignidade de Deus te leva ao arrependimento?”
          </div>
          <div class="explanation">
            <p>A bondade de Deus não deve ser desprezada; ela tem o propósito de conduzir ao arrependimento. Adiar o arrependimento é desprezar a graça.</p>
          </div>
        `
      },
      {
        title: "5. Aplicação e Apelo",
        content: `
          <h2>5. Aplicação e Apelo</h2>
          <div class="application">
            <h3>Esboço para Pregação</h3>
            <ol>
              <li><strong>Definição:</strong> Arrependimento = mudança de mente, coração e direção (metanoeō).</li>
              <li><strong>Diferença:</strong> Tristeza do mundo vs. tristeza segundo Deus (2 Co 7:10).</li>
              <li><strong>Exemplo:</strong> Filho pródigo — caiu em si, decidiu, confessou e voltou (Lc 15).</li>
              <li><strong>Pregação apostólica:</strong> “Arrependei-vos” foi a primeira ordem em Pentecostes e depois (At 2, 3, 17, 26).</li>
              <li><strong>Frutos:</strong> Obras dignas de arrependimento (Mt 3:8; At 26:20).</li>
              <li><strong>Advertência:</strong> Sem arrependimento, todos perecem (Lc 13:3).</li>
            </ol>
            <h3>Perguntas de exame</h3>
            <ul>
              <li>Sua tristeza pelo pecado é segundo Deus ou apenas remorso mundano?</li>
              <li>Você já “caiu em si” e decidiu voltar ao Pai?</li>
              <li>Há frutos visíveis de arrependimento na sua vida?</li>
              <li>Você está adiando o arrependimento, desprezando a benignidade de Deus?</li>
            </ul>
            <p><strong>Apelo:</strong> “Como o filho pródigo, caia em si hoje. Levante-se e vá para o Pai. Confesse: ‘Pequei contra o céu e perante ti’. Ele está pronto a correr ao seu encontro, abraçar e restaurar. Não adie. Arrependa-se e creia no evangelho.”</p>
          </div>
          <p style="margin-top: 2rem; text-align: center; color: var(--text-muted); font-style: italic;">
            “Arrependei-vos, pois, e convertei-vos, para que sejam apagados os vossos pecados.” — Atos 3:19
          </p>
        `
      }
    ]
  },

  espirito: {
    title: "O Espírito Santo",
    subtitle: "João 14–16 · Atos 1–2 · 1 Coríntios 12 · Gálatas 5",
    chapters: [
      {
        title: "Introdução",
        content: `
          <h1>O Espírito Santo</h1>
          <p class="subtitle">Estudo Completo para Pregação — Versículo a Versículo</p>
          <div class="intro">
            <p>O Espírito Santo é a Terceira Pessoa da Santíssima Trindade. Não é uma força impessoal, nem uma energia, nem uma “influência”. Ele é Deus, coigual ao Pai e ao Filho. Sem o Espírito Santo não há convicção de pecado, não há novo nascimento, não há santificação, não há poder para testemunhar e não há dons espirituais.</p>
            <p>Neste estudo veremos: a Pessoa do Espírito, Sua obra na salvação, o batismo no Espírito Santo, o enchimento contínuo, o fruto do Espírito e a relação com os dons.</p>
            <p><strong>Textos-chave:</strong> João 14:16-17, 26 · João 16:7-15 · Atos 1:4-8 · Atos 2:1-4, 38-39 · Efésios 5:18 · Gálatas 5:22-25</p>
          </div>
        `
      },
      {
        title: "1. A Pessoa do Espírito Santo",
        content: `
          <h2>1. A Pessoa do Espírito Santo</h2>

          <div class="verse">
            <strong>João 14:16-17</strong><br>
            “E eu rogarei ao Pai, e ele vos dará outro Consolador, para que fique convosco para sempre, o Espírito da verdade, que o mundo não pode receber, porque não o vê nem o conhece; mas vós o conheceis, porque habita convosco e estará em vós.”
          </div>
          <div class="explanation">
            <p>“Outro Consolador” — o grego <em>állos paráklētos</em> significa “outro da mesma espécie”. O Espírito é tão Pessoa e tão divino quanto Jesus. Paráklētos = aquele que é chamado para ao lado: advogado, consolador, ajudador, intercessor. Ele habita <strong>no</strong> crente permanentemente.</p>
          </div>

          <div class="verse">
            <strong>João 16:13-14</strong><br>
            “Mas, quando vier aquele Espírito da verdade, ele vos guiará em toda a verdade... Ele me glorificará, porque há de receber do que é meu e vo-lo há de anunciar.”
          </div>
          <div class="explanation">
            <p>O Espírito guia em toda a verdade e sempre glorifica a Cristo. Qualquer manifestação que tire a glória de Jesus e a coloque em homens, experiências ou “anjos” não procede do Espírito Santo.</p>
          </div>

          <div class="verse">
            <strong>Atos 5:3-4</strong><br>
            “Pedro disse: Ananias, por que encheu Satanás o teu coração, para que mentisses ao Espírito Santo...? Não mentiste aos homens, mas a Deus.”
          </div>
          <div class="explanation">
            <p>Mentir ao Espírito Santo é mentir a Deus. Isso prova a divindade plena do Espírito.</p>
          </div>
        `
      },
      {
        title: "2. A Obra do Espírito na Salvação",
        content: `
          <h2>2. A Obra do Espírito na Salvação</h2>

          <div class="verse">
            <strong>João 16:8</strong><br>
            “E, quando ele vier, convencerá o mundo do pecado, da justiça e do juízo.”
          </div>
          <div class="explanation">
            <p>Antes da conversão, o Espírito convence (eleénchō — repreende, expõe, convence). Convence do pecado (especialmente da incredulidade), da justiça (a de Cristo) e do juízo (Satanás já está julgado).</p>
          </div>

          <div class="verse">
            <strong>João 3:5-6</strong><br>
            “Jesus respondeu: Na verdade, na verdade te digo que aquele que não nascer da água e do Espírito não pode entrar no Reino de Deus. O que é nascido da carne é carne, e o que é nascido do Espírito é espírito.”
          </div>
          <div class="explanation">
            <p>O novo nascimento é obra do Espírito. Ninguém se regenera a si mesmo. É necessário nascer do Espírito para entrar no Reino.</p>
          </div>

          <div class="verse">
            <strong>Tito 3:5</strong><br>
            “Não por obras de justiça que houvéssemos feito, mas segundo a sua misericórdia, ele nos salvou pela lavagem da regeneração e renovação do Espírito Santo.”
          </div>
          <div class="explanation">
            <p>Regeneração e renovação são obras do Espírito Santo. A salvação é trinitária: planejada pelo Pai, realizada pelo Filho e aplicada pelo Espírito.</p>
          </div>

          <div class="verse">
            <strong>1 Coríntios 12:13</strong><br>
            “Pois todos nós fomos batizados em um Espírito, formando um corpo, quer judeus, quer gregos, quer servos, quer livres, e todos temos bebido de um Espírito.”
          </div>
          <div class="explanation">
            <p>No momento da conversão, o Espírito batiza o crente no corpo de Cristo e passa a habitar nele. Todo verdadeiro cristão tem o Espírito (Rm 8:9).</p>
          </div>
        `
      },
      {
        title: "3. O Batismo no Espírito Santo",
        content: `
          <h2>3. O Batismo no Espírito Santo</h2>

          <div class="verse">
            <strong>Atos 1:4-5, 8</strong><br>
            “E, estando com eles, determinou-lhes que não se ausentassem de Jerusalém, mas que esperassem a promessa do Pai, que (disse ele) de mim ouvistes. Porque, na verdade, João batizou com água, mas vós sereis batizados com o Espírito Santo, não muito depois destes dias... Mas recebereis a virtude do Espírito Santo, que há de vir sobre vós; e ser-me-eis testemunhas...”
          </div>
          <div class="explanation">
            <p>Jesus distinguiu o batismo nas águas do batismo no Espírito Santo. O propósito principal do batismo no Espírito é <strong>poder para ser testemunha</strong>. Não é apenas uma experiência emocional; é capacitação para a missão.</p>
          </div>

          <div class="verse">
            <strong>Atos 2:1-4</strong><br>
            “E, cumprindo-se o dia de Pentecostes, estavam todos reunidos no mesmo lugar... E todos foram cheios do Espírito Santo e começaram a falar em outras línguas, conforme o Espírito Santo lhes concedia que falassem.”
          </div>
          <div class="explanation">
            <p>No dia de Pentecostes houve vento, línguas como de fogo e o falar em outras línguas. A evidência inicial histórica foi o falar em línguas. O mesmo padrão aparece em Atos 10:44-46 (Casa de Cornélio) e Atos 19:6 (Éfeso).</p>
          </div>

          <div class="verse">
            <strong>Atos 2:38-39</strong><br>
            “E disse-lhes Pedro: Arrependei-vos, e cada um de vós seja batizado em nome de Jesus Cristo para perdão dos pecados, e recebereis o dom do Espírito Santo. Porque a promessa vos diz respeito a vós, a vossos filhos e a todos os que estão longe: a todos quantos o Senhor, nosso Deus, chamar.”
          </div>
          <div class="explanation">
            <p>A promessa do Espírito é para todas as gerações e para todos os que o Senhor chamar. Não se encerrou no primeiro século. Continua disponível hoje.</p>
          </div>

          <div class="verse">
            <strong>Lucas 11:13</strong><br>
            “Pois, se vós, sendo maus, sabeis dar boas dádivas aos vossos filhos, quanto mais dará o Pai celestial o Espírito Santo àqueles que lho pedirem?”
          </div>
          <div class="explanation">
            <p>O Espírito Santo é dado em resposta à oração. Deus deseja dar; nós precisamos pedir com fé e sede.</p>
          </div>
        `
      },
      {
        title: "4. Enchimento e Fruto do Espírito",
        content: `
          <h2>4. Enchimento Contínuo e Fruto do Espírito</h2>

          <div class="verse">
            <strong>Efésios 5:18</strong><br>
            “E não vos embriagueis com vinho, em que há contenda, mas enchei-vos do Espírito.”
          </div>
          <div class="explanation">
            <p>O verbo “enchei-vos” está no presente do imperativo passivo: “sede continuamente enchidos”. Não basta uma experiência passada. O crente precisa buscar o enchimento diário do Espírito. A contraste é com a embriaguez: em vez de ser controlado pelo vinho, seja controlado pelo Espírito.</p>
          </div>

          <div class="verse">
            <strong>Gálatas 5:22-23</strong><br>
            “Mas o fruto do Espírito é: amor, gozo, paz, longanimidade, benignidade, bondade, fé, mansidão, temperança. Contra estas coisas não há lei.”
          </div>
          <div class="explanation">
            <p>O “fruto” (singular) mostra unidade de caráter. São nove aspectos do caráter de Cristo produzidos pelo Espírito. Dons sem fruto são perigosos; fruto sem dons é incompleto. Ambos são necessários.</p>
          </div>

          <div class="verse">
            <strong>Gálatas 5:25</strong><br>
            “Se vivemos no Espírito, andemos também no Espírito.”
          </div>
          <div class="explanation">
            <p>Viver no Espírito (posição) deve resultar em andar no Espírito (prática diária). É uma caminhada contínua de dependência e obediência.</p>
          </div>

          <div class="verse">
            <strong>Romanos 8:14</strong><br>
            “Porque todos os que são guiados pelo Espírito de Deus, esses são filhos de Deus.”
          </div>
          <div class="explanation">
            <p>Uma evidência de filiação é ser guiado pelo Espírito. O Espírito conduz o crente em santidade, em decisões e no serviço.</p>
          </div>
        `
      },
      {
        title: "5. Aplicação e Apelo",
        content: `
          <h2>5. Aplicação e Apelo</h2>
          <div class="application">
            <h3>Esboço para Pregação</h3>
            <ol>
              <li><strong>Pessoa:</strong> O Espírito Santo é Deus, Consolador, Espírito da verdade.</li>
              <li><strong>Obra salvadora:</strong> Convence, regenera, habita e batiza no corpo de Cristo.</li>
              <li><strong>Batismo no Espírito:</strong> Poder para ser testemunha; promessa para todos (At 1:8; 2:39).</li>
              <li><strong>Enchimento:</strong> Comando contínuo (Ef 5:18).</li>
              <li><strong>Fruto:</strong> Caráter de Cristo (Gl 5:22-23).</li>
            </ol>
            <h3>Perguntas</h3>
            <ul>
              <li>Você já nasceu do Espírito?</li>
              <li>Você já buscou o batismo no Espírito Santo com poder?</li>
              <li>Você busca ser cheio do Espírito diariamente?</li>
              <li>O fruto do Espírito é visível na sua vida?</li>
            </ul>
            <p><strong>Apelo:</strong> “Se você ainda não recebeu o Espírito Santo com poder, peça. Se já recebeu, busque o enchimento diário. Renda-se ao controle do Espírito. Deixe que Ele produza o fruto de Cristo e o capacite para testemunhar.”</p>
          </div>
          <p style="margin-top: 2rem; text-align: center; color: var(--text-muted); font-style: italic;">
            “Mas recebereis a virtude do Espírito Santo, que há de vir sobre vós; e ser-me-eis testemunhas.” — Atos 1:8
          </p>
        `
      }
    ]
  },

  poder: {
    title: "Poder do Alto",
    subtitle: "Atos 1:8 · Lucas 24:49 · Marcos 16 · 1 Coríntios 2",
    chapters: [
      {
        title: "Introdução",
        content: `
          <h1>Poder do Alto</h1>
          <p class="subtitle">Estudo Completo para Pregação — Versículo a Versículo</p>
          <div class="intro">
            <p>A igreja nasceu em poder. Não nasceu de estratégias humanas, de marketing ou de recursos financeiros. Nasceu quando o Espírito Santo desceu sobre homens e mulheres ordinários e os transformou em testemunhas ousadas. Jesus ordenou: “Ficai em Jerusalém até que do alto sejais revestidos de poder”. Sem esse poder, a igreja se torna apenas mais uma instituição religiosa.</p>
            <p>Neste estudo veremos a promessa do poder, o propósito do poder, os sinais que acompanham, exemplos no livro de Atos e como buscar e andar nesse poder hoje.</p>
            <p><strong>Textos-chave:</strong> Lucas 24:49 · Atos 1:8 · Marcos 16:15-20 · 1 Coríntios 2:4-5 · Atos 4:31 · Zacarias 4:6</p>
          </div>
        `
      },
      {
        title: "1. A Promessa do Poder",
        content: `
          <h2>1. A Promessa do Poder</h2>

          <div class="verse">
            <strong>Lucas 24:49</strong><br>
            “E eis que sobre vós envio a promessa de meu Pai; ficai, porém, na cidade de Jerusalém, até que do alto sejais revestidos de poder.”
          </div>
          <div class="explanation">
            <p>“Revestidos de poder” (endusēsthe ex hypsous dýnamin) = vestir-se de poder vindo do alto. É como colocar uma capa. O poder não vem de dentro do homem; desce do alto. Jesus mandou esperar. A pressa humana não substitui a capacitação divina.</p>
          </div>

          <div class="verse">
            <strong>Atos 1:8</strong><br>
            “Mas recebereis a virtude do Espírito Santo, que há de vir sobre vós; e ser-me-eis testemunhas tanto em Jerusalém como em toda a Judeia e Samaria e até aos confins da terra.”
          </div>
          <div class="explanation">
            <p><strong>Dýnamis</strong> = poder dinâmico, capacidade milagrosa (daí “dinamite”). O propósito não é entretenimento nem status; é <strong>ser testemunhas</strong>. O poder tem endereço: Jerusalém → Judeia → Samaria → confins da terra. É poder missionário.</p>
          </div>

          <div class="verse">
            <strong>Zacarias 4:6</strong><br>
            “Não por força, nem por poder, mas pelo meu Espírito, diz o SENHOR dos Exércitos.”
          </div>
          <div class="explanation">
            <p>A obra de Deus não se realiza por força militar ou poder humano, mas pelo Espírito. Esta é a lei permanente do Reino.</p>
          </div>
        `
      },
      {
        title: "2. O Propósito do Poder",
        content: `
          <h2>2. O Propósito do Poder</h2>

          <div class="verse">
            <strong>Atos 1:8 (segunda parte)</strong><br>
            “...e ser-me-eis testemunhas...”
          </div>
          <div class="explanation">
            <p>O poder é para testemunho. Testemunha (mártys) é quem fala do que viu e experimentou, mesmo sob risco. O poder do Espírito transforma discípulos temerosos em mártires ousados.</p>
          </div>

          <div class="verse">
            <strong>1 Coríntios 2:4-5</strong><br>
            “A minha palavra e a minha pregação não consistiram em palavras persuasivas de sabedoria humana, mas em demonstração do Espírito e de poder, para que a vossa fé não se apoiasse em sabedoria dos homens, mas no poder de Deus.”
          </div>
          <div class="explanation">
            <p>Paulo recusou depender apenas de retórica. A fé dos ouvintes precisava se apoiar no poder de Deus. Pregação sem demonstração do Espírito tende a produzir fé humana, não fé divina.</p>
          </div>

          <div class="verse">
            <strong>Marcos 16:15, 20</strong><br>
            “E disse-lhes: Ide por todo o mundo e pregai o evangelho a toda criatura... E eles, saindo, pregaram por todas as partes, cooperando com eles o Senhor e confirmando a palavra com os sinais que se seguiram.”
          </div>
          <div class="explanation">
            <p>A Grande Comissão é acompanhada de sinais. O Senhor confirma a Palavra. O poder autentica a mensagem.</p>
          </div>
        `
      },
      {
        title: "3. Sinais que Acompanham",
        content: `
          <h2>3. Sinais que Acompanham os que Creem</h2>

          <div class="verse">
            <strong>Marcos 16:17-18</strong><br>
            “E estes sinais seguirão aos que crerem: em meu nome expulsarão os demônios; falarão novas línguas; pegarão nas serpentes; e, se beberem alguma coisa mortífera, não lhes fará dano algum; e porão as mãos sobre os enfermos e os curarão.”
          </div>
          <div class="explanation">
            <p>Jesus listou sinais: expulsão de demônios, línguas, proteção sobrenatural e curas. Estes sinais não são o centro; o centro é o evangelho. Mas os sinais seguem os que creem e confirmam a mensagem.</p>
          </div>

          <div class="verse">
            <strong>Atos 4:29-31</strong><br>
            “Agora, pois, ó Senhor, olha para as suas ameaças e concede aos teus servos que falem com toda a ousadia a tua palavra, enquanto estendes a mão para curar, e para que se façam sinais e prodígios pelo nome de teu santo Filho Jesus. E, tendo orado, moveu-se o lugar em que estavam reunidos; e todos foram cheios do Espírito Santo e anunciavam com ousadia a palavra de Deus.”
          </div>
          <div class="explanation">
            <p>A igreja primitiva orava por ousadia e por sinais. Deus respondeu com novo enchimento e ousadia. O poder e a ousadia andam juntos.</p>
          </div>

          <div class="verse">
            <strong>Hebreus 2:3-4</strong><br>
            “Como escaparemos nós, se não atentarmos para uma tão grande salvação, a qual, começando a ser anunciada pelo Senhor, foi-nos depois confirmada pelos que a ouviram, testificando também Deus com eles, por sinais, e milagres, e várias maravilhas, e dons do Espírito Santo, distribuídos por sua vontade?”
          </div>
          <div class="explanation">
            <p>Deus testifica com sinais, milagres, maravilhas e dons do Espírito. O poder confirma a salvação anunciada.</p>
          </div>
        `
      },
      {
        title: "4. Como Receber e Andar no Poder",
        content: `
          <h2>4. Como Receber e Andar no Poder</h2>

          <div class="verse">
            <strong>Atos 1:14</strong><br>
            “Todos estes perseveravam unânimes em oração e súplicas...”
          </div>
          <div class="explanation">
            <p>Antes do poder veio a perseverança unânime em oração. O aposento alto foi marcado por unidade e oração.</p>
          </div>

          <div class="verse">
            <strong>Lucas 11:9-13</strong><br>
            “Pedi, e dar-se-vos-á; buscai, e encontrareis; batei, e abrir-se-vos-á... Quanto mais dará o Pai celestial o Espírito Santo àqueles que lho pedirem?”
          </div>
          <div class="explanation">
            <p>Pedir, buscar e bater — persistência. O Pai deseja dar o Espírito Santo aos que pedem.</p>
          </div>

          <div class="application">
            <h3>Passos práticos</h3>
            <ol>
              <li><strong>Fome e sede</strong> — “Bem-aventurados os que têm fome e sede de justiça, porque eles serão fartos” (Mt 5:6).</li>
              <li><strong>Obediência</strong> — Ficar onde Jesus mandou; obedecer à revelação já dada.</li>
              <li><strong>Oração perseverante</strong> — Unânimes e contínuos.</li>
              <li><strong>Fé na promessa</strong> — Crer que Atos 2:39 vale para hoje.</li>
              <li><strong>Rendição</strong> — Entregar a vida ao controle do Espírito.</li>
              <li><strong>Ação</strong> — O poder se manifesta quando saímos para testemunhar e servir.</li>
            </ol>
          </div>
        `
      },
      {
        title: "5. Aplicação e Apelo",
        content: `
          <h2>5. Aplicação e Apelo</h2>
          <div class="application">
            <h3>Esboço para Pregação</h3>
            <ol>
              <li><strong>Promessa:</strong> Revestidos de poder do alto (Lc 24:49; At 1:8).</li>
              <li><strong>Propósito:</strong> Ser testemunhas até os confins da terra.</li>
              <li><strong>Sinais:</strong> Acompanham os que creem e confirmam a Palavra.</li>
              <li><strong>Condição:</strong> Oração, unidade, fome, fé e obediência.</li>
              <li><strong>Hoje:</strong> A mesma promessa continua válida.</li>
            </ol>
            <p><strong>Apelo:</strong> “Você está tentando fazer a obra de Deus apenas com talento humano? Jesus ordenou esperar o poder do alto. Busque o batismo no Espírito Santo. Busque o enchimento diário. Peça ousadia e sinais que confirmem a Palavra. A colheita é muita; o poder está disponível.”</p>
          </div>
          <p style="margin-top: 2rem; text-align: center; color: var(--text-muted); font-style: italic;">
            “Não por força, nem por poder, mas pelo meu Espírito, diz o SENHOR dos Exércitos.” — Zacarias 4:6
          </p>
        `
      }
    ]
  },

  avivamento: {
    title: "Avivamento",
    subtitle: "2 Crônicas 7:14 · Joel 2 · Atos 2 · Habacuque 3",
    chapters: [
      {
        title: "Introdução",
        content: `
          <h1>Avivamento</h1>
          <p class="subtitle">Estudo Completo para Pregação — Versículo a Versículo</p>
          <div class="intro">
            <p>Avivamento não é sinônimo de reunião movimentada, de música alta ou de multidão. Avivamento é a visitação soberana de Deus que traz arrependimento profundo, renovação da igreja, restauração do primeiro amor e salvação de pecadores. Começa no povo de Deus e se espalha para fora.</p>
            <p>Neste estudo veremos a definição bíblica de avivamento, as condições para o avivamento, o modelo de Pentecostes, os resultados e como buscar avivamento hoje.</p>
            <p><strong>Textos-chave:</strong> 2 Crônicas 7:14 · Habacuque 3:2 · Joel 2:12-17, 28-32 · Atos 2 · Salmo 85:6</p>
          </div>
        `
      },
      {
        title: "1. O Que É Avivamento",
        content: `
          <h2>1. O Que É Avivamento</h2>

          <div class="verse">
            <strong>Salmo 85:6</strong><br>
            “Não tornarás a vivificar-nos, para que o teu povo se alegre em ti?”
          </div>
          <div class="explanation">
            <p>“Vivificar” = tornar a dar vida. Avivamento é Deus dando vida de novo ao que está moribundo. É respiração divina sobre ossos secos (Ez 37).</p>
          </div>

          <div class="verse">
            <strong>Habacuque 3:2</strong><br>
            “Ouvi, SENHOR, a tua palavra e temi; aviva, ó SENHOR, a tua obra no meio dos anos, no meio dos anos faze-a conhecida; na tua ira lembra-te da misericórdia.”
          </div>
          <div class="explanation">
            <p>O clamor clássico do avivamento: “Aviva a tua obra”. Não pedimos que Deus abençoe os nossos planos; pedimos que Ele faça a obra dEle. No meio dos anos — agora, neste tempo.</p>
          </div>

          <div class="verse">
            <strong>Isaías 57:15</strong><br>
            “Porque assim diz o Alto e o Sublime, que habita na eternidade e cujo nome é Santo: Em um alto e santo lugar habito e também com o contrito e abatido de espírito, para vivificar o espírito dos abatidos e para vivificar o coração dos contritos.”
          </div>
          <div class="explanation">
            <p>Deus habita com o contrito e abatido. Avivamento começa com humildade e quebrantamento, não com orgulho espiritual.</p>
          </div>
        `
      },
      {
        title: "2. Condições para o Avivamento",
        content: `
          <h2>2. Condições para o Avivamento (2 Crônicas 7:14)</h2>

          <div class="verse">
            <strong>2 Crônicas 7:14</strong><br>
            “E se o meu povo, que se chama pelo meu nome, se humilhar, e orar, e buscar a minha face, e se converter dos seus maus caminhos, então, eu ouvirei dos céus, e perdoarei os seus pecados, e sararei a sua terra.”
          </div>
          <div class="explanation">
            <p>Quatro condições claras:</p>
            <p><strong>1. Humilhar-se</strong> — reconhecer a pobreza espiritual e a dependência de Deus.</p>
            <p><strong>2. Orar</strong> — clamor sincero, não orações rotineiras.</p>
            <p><strong>3. Buscar a face de Deus</strong> — buscar a Pessoa, não apenas as bênçãos.</p>
            <p><strong>4. Converter-se dos maus caminhos</strong> — arrependimento prático e abandono do pecado.</p>
            <p>Quando o povo de Deus faz isso, Ele promete: ouvir, perdoar e sarar.</p>
          </div>

          <div class="verse">
            <strong>Joel 2:12-13</strong><br>
            “Ainda assim, agora mesmo, diz o SENHOR: Convertei-vos a mim de todo o vosso coração; e isso com jejuns, e com choro, e com pranto. E rasgai o vosso coração, e não as vossas vestes, e convertei-vos ao SENHOR, vosso Deus...”
          </div>
          <div class="explanation">
            <p>Deus pede conversão de todo o coração, com jejum, choro e pranto. Rasgar o coração, não apenas as vestes — arrependimento interno, não teatralidade.</p>
          </div>
        `
      },
      {
        title: "3. O Avivamento de Pentecostes",
        content: `
          <h2>3. O Avivamento de Pentecostes (Atos 2)</h2>

          <div class="verse">
            <strong>Joel 2:28-29 (citado em Atos 2:16-18)</strong><br>
            “E há de ser que, depois, derramarei o meu Espírito sobre toda a carne, e vossos filhos e vossas filhas profetizarão, os vossos velhos terão sonhos, os vossos jovens terão visões. E também sobre os servos e sobre as servas, naqueles dias, derramarei o meu Espírito.”
          </div>
          <div class="explanation">
            <p>O derramamento do Espírito é a marca do avivamento. É para todos: filhos, filhas, velhos, jovens, servos e servas. Não é elitista.</p>
          </div>

          <div class="verse">
            <strong>Atos 2:1-4</strong><br>
            “E, cumprindo-se o dia de Pentecostes, estavam todos reunidos no mesmo lugar... E todos foram cheios do Espírito Santo...”
          </div>
          <div class="explanation">
            <p>Unidade (“todos no mesmo lugar”), espera obediente e enchimento coletivo. O avivamento de Pentecostes começou com um povo preparado.</p>
          </div>

          <div class="verse">
            <strong>Atos 2:37-41</strong><br>
            “E, ouvindo eles isto, compungiram-se em seu coração... Arrependei-vos... De sorte que foram batizados os que de bom grado receberam a sua palavra; e, naquele dia, agregaram-se quase três mil almas.”
          </div>
          <div class="explanation">
            <p>Resultado: convicção profunda, arrependimento, batismos e 3.000 convertidos em um dia. Avivamento verdadeiro produz conversões e não apenas emoção.</p>
          </div>

          <div class="verse">
            <strong>Atos 2:42-47</strong><br>
            “E perseveravam na doutrina dos apóstolos, e na comunhão, e no partir do pão, e nas orações... E todos os dias acrescentava o Senhor à igreja aqueles que se haviam de salvar.”
          </div>
          <div class="explanation">
            <p>Frutos duradouros: perseverança na Palavra, comunhão, oração, generosidade, alegria, favor do povo e crescimento diário. Avivamento não é fogo de palha.</p>
          </div>
        `
      },
      {
        title: "4. Como Buscar Avivamento Hoje",
        content: `
          <h2>4. Como Buscar Avivamento Hoje</h2>
          <div class="application">
            <h3>Caminhos bíblicos</h3>
            <ol>
              <li><strong>Humilhação e confissão</strong> — Começar pelos pecados da igreja (orgulho, divisão, mundanismo, oração fria).</li>
              <li><strong>Oração fervorosa e unânime</strong> — Atos 1:14; 4:31. Oração que não desiste.</li>
              <li><strong>Pregação da Palavra pura</strong> — Arrependimento, cruz, ressurreição, senhorio de Cristo.</li>
              <li><strong>Fome pelo Espírito</strong> — Buscar o derramamento e os dons.</li>
              <li><strong>Unidade e amor fraternal</strong> — “Vede quão bom e quão suave é que os irmãos vivam em união” (Sl 133).</li>
              <li><strong>Ousadia no testemunho</strong> — Sair do templo para as ruas e lares.</li>
              <li><strong>Santidade prática</strong> — Separação do pecado e consagração a Deus.</li>
            </ol>
            <h3>O que não é avivamento</h3>
            <ul>
              <li>Apenas emoção sem arrependimento.</li>
              <li>Apenas crescimento numérico sem transformação de vidas.</li>
              <li>Apenas manifestações sem fruto de caráter.</li>
              <li>Apenas reuniões sem impacto na sociedade.</li>
            </ul>
          </div>
        `
      },
      {
        title: "5. Aplicação e Apelo",
        content: `
          <h2>5. Aplicação e Apelo</h2>
          <div class="application">
            <h3>Esboço para Pregação</h3>
            <ol>
              <li><strong>Definição:</strong> Avivamento = Deus vivificando o Seu povo.</li>
              <li><strong>Condições:</strong> Humilhar, orar, buscar a face, converter-se (2 Cr 7:14).</li>
              <li><strong>Modelo:</strong> Pentecostes — unidade, oração, Espírito, Palavra, conversões, perseverança.</li>
              <li><strong>Resultados:</strong> Convicção, arrependimento, salvação, comunhão, crescimento.</li>
              <li><strong>Chamado:</strong> “Aviva a tua obra no meio dos anos” (Hc 3:2).</li>
            </ol>
            <p><strong>Apelo:</strong> “Igreja, vamos nos humilhar. Vamos orar de verdade. Vamos buscar a face de Deus e abandonar os maus caminhos. Peça comigo: ‘Aviva a tua obra, ó Senhor, no meio dos anos. Derrama o teu Espírito outra vez. Visita-nos com refrigério e poder.’”</p>
          </div>
          <p style="margin-top: 2rem; text-align: center; color: var(--text-muted); font-style: italic;">
            “Aviva, ó SENHOR, a tua obra no meio dos anos.” — Habacuque 3:2
          </p>
        `
      }
    ]
  },

  arrebatamento: {
    title: "Arrebatamento e Sinais",
    subtitle: "1 Tessalonicenses 4 · Mateus 24 · 1 Coríntios 15 · Tito 2",
    chapters: [
      {
        title: "Introdução",
        content: `
          <h1>Arrebatamento e Sinais dos Tempos</h1>
          <p class="subtitle">Estudo Completo para Pregação — Versículo a Versículo</p>
          <div class="intro">
            <p>A segunda vinda de Jesus Cristo é a “bem-aventurada esperança” da igreja (Tito 2:13). A Bíblia ensina que o Senhor voltará, os mortos em Cristo ressuscitarão, os vivos serão transformados e arrebatados, e haverá sinais que antecedem esses eventos. Este estudo prepara a igreja para viver em santidade, vigilância e expectativa.</p>
            <p><strong>Textos-chave:</strong> 1 Tessalonicenses 4:13-18 · 1 Coríntios 15:51-58 · Mateus 24 · Tito 2:11-14 · 1 João 3:2-3 · Apocalipse 22:12, 20</p>
          </div>
        `
      },
      {
        title: "1. O Arrebatamento da Igreja",
        content: `
          <h2>1. O Arrebatamento da Igreja</h2>

          <div class="verse">
            <strong>1 Tessalonicenses 4:16-17</strong><br>
            “Porque o mesmo Senhor descerá do céu com alarido, e com voz de arcanjo, e com a trombeta de Deus; e os que morreram em Cristo ressuscitarão primeiro; depois, nós, os que ficarmos vivos, seremos arrebatados juntamente com eles nas nuvens, a encontrar o Senhor nos ares, e assim estaremos para sempre com o Senhor.”
          </div>
          <div class="explanation">
            <p>Ordem dos eventos: (1) O Senhor desce do céu; (2) Os mortos em Cristo ressuscitam primeiro; (3) Os vivos em Cristo são transformados e arrebatados; (4) Todos se encontram com o Senhor nos ares; (5) Estaremos para sempre com Ele. É um evento súbito, glorioso e irreversível.</p>
          </div>

          <div class="verse">
            <strong>1 Coríntios 15:51-52</strong><br>
            “Eis aqui vos digo um mistério: Nem todos dormiremos, mas todos seremos transformados, num momento, num abrir e fechar de olhos, ante a última trombeta; porque a trombeta soará, e os mortos ressuscitarão incorruptíveis, e nós seremos transformados.”
          </div>
          <div class="explanation">
            <p>“Num momento” (en atomō) = em um átimo, indivisível. “Abrir e fechar de olhos” (rhipē ophthalmou) = um piscar. A transformação será instantânea. Corpos mortais e corruptíveis se tornarão imortais e incorruptíveis.</p>
          </div>

          <div class="verse">
            <strong>1 Tessalonicenses 4:18</strong><br>
            “Portanto, consolai-vos uns aos outros com estas palavras.”
          </div>
          <div class="explanation">
            <p>A doutrina do arrebatamento não é para gerar medo, mas consolação. É esperança viva para os que perderam entes queridos em Cristo e para os que enfrentam sofrimento.</p>
          </div>
        `
      },
      {
        title: "2. Sinais dos Tempos (Mateus 24)",
        content: `
          <h2>2. Sinais dos Tempos (Mateus 24)</h2>

          <div class="verse">
            <strong>Mateus 24:3</strong><br>
            “Dize-nos quando serão essas coisas e que sinal haverá da tua vinda e do fim do mundo?”
          </div>
          <div class="explanation">
            <p>Os discípulos perguntaram sobre os sinais. Jesus respondeu com uma série de sinais que seriam “princípio das dores” e depois intensificariam.</p>
          </div>

          <div class="verse">
            <strong>Mateus 24:6-8</strong><br>
            “E ouvireis de guerras e de rumores de guerras; olhai, não vos assusteis, porque é mister que isso aconteça, mas ainda não é o fim. Porquanto se levantará nação contra nação, e reino contra reino, e haverá fomes, e pestes, e terremotos, em vários lugares. Mas todas estas coisas são o princípio das dores.”
          </div>
          <div class="explanation">
            <p>Guerras, fomes, pestes (epidemias) e terremotos são “princípio das dores” — como dores de parto, que aumentam em frequência e intensidade até o nascimento.</p>
          </div>

          <div class="verse">
            <strong>Mateus 24:11-12</strong><br>
            “E surgirão muitos falsos profetas e enganarão a muitos. E, por se multiplicar a iniquidade, o amor de muitos se esfriará.”
          </div>
          <div class="explanation">
            <p>Falsos profetas e o esfriamento do amor. A multiplicação da iniquidade esfria o amor até de muitos crentes. Vigiar o coração é essencial.</p>
          </div>

          <div class="verse">
            <strong>Mateus 24:14</strong><br>
            “E este evangelho do Reino será pregado em todo o mundo, em testemunho a todas as nações, e então virá o fim.”
          </div>
          <div class="explanation">
            <p>A pregação global do evangelho é sinal e, ao mesmo tempo, missão. Enquanto esperamos, anunciamos.</p>
          </div>

          <div class="verse">
            <strong>Mateus 24:36, 42, 44</strong><br>
            “Mas daquele dia e hora ninguém sabe, nem os anjos do céu, mas unicamente meu Pai... Vigiai, pois, porque não sabeis a que hora há de vir o vosso Senhor... Por isso, estai vós apercebidos também, porque o Filho do Homem há de vir à hora em que não penseis.”
          </div>
          <div class="explanation">
            <p>Ninguém sabe o dia nem a hora. A postura correta é vigiar e estar preparado a qualquer momento. Não é especular datas; é viver pronto.</p>
          </div>
        `
      },
      {
        title: "3. Como Viver na Expectativa",
        content: `
          <h2>3. Como Viver na Expectativa da Volta de Cristo</h2>

          <div class="verse">
            <strong>Tito 2:11-13</strong><br>
            “Porque a graça de Deus se há manifestado, trazendo salvação a todos os homens, ensinando-nos que, renunciando à impiedade e às concupiscências mundanas, vivamos neste presente século sóbria, justa e piamente, aguardando a bem-aventurada esperança e o aparecimento da glória do grande Deus e nosso Senhor Jesus Cristo.”
          </div>
          <div class="explanation">
            <p>A graça ensina a renunciar à impiedade e a viver sóbria, justa e piamente, enquanto aguardamos a bem-aventurada esperança. A expectativa da volta de Jesus produz santidade prática.</p>
          </div>

          <div class="verse">
            <strong>1 João 3:2-3</strong><br>
            “Amados, agora somos filhos de Deus, e ainda não é manifesto o que havemos de ser. Mas sabemos que, quando ele se manifestar, seremos semelhantes a ele, porque assim como ele é o veremos. E qualquer que nele tem esta esperança purifica-se a si mesmo, como também ele é puro.”
          </div>
          <div class="explanation">
            <p>A esperança de ver Jesus e ser semelhante a Ele leva o crente a se purificar. Escatologia saudável produz ética e santidade.</p>
          </div>

          <div class="verse">
            <strong>2 Pedro 3:11-12</strong><br>
            “Havendo, pois, de perecer todas estas coisas, que pessoas convém que sejais em santo trato e piedade, aguardando e apressando-vos para a vinda do Dia de Deus...”
          </div>
          <div class="explanation">
            <p>A certeza do fim de todas as coisas nos leva a viver em santo trato e piedade, e a “apressar” a vinda — pela santidade, oração e evangelização.</p>
          </div>
        `
      },
      {
        title: "4. Aplicação e Apelo",
        content: `
          <h2>4. Aplicação e Apelo</h2>
          <div class="application">
            <h3>Esboço para Pregação</h3>
            <ol>
              <li><strong>Arrebatamento:</strong> Senhor desce, mortos ressuscitam, vivos são transformados e arrebatados (1 Ts 4:16-17).</li>
              <li><strong>Instantâneo:</strong> Num momento, num abrir e fechar de olhos (1 Co 15:52).</li>
              <li><strong>Sinais:</strong> Guerras, fomes, pestes, terremotos, falsos profetas, iniquidade, esfriamento do amor, evangelho global (Mt 24).</li>
              <li><strong>Vigilância:</strong> Ninguém sabe o dia nem a hora — vigiai (Mt 24:42).</li>
              <li><strong>Santidade:</strong> A esperança purifica (1 Jo 3:3; Tt 2:11-13).</li>
            </ol>
            <h3>Perguntas</h3>
            <ul>
              <li>Você está pronto para o arrebatamento?</li>
              <li>Sua vida reflete a expectativa da volta de Jesus?</li>
              <li>Você está anunciando o evangelho enquanto há tempo?</li>
              <li>Há algo que você não gostaria que o Senhor encontrasse em sua vida se viesse hoje?</li>
            </ul>
            <p><strong>Apelo:</strong> “Maranata! Ora vem, Senhor Jesus! Se Ele viesse nesta hora, você estaria preparado? Se há pecado a confessar, confesse. Se há alguém a quem pedir perdão, peça. Se ainda não entregou a vida a Cristo, entregue agora. A trombeta pode soar a qualquer momento.”</p>
          </div>
          <p style="margin-top: 2rem; text-align: center; color: var(--text-muted); font-style: italic;">
            “Aquele que testifica estas coisas diz: Certamente, cedo venho. Amém! Ora vem, Senhor Jesus!” — Apocalipse 22:20
          </p>
        `
      }
    ]
  },

  dons: {
    title: "Dons Espirituais",
    subtitle: "1 Coríntios 12–14 · Romanos 12 · Efésios 4 · 1 Pedro 4",
    chapters: [
      {
        title: "Introdução",
        content: `
          <h1>Dons Espirituais</h1>
          <p class="subtitle">Estudo Completo para Pregação — Versículo a Versículo</p>
          <div class="intro">
            <p>Os dons espirituais são capacitações sobrenaturais concedidas pelo Espírito Santo a cada crente para o bem comum da igreja e a edificação do corpo de Cristo. Paulo dedicou três capítulos (1 Coríntios 12–14) para corrigir abusos e ensinar o uso correto dos dons. O foco nunca é o prestígio individual, mas a unidade, o amor e o serviço.</p>
            <p><strong>Textos-chave:</strong> 1 Coríntios 12:1-11, 27-31 · 1 Coríntios 13 · 1 Coríntios 14:1-5, 26-33 · Romanos 12:6-8 · Efésios 4:11-16 · 1 Pedro 4:10-11</p>
          </div>
        `
      },
      {
        title: "1. Fundamentos (1 Co 12:1-7)",
        content: `
          <h2>1. Fundamentos sobre os Dons</h2>

          <div class="verse">
            <strong>1 Coríntios 12:1</strong><br>
            “Acerca dos dons espirituais, não quero, irmãos, que sejais ignorantes.”
          </div>
          <div class="explanation">
            <p>A ignorância sobre os dons produz abusos, medo ou desprezo. Deus quer que a igreja conheça e use corretamente os dons.</p>
          </div>

          <div class="verse">
            <strong>1 Coríntios 12:3</strong><br>
            “Portanto, vos quero fazer compreender que ninguém que fala pelo Espírito de Deus diz: Jesus é anátema! E ninguém pode dizer que Jesus é o Senhor, senão pelo Espírito Santo.”
          </div>
          <div class="explanation">
            <p>O teste fundamental de autenticidade: o Espírito sempre glorifica a Jesus como Senhor. Qualquer manifestação que diminua, rejeite ou rivalize com o senhorio de Cristo não procede do Espírito Santo.</p>
          </div>

          <div class="verse">
            <strong>1 Coríntios 12:4-6</strong><br>
            “Ora, há diversidade de dons, mas o Espírito é o mesmo. E há diversidade de ministérios, mas o Senhor é o mesmo. E há diversidade de operações, mas é o mesmo Deus que opera tudo em todos.”
          </div>
          <div class="explanation">
            <p>Diversidade de dons (charísmata), ministérios (diakoníai) e operações (energēmata), mas unidade na Trindade. O mesmo Espírito, o mesmo Senhor, o mesmo Deus. Não há hierarquia de valor entre os dons.</p>
          </div>

          <div class="verse">
            <strong>1 Coríntios 12:7</strong><br>
            “Mas a manifestação do Espírito é dada a cada um para o que for útil.”
          </div>
          <div class="explanation">
            <p>Todo crente recebe alguma manifestação do Espírito. O propósito é “o que for útil” — o bem comum, a edificação da igreja, não a autoexaltação.</p>
          </div>
        `
      },
      {
        title: "2. A Lista de Dons (1 Co 12:8-11)",
        content: `
          <h2>2. A Lista de Dons em 1 Coríntios 12:8-11</h2>

          <div class="verse">
            <strong>1 Coríntios 12:8-10</strong><br>
            “Porque a um, pelo Espírito, é dada a palavra da sabedoria; e a outro, pelo mesmo Espírito, a palavra da ciência; e a outro, pelo mesmo Espírito, a fé; e a outro, pelo mesmo Espírito, os dons de curar; e a outro, a operação de maravilhas; e a outro, a profecia; e a outro, o dom de discernir os espíritos; e a outro, a variedade de línguas; e a outro, a interpretação das línguas.”
          </div>
          <div class="explanation">
            <p><strong>Palavra de sabedoria:</strong> aplicação prática e sobrenatural da sabedoria de Deus em situações específicas.</p>
            <p><strong>Palavra de conhecimento:</strong> revelação de fatos ou verdades que o crente não poderia saber por meios naturais.</p>
            <p><strong>Fé:</strong> confiança especial, além da fé salvadora, para crer pelo impossível em situações concretas.</p>
            <p><strong>Dons de curar:</strong> capacitações para ministrar cura física (e às vezes emocional) em nome de Jesus.</p>
            <p><strong>Operação de maravilhas:</strong> milagres que transcendem as leis naturais.</p>
            <p><strong>Profecia:</strong> proclamação de mensagem de Deus para edificar, exortar e consolar (1 Co 14:3).</p>
            <p><strong>Discernimento de espíritos:</strong> capacidade de distinguir a origem espiritual de uma manifestação, mensagem ou influência.</p>
            <p><strong>Variedade de línguas:</strong> falar em idiomas não aprendidos, sob impulso do Espírito.</p>
            <p><strong>Interpretação de línguas:</strong> capacitar a igreja a entender a mensagem dada em línguas.</p>
          </div>

          <div class="verse">
            <strong>1 Coríntios 12:11</strong><br>
            “Mas um só e o mesmo Espírito opera todas essas coisas, repartindo particularmente a cada um como quer.”
          </div>
          <div class="explanation">
            <p>O Espírito distribui soberanamente. Não escolhemos os dons; recebemos o que Ele quer. Podemos e devemos buscar com zelo (1 Co 14:1), mas a distribuição final é dEle.</p>
          </div>
        `
      },
      {
        title: "3. Amor e Ordem (1 Co 13–14)",
        content: `
          <h2>3. Amor e Ordem no Uso dos Dons</h2>

          <div class="verse">
            <strong>1 Coríntios 13:1-2</strong><br>
            “Ainda que eu falasse as línguas dos homens e dos anjos e não tivesse amor, seria como o metal que soa ou como o sino que tine. E ainda que tivesse o dom de profecia e conhecesse todos os mistérios e toda a ciência, e ainda que tivesse toda a fé, de maneira tal que transportasse os montes, e não tivesse amor, nada seria.”
          </div>
          <div class="explanation">
            <p>Sem amor, os dons mais espetaculares não valem nada. O amor é o caminho excelente (1 Co 12:31). Dons sem caráter destroem; dons com amor edificam.</p>
          </div>

          <div class="verse">
            <strong>1 Coríntios 14:1</strong><br>
            “Segui o amor e procurai com zelo os dons espirituais, mas principalmente o de profetizar.”
          </div>
          <div class="explanation">
            <p>Devemos seguir o amor e, ao mesmo tempo, procurar com zelo os dons. Os dois não se excluem. A profecia é especialmente valorizada porque edifica a igreja inteira.</p>
          </div>

          <div class="verse">
            <strong>1 Coríntios 14:26, 33, 40</strong><br>
            “Que fareis, pois, irmãos? Quando vos ajuntais, cada um de vós tem salmo, tem doutrina, tem revelação, tem língua, tem interpretação. Faça-se tudo para edificação... Porque Deus não é Deus de confusão, senão de paz... Mas faça-se tudo decentemente e com ordem.”
          </div>
          <div class="explanation">
            <p>Princípios de uso: (1) Tudo para edificação; (2) Deus não é de confusão; (3) Decência e ordem. Os dons não autorizam desordem nem exibicionismo.</p>
          </div>
        `
      },
      {
        title: "4. Outras Listas e Aplicação",
        content: `
          <h2>4. Outras Listas e Aplicação</h2>

          <div class="verse">
            <strong>Romanos 12:6-8</strong><br>
            “De modo que, tendo diferentes dons, segundo a graça que nos é dada: se é profecia, seja ela segundo a medida da fé; se é ministério, seja em ministrar; se é ensinar, haja dedicação ao ensino; ou o que exorta, use esse dom em exortar; o que reparte, faça-o com liberalidade; o que preside, com cuidado; o que usa de misericórdia, com alegria.”
          </div>
          <div class="explanation">
            <p>Dons mais “práticos” e cotidianos: servir, ensinar, exortar, contribuir, liderar e exercer misericórdia. Todos são igualmente necessários.</p>
          </div>

          <div class="verse">
            <strong>Efésios 4:11-12</strong><br>
            “E ele mesmo deu uns para apóstolos, e outros para profetas, e outros para evangelistas, e outros para pastores e doutores, querendo o aperfeiçoamento dos santos, para a obra do ministério, para edificação do corpo de Cristo.”
          </div>
          <div class="explanation">
            <p>Dons ministeriais (ou de ofício) dados para equipar os santos. O objetivo é que todos os crentes façam a obra do ministério e o corpo seja edificado.</p>
          </div>

          <div class="verse">
            <strong>1 Pedro 4:10</strong><br>
            “Cada um administre aos outros o dom como o recebeu, como bons despenseiros da multiforme graça de Deus.”
          </div>
          <div class="explanation">
            <p>Somos administradores (despenseiros) dos dons. Devemos usá-los para servir aos outros, não para nos promover.</p>
          </div>

          <div class="application">
            <h3>Aplicação prática</h3>
            <ul>
              <li>Descubra e desenvolva o(s) dom(ns) que o Espírito lhe deu.</li>
              <li>Use os dons com amor e sob ordem.</li>
              <li>Busque com zelo, especialmente a profecia e os dons que edificam a igreja.</li>
              <li>Não despreze dons “simples” (serviço, misericórdia, contribuição).</li>
              <li>Lembre-se: o objetivo é a edificação do corpo e a glória de Cristo.</li>
            </ul>
          </div>
        `
      },
      {
        title: "5. Aplicação e Apelo",
        content: `
          <h2>5. Aplicação e Apelo</h2>
          <div class="application">
            <h3>Esboço para Pregação</h3>
            <ol>
              <li><strong>Fundamento:</strong> Não sejais ignorantes; o Espírito glorifica a Jesus; diversidade com unidade; dons para o bem comum.</li>
              <li><strong>Lista:</strong> Sabedoria, conhecimento, fé, curas, milagres, profecia, discernimento, línguas, interpretação.</li>
              <li><strong>Amor:</strong> Sem amor, nada sou (1 Co 13).</li>
              <li><strong>Ordem:</strong> Tudo para edificação, decentemente e com ordem.</li>
              <li><strong>Chamado:</strong> Cada um administre o dom que recebeu (1 Pe 4:10).</li>
            </ol>
            <p><strong>Apelo:</strong> “Você conhece os dons que o Espírito lhe deu? Está usando-os para edificar a igreja? Busque com zelo os dons espirituais, mas acima de tudo siga o amor. Peça a Deus que desperte e use os dons em você e na sua igreja para a glória de Cristo.”</p>
          </div>
          <p style="margin-top: 2rem; text-align: center; color: var(--text-muted); font-style: italic;">
            “A manifestação do Espírito é dada a cada um para o que for útil.” — 1 Coríntios 12:7
          </p>
        `
      }
    ]
  },

  batalha: {
    title: "Libertação & Batalha Espiritual",
    subtitle: "Efésios 6 · 2 Coríntios 10 · Tiago 4 · 1 Pedro 5",
    chapters: [
      {
        title: "Introdução",
        content: `
          <h1>Libertação &amp; Batalha Espiritual</h1>
          <p class="subtitle">Estudo Completo para Pregação — Versículo a Versículo</p>
          <div class="intro">
            <p>A vida cristã é uma batalha. Não contra pessoas, mas contra forças espirituais do mal. A libertação é a obra de Cristo que nos tira do domínio das trevas e nos transporta para o Reino do Filho (Cl 1:13). A batalha espiritual é a realidade contínua de resistir ao diabo, vestir a armadura de Deus e levar cativo todo pensamento à obediência de Cristo. Jesus já venceu; nós lutamos <em>a partir</em> da vitória, não <em>pela</em> vitória.</p>
            <p><strong>Textos-chave:</strong> Efésios 6:10-20 · 2 Coríntios 10:3-5 · Tiago 4:7 · 1 Pedro 5:8-9 · Colossenses 2:15 · 1 João 4:4</p>
          </div>
        `
      },
      {
        title: "1. A Realidade da Batalha",
        content: `
          <h2>1. A Realidade da Batalha Espiritual</h2>

          <div class="verse">
            <strong>Efésios 6:10-12</strong><br>
            “No demais, irmãos meus, fortalecei-vos no Senhor e na força do seu poder. Revesti-vos de toda a armadura de Deus, para que possais estar firmes contra as astutas ciladas do diabo. Porque não temos que lutar contra a carne e o sangue, mas, sim, contra os principados, contra as potestades, contra os príncipes das trevas deste século, contra as hostes espirituais da maldade, nos lugares celestiais.”
          </div>
          <div class="explanation">
            <p><strong>Fortalecei-vos no Senhor</strong> — a força vem dEle, não de nós. <strong>Astutas ciladas</strong> (methodeías) = estratégias bem elaboradas. O diabo não ataca de forma aleatória. <strong>Não contra carne e sangue</strong> — o inimigo real não são pessoas; são forças espirituais organizadas (principados, potestades, príncipes das trevas, hostes espirituais da maldade).</p>
          </div>

          <div class="verse">
            <strong>1 Pedro 5:8-9</strong><br>
            “Sede sóbrios e vigiai, porque o diabo, vosso adversário, anda em derredor, bramando como leão, buscando a quem possa tragar; ao qual resisti firmes na fé...”
          </div>
          <div class="explanation">
            <p>O diabo é adversário (antidikos), anda em derredor e busca devorar. A resposta é sobriedade, vigilância e resistência firme na fé.</p>
          </div>

          <div class="verse">
            <strong>Colossenses 2:15</strong><br>
            “E, despojando os principados e potestades, os expôs publicamente e deles triunfou em si mesmo.”
          </div>
          <div class="explanation">
            <p>Na cruz, Cristo despojou e triunfou sobre os principados e potestades. A vitória já foi conquistada. Nós aplicamos essa vitória.</p>
          </div>
        `
      },
      {
        title: "2. A Armadura de Deus",
        content: `
          <h2>2. A Armadura de Deus (Efésios 6:13-17)</h2>

          <div class="verse">
            <strong>Efésios 6:13</strong><br>
            “Portanto, tomai toda a armadura de Deus, para que possais resistir no dia mau e, havendo feito tudo, ficar firmes.”
          </div>
          <div class="explanation">
            <p>“Toda a armadura” — nenhuma peça pode faltar. O objetivo é resistir e, depois de tudo, permanecer firmes.</p>
          </div>

          <div class="verse">
            <strong>Efésios 6:14-17</strong><br>
            “Estai, pois, firmes, tendo cingidos os vossos lombos com a verdade, e vestida a couraça da justiça, e calçados os pés na preparação do evangelho da paz; tomando sobretudo o escudo da fé, com o qual podereis apagar todos os dardos inflamados do maligno. Tomai também o capacete da salvação e a espada do Espírito, que é a palavra de Deus.”
          </div>
          <div class="explanation">
            <p><strong>Cinto da verdade:</strong> integridade e fidelidade à Palavra. A mentira é a arma principal de Satanás.</p>
            <p><strong>Couraça da justiça:</strong> justiça de Cristo imputada + vida justa prática. Protege o coração.</p>
            <p><strong>Calçados do evangelho da paz:</strong> prontidão para anunciar a paz de Cristo e permanecer firmes.</p>
            <p><strong>Escudo da fé:</strong> apaga todos os dardos inflamados (dúvidas, acusações, tentações, medo).</p>
            <p><strong>Capacete da salvação:</strong> proteção da mente com a certeza da salvação e da identidade em Cristo.</p>
            <p><strong>Espada do Espírito:</strong> a Palavra de Deus — única arma ofensiva. Jesus usou a Escritura no deserto (Mt 4).</p>
          </div>

          <div class="verse">
            <strong>Efésios 6:18</strong><br>
            “Orando em todo tempo com toda oração e súplica no Espírito e vigiando nisso com toda perseverança e súplica por todos os santos.”
          </div>
          <div class="explanation">
            <p>A oração é o ambiente em que a armadura funciona. Sem oração, a armadura fica teórica. Orai em todo tempo, no Espírito, com vigilância e intercedendo pelos santos.</p>
          </div>
        `
      },
      {
        title: "3. Fortalezas e Pensamentos",
        content: `
          <h2>3. Destruindo Fortalezas (2 Coríntios 10:3-5)</h2>

          <div class="verse">
            <strong>2 Coríntios 10:3-5</strong><br>
            “Porque, andando na carne, não militamos segundo a carne. Porque as armas da nossa milícia não são carnais, mas, sim, poderosas em Deus, para destruição das fortalezas; destruindo os conselhos e toda a altivez que se levanta contra o conhecimento de Deus, e levando cativo todo o entendimento à obediência de Cristo.”
          </div>
          <div class="explanation">
            <p>As armas não são humanas; são poderosas em Deus. <strong>Fortalezas</strong> = sistemas de pensamento, mentiras, argumentos e atitudes que se opõem ao conhecimento de Deus. A batalha principal acontece na mente. Devemos levar <strong>todo pensamento</strong> cativo à obediência de Cristo.</p>
          </div>

          <div class="verse">
            <strong>Tiago 4:7</strong><br>
            “Sujeitai-vos, pois, a Deus; resisti ao diabo, e ele fugirá de vós.”
          </div>
          <div class="explanation">
            <p>Ordem: primeiro sujeição a Deus, depois resistência ao diabo. Quando estamos sob a autoridade de Deus, o diabo foge. Resistência sem sujeição é presunção.</p>
          </div>

          <div class="verse">
            <strong>1 João 4:4</strong><br>
            “Filhinhos, sois de Deus e já os tendes vencido, porque maior é o que está em vós do que o que está no mundo.”
          </div>
          <div class="explanation">
            <p>O Espírito que habita no crente é maior do que Satanás. A vitória não depende do nosso tamanho; depende de Quem está em nós.</p>
          </div>
        `
      },
      {
        title: "4. Aplicação Prática",
        content: `
          <h2>4. Aplicação Prática na Batalha</h2>
          <div class="application">
            <h3>Passos para viver em vitória</h3>
            <ol>
              <li><strong>Reconheça a realidade</strong> — A batalha é espiritual; o inimigo é real.</li>
              <li><strong>Fortaleça-se no Senhor</strong> — Dependência diária do poder de Deus.</li>
              <li><strong>Vista toda a armadura</strong> — Verdade, justiça, evangelho, fé, salvação, Palavra.</li>
              <li><strong>Ore sem cessar</strong> — No Espírito, com vigilância e intercessão.</li>
              <li><strong>Identifique fortalezas</strong> — Pensamentos, hábitos, mentiras que se opõem a Deus.</li>
              <li><strong>Leve cativo todo pensamento</strong> — Submeta a mente a Cristo.</li>
              <li><strong>Sujeite-se a Deus e resista ao diabo</strong> — Tiago 4:7.</li>
              <li><strong>Confesse e renuncie ao pecado</strong> — A pureza de vida fecha portas ao inimigo.</li>
              <li><strong>Permaneça em comunhão</strong> — Não lute sozinho; busque a igreja e a oração conjunta.</li>
              <li><strong>Lembre-se da vitória de Cristo</strong> — Lutamos a partir da cruz, não em direção a ela.</li>
            </ol>
          </div>
        `
      },
      {
        title: "5. Aplicação e Apelo",
        content: `
          <h2>5. Aplicação e Apelo</h2>
          <div class="application">
            <h3>Esboço para Pregação</h3>
            <ol>
              <li><strong>Realidade:</strong> Luta espiritual contra principados e potestades (Ef 6:12).</li>
              <li><strong>Vitória de Cristo:</strong> Ele já despojou e triunfou (Cl 2:15).</li>
              <li><strong>Armadura:</strong> Seis peças + oração (Ef 6:14-18).</li>
              <li><strong>Fortalezas:</strong> Destruir argumentos e levar pensamentos cativos (2 Co 10:4-5).</li>
              <li><strong>Postura:</strong> Sujeitar-se a Deus e resistir ao diabo (Tg 4:7).</li>
              <li><strong>Garantia:</strong> Maior é o que está em vós (1 Jo 4:4).</li>
            </ol>
            <p><strong>Apelo:</strong> “Você tem lutado contra pessoas em vez de reconhecer a batalha espiritual? Está com a armadura incompleta? Há fortalezas de mentira e pecado na sua mente? Hoje, sujeite-se a Deus, vista a armadura, resista ao diabo e leve todo pensamento cativo a Cristo. A vitória já pertence ao Senhor.”</p>
          </div>
          <p style="margin-top: 2rem; text-align: center; color: var(--text-muted); font-style: italic;">
            “Maior é o que está em vós do que o que está no mundo.” — 1 João 4:4
          </p>
        `
      }
    ]
  },
isca: {
    title: "A Isca de Satanás",
    subtitle: "Ofensa, Amargura e Perdão · Mateus 18 · 2 Coríntios 2 · Efésios 4 · Hebreus 12",
    chapters: [
      {
        title: "Introdução",
        content: `
          <h1>A Isca de Satanás</h1>
          <p class="subtitle">Estudo Completo para Pregação — Ofensa, Amargura e Perdão (baseado exclusivamente nas Escrituras)</p>
          <div class="intro">
            <p>Uma das estratégias mais eficazes e silenciosas de Satanás contra a igreja é a <strong>ofensa</strong>. Ela raramente chega gritando; chega disfarçada de justiça própria, de “direito de se sentir magoado”, de proteção emocional. Parece inocente. Parece legítima. Mas é isca.</p>
            <p>A palavra grega usada no Novo Testamento para “escândalo” ou “ofensa” é <em>skandalon</em>. Originalmente, <em>skandalon</em> era a peça da armadilha onde se colocava a isca — o gatilho que, ao ser tocado, prende a presa. Jesus e os apóstolos usam essa imagem para mostrar que ofensas são armadilhas espirituais. Quem engole a isca entrega terreno ao adversário, abre porta à amargura, perde a alegria, a unção e a comunhão, e muitas vezes contamina outros.</p>
            <p>Este estudo é <strong>exclusivamente bíblico</strong>. Examinaremos versículo a versículo o que as Escrituras ensinam sobre ofensa, perdão, reconciliação e liberdade. O livro popular de John Bevere, <em>A Isca de Satanás</em>, desenvolve este tema e é leitura recomendada como complemento — porém o conteúdo a seguir não reproduz nem resume o livro; fundamenta-se apenas na Palavra de Deus.</p>
            <p><strong>Textos-chave:</strong> Mateus 18:7, 15-35 · Lucas 17:1-5 · 2 Coríntios 2:10-11 · Efésios 4:26-32 · Hebreus 12:14-15 · Colossenses 3:12-15 · Marcos 11:25 · Mateus 5:23-24 · Provérbios 18:19 · 1 Pedro 2:19-23 · Gênesis 50:15-21 · 1 Samuel 24</p>
            <p>Ao final você terá: (1) definição bíblica da isca; (2) como a ofensa captura o coração; (3) exemplos de homens que resistiram ou sucumbiram; (4) o processo de Jesus para lidar com ofensa; (5) a ligação entre falta de perdão e ardis de Satanás; (6) passos práticos de libertação; e (7) um esboço pronto para pregação.</p>
          </div>
        `
      },
      {
        title: "1. O Que É a Isca",
        content: `
          <h2>1. O Que É a Isca da Ofensa</h2>
          <p>Antes de aprender a não engolir a isca, precisamos reconhecê-la. A Bíblia não trata a ofensa como detalhe emocional; trata como questão espiritual de alta prioridade.</p>

          <div class="verse">
            <strong>Mateus 18:7</strong><br>
            “Ai do mundo, por causa das ofensas; porque é mister que venham ofensas, mas ai daquele homem por quem vem a ofensa!”
          </div>
          <div class="explanation">
            <p><strong>“É mister que venham ofensas.”</strong> Jesus declara a inevitabilidade. Em um mundo caído, com pessoas imperfectas e um adversário ativo, ofensas <em>hão de vir</em>. Não somos surpreendidos por elas; somos preparados para elas. A surpresa e o choque (“como isso pôde acontecer comigo?”) já são parte da armadilha, porque nos fazem sentir vítimas exclusivas e justificam a retenção da ofensa.</p>
            <p><strong>“Ai do mundo… ai daquele homem.”</strong> Há um “ai” sobre o ambiente de ofensas e outro sobre quem as causa. Causar ofensa deliberada ou por negligência é coisa séria diante de Deus. Ao mesmo tempo, a responsabilidade de não engolir a isca permanece com quem foi ofendido.</p>
            <p><strong>Skandalon</strong> = armadilha, isca, pedra de tropeço. No uso do Novo Testamento, frequentemente descreve aquilo que leva alguém a tropeçar na fé, no amor ou na obediência. Satanás coloca a isca; a pessoa decide se engole ou não.</p>
          </div>

          <div class="verse">
            <strong>Lucas 17:1</strong><br>
            “E disse Jesus aos seus discípulos: É impossível que não venham escândalos, mas ai daquele por quem vierem!”
          </div>
          <div class="explanation">
            <p>Lucas reforça a mesma verdade com a palavra “impossível”. A comunidade dos discípulos não vive em bolha. Escândalos virão. A pergunta não é “será que serei ofendido?”, mas “quando for ofendido, o que farei?”. Nossa reação determina se a ofensa se torna prisão ou oportunidade de crescimento.</p>
          </div>

          <div class="verse">
            <strong>2 Coríntios 2:10-11</strong><br>
            “E a quem perdoardes alguma coisa, também eu; porque, se eu também perdoei alguma coisa, a quem perdoei, por amor de vós o fiz na presença de Cristo, para que não sejamos vencidos por Satanás; porque não ignoramos os seus ardis.”
          </div>
          <div class="explanation">
            <p>Paulo conecta explicitamente a <strong>falta de perdão</strong> aos <strong>ardis de Satanás</strong>. O contexto é a disciplina e restauração de um irmão na igreja de Corinto. Paulo insiste no perdão para que a igreja não seja “vencida” (pleonektéō = explorada, levada vantagem) pelo adversário. “Não ignoramos os seus ardis” — a ofensa não perdoada é uma das principais estratégias do diabo contra a unidade, a alegria e o avanço da igreja. Quem retém ofensa entrega terreno.</p>
          </div>

          <div class="verse">
            <strong>Hebreus 12:14-15</strong><br>
            “Segui a paz com todos e a santificação, sem a qual ninguém verá o Senhor, tendo cuidado de que ninguém se prive da graça de Deus, e de que nenhuma raiz de amargura, brotando, vos perturbe, e por ela muitos se contaminem.”
          </div>
          <div class="explanation">
            <p>A ofensa não resolvida não permanece estática: ela <strong>brotá</strong> como raiz de amargura. Essa raiz: (1) priva a pessoa da graça de Deus (no sentido de experimentar e fluir na graça); (2) perturba o indivíduo; (3) contamina muitos. A amargura é contagiosa. Uma pessoa ofendida e amargurada espalha suspeita, crítica e divisão. Por isso a ordem é “tendo cuidado” — vigilância ativa.</p>
            <p><strong>Aplicação:</strong> Ofensa guardada nunca é apenas “entre mim e a outra pessoa”. Ela afeta o corpo. Igrejas, famílias e ministérios têm sido destruídos por raízes de amargura que alguém se recusou a arrancar.</p>
          </div>

          <div class="verse">
            <strong>Provérbios 18:19</strong><br>
            “O irmão ofendido é mais difícil de conquistar do que uma cidade forte; e as contendas são como ferrolhos de castelo.”
          </div>
          <div class="explanation">
            <p>A ofensa constrói muralhas. Quanto mais tempo passa, mais grossas as paredes e mais difíceis os ferrolhos. Por isso a urgência bíblica: tratar rápido, antes que a cidade se torne inexpugnável. Muitos só tentam reconciliação depois que a amargura já endureceu o coração — e então descobrem o quão difícil ficou.</p>
          </div>
        `
      },
      {
        title: "2. Como a Ofensa Captura o Coração",
        content: `
          <h2>2. Como a Ofensa Captura o Coração</h2>
          <p>A isca funciona porque apela a algo real: a dor, a injustiça, o desejo de proteção. Entender o mecanismo ajuda a resistir.</p>

          <div class="verse">
            <strong>2 Timóteo 2:24-26</strong><br>
            “E ao servo do Senhor não convém contender, mas, sim, ser manso para com todos, apto para ensinar, sofredor; instruindo com mansidão os que resistem, a ver se, porventura, Deus lhes dará arrependimento para conhecerem a verdade e tornarem a despertar, e se desembaracem dos laços do diabo, em que à vontade dele estão presos.”
          </div>
          <div class="explanation">
            <p>Paulo descreve pessoas “presas nos laços do diabo” e que “à vontade dele estão”. Uma das formas de cativeiro é a contenda e a resistência que nascem de ofensa não tratada. O caminho de saída é arrependimento e conhecimento da verdade. Muitos ofendidos não se veem como cativos; veem-se como vítimas justificadas. O orgulho mascara a verdadeira condição do coração.</p>
          </div>

          <div class="verse">
            <strong>Apocalipse 3:17-18</strong><br>
            “Como dizes: Rico sou, e estou enriquecido, e de nada tenho falta; e não sabes que és um desgraçado, e miserável, e pobre, e cego, e nu. Aconselho-te que de mim compres ouro provado no fogo, para que te enriqueças; e roupas brancas, para que te vistas, e não apareça a vergonha da tua nudez; e que unjas os teus olhos com colírio, para que vejas.”
          </div>
          <div class="explanation">
            <p>A igreja de Laodicéia ilustra o autoengano: pensavam estar bem, mas estavam cegos. Ofensa e amargura operam da mesma forma. A pessoa diz “não estou magoado”, “já superou”, “não tenho problema com aquilo”, enquanto a raiz continua ativa. Jesus manda comprar colírio — ver a verdadeira condição. Só quem admite a ofensa e a amargura pode se arrepender e ser livre.</p>
          </div>

          <div class="verse">
            <strong>Hebreus 3:12-13</strong><br>
            “Vede, irmãos, que nunca haja em qualquer de vós um coração mau e infiel, para se apartar do Deus vivo. Antes, exortai-vos uns aos outros todos os dias, durante o tempo que se chama Hoje, para que nenhum de vós se endureça pelo engano do pecado.”
          </div>
          <div class="explanation">
            <p>O pecado (incluindo a retenção de ofensa) endurece o coração pelo engano. Quanto mais tempo a ofensa permanece, mais o coração se torna rígido, menos sensível à voz de Deus e mais justificado em sua posição. A exortação mútua e a urgência do “hoje” são antídotos.</p>
          </div>

          <div class="verse">
            <strong>1 Coríntios 8:1b</strong><br>
            “O saber ensoberbece, mas o amor edifica.”
          </div>
          <div class="explanation">
            <p>Conhecimento sem amor incha. Pessoas ofendidas frequentemente usam a Bíblia e “princípios” para justificar sua posição, enquanto o amor (que perdoa, cobre e busca restauração) está ausente. O resultado é legalismo, crítica e divisão — frutos do orgulho, não do Espírito.</p>
          </div>

          <p><strong>Resumo do mecanismo da isca:</strong></p>
          <ol>
            <li>Ocorre uma ofensa real ou percebida.</li>
            <li>A dor e o senso de injustiça surgem.</li>
            <li>Em vez de levar a Deus e buscar reconciliação, a pessoa retém, justifica e muitas vezes espalha a ofensa.</li>
            <li>Constrói muros de proteção (Provérbios 18:19).</li>
            <li>A raiz de amargura brota (Hebreus 12:15).</li>
            <li>O coração endurece; a pessoa se vê como vítima e perde a capacidade de ver a própria necessidade de arrependimento.</li>
            <li>Satanás ganha terreno (2 Coríntios 2:11).</li>
          </ol>
        `
      },
      {
        title: "3. Exemplos Bíblicos",
        content: `
          <h2>3. Exemplos Bíblicos: Quem Engoliu e Quem Resistiu</h2>
          <p>A Escritura não nos deixa só com princípios; nos dá narrativas. Vejamos homens que enfrentaram ofensas graves e as respostas que deram.</p>

          <h3>José — ofendido pelos irmãos e ainda assim livre</h3>
          <div class="verse">
            <strong>Gênesis 50:19-21</strong><br>
            “E José lhes disse: Não temais; porventura, estou eu em lugar de Deus? Vós, na verdade, intentastes o mal contra mim; porém Deus o tornou em bem, para fazer como é este dia, para conservar em vida a um povo grande. Agora, pois, não temais; eu vos sustentarei a vós e a vossos filhos. Assim, os consolou e falou segundo o coração deles.”
          </div>
          <div class="explanation">
            <p>Os irmãos de José o odiaram, planejaram matá-lo, o venderam como escravo e mentiram ao pai. Anos depois, com poder para se vingar, José declara: “Estou eu em lugar de Deus?”. Ele reconhece a soberania de Deus mesmo sobre o mal que sofreram. Não nega o mal (“intentastes o mal”), mas recusa o direito de vingança e escolhe o bem. Resultado: restauração da família e cumprimento do propósito de Deus. Se José tivesse engolido a isca, a história de Israel teria sido outra.</p>
            <p><strong>Lição:</strong> Ninguém — nem irmão, nem líder, nem demônio — pode tirar você da vontade de Deus, a não ser você mesmo, ao escolher a ofensa e a desobediência.</p>
          </div>

          <h3>Davi — perseguido por Saul e ainda assim refrão de vingança</h3>
          <div class="verse">
            <strong>1 Samuel 24:6, 10-12</strong><br>
            “E disse aos seus homens: O Senhor me guarde de que eu faça tal coisa ao meu senhor, ao ungido do Senhor, estendendo eu a minha mão contra ele; pois é o ungido do Senhor. […] Eis que neste dia os teus olhos veem que o Senhor hoje te pôs em minhas mãos nesta caverna; e alguns disseram que te matasse, porém a minha mão te poupou […] O Senhor julgue entre mim e ti e o Senhor me vingue de ti; porém a minha mão não será contra ti.”
          </div>
          <div class="explanation">
            <p>Saul, a quem Davi servira fielmente, tentou matá-lo repetidas vezes. Davi teve oportunidade clara de matar Saul e foi pressionado a fazê-lo. Recusou. Entregou a causa ao Senhor. Não engoliu a isca da vingança, mesmo tendo sofrido traição de alguém que deveria ser pai e protetor. Mais tarde, quando Saul morreu, Davi ainda pranteou (2 Samuel 1).</p>
            <p><strong>Lição:</strong> Ofensa vinda de autoridade ou de quem amamos dói mais. Ainda assim, a resposta de Davi foi: “a minha mão não será contra ti”. Ele confiou o julgamento a Deus.</p>
          </div>

          <h3>Jesus — o modelo perfeito</h3>
          <div class="verse">
            <strong>1 Pedro 2:21-23</strong><br>
            “Porque para isto sois chamados, pois também Cristo padeceu por nós, deixando-nos o exemplo, para que sigais as suas pisadas, o qual não cometeu pecado, nem na sua boca se achou engano; o qual, quando o ultrajavam, não ultrajava, e, quando padecia, não ameaçava, mas entregava-se àquele que julga justamente.”
          </div>
          <div class="explanation">
            <p>Jesus sofreu a ofensa máxima: traição, abandono, injustiça, zombaria, cruz. Não revidou, não ameaçou, não guardou rancor. Entregou-se ao Pai. Na cruz orou: “Pai, perdoa-lhes” (Lucas 23:34). Este é o padrão. Quem engole a isca revida, fofoca, se fecha ou se vinga. Quem resiste entrega a ofensa a Deus e escolhe o perdão.</p>
          </div>

          <h3>Contraste: o servo impiedoso</h3>
          <div class="verse">
            <strong>Mateus 18:32-35</strong><br>
            “Então, o seu senhor, chamando-o à sua presença, disse-lhe: Servo malvado, perdoei-te toda aquela dívida, porque me suplicaste. Não devias tu, igualmente, ter compaixão do teu companheiro, como também eu tive compaixão de ti? E, indignado, o seu senhor o entregou aos verdugos, até que pagasse tudo o que lhe devia. Assim vos fará também meu Pai celestial, se do coração não perdoardes, cada um a seu irmão, as suas ofensas.”
          </div>
          <div class="explanation">
            <p>O servo foi perdoado de uma dívida impagável e se recusou a perdoar uma dívida minúscula. O resultado foi disciplina severa. Jesus aplica a parábola diretamente: o Pai fará o mesmo a quem não perdoar do coração. A ofensa retida coloca a pessoa sob sofrimento desnecessário e bloqueia o fluxo do perdão que ela mesma recebeu.</p>
          </div>
        `
      },
      {
        title: "4. O Ensino de Jesus",
        content: `
          <h2>4. O Ensino de Jesus sobre Ofensa e Perdão</h2>
          <p>Mateus 18 é o capítulo mais denso de Jesus sobre o tema. Vamos percorrê-lo com atenção.</p>

          <div class="verse">
            <strong>Mateus 18:15-17</strong><br>
            “Ora, se teu irmão pecar contra ti, vai e repreende-o entre ti e ele só; se te ouvir, ganhaste a teu irmão; mas, se não te ouvir, leva ainda contigo um ou dois, para que, pela boca de duas ou três testemunhas, toda palavra seja confirmada. E, se não as escutar, dize-o à igreja; e, se também não escutar a igreja, considera-o como um gentio e publicano.”
          </div>
          <div class="explanation">
            <p><strong>Passo 1 — Ir a sós.</strong> O primeiro movimento é privado. Objetivo: “ganhaste a teu irmão”. Muitos fazem o oposto: falam com todo mundo, menos com a pessoa. Isso alimenta a ofensa, cria partidos e torna a reconciliação quase impossível.</p>
            <p><strong>Passo 2 — Uma ou duas testemunhas.</strong> Se o privado não resolve, amplia-se o círculo com discrição, para confirmação e ajuda.</p>
            <p><strong>Passo 3 — A igreja.</strong> Só então a questão sobe ao corpo. O objetivo continua sendo restauração, não destruição. O “considerar como gentio e publicano” é disciplina, não ódio — e ainda assim o evangelho continua aberto a gentios e publicanos.</p>
            <p><strong>Aplicação:</strong> Antes de postar, antes de contar para o grupo de oração, antes de murmurar — você já foi a sós?</p>
          </div>

          <div class="verse">
            <strong>Mateus 18:21-22</strong><br>
            “Então, Pedro, aproximando-se dele, disse: Senhor, até quantas vezes pecará meu irmão contra mim, e eu hei de perdoar? Até sete? Jesus lhe disse: Não te digo que até sete, mas até setenta vezes sete.”
          </div>
          <div class="explanation">
            <p>Pedro queria um limite generoso (sete). Jesus remove o limite. “Setenta vezes sete” não é 490 contagens; é perdão sem medida, como o de Deus para conosco. O perdão cristão não é contabilidade; é estilo de vida. Cada nova ofensa encontra um coração que já decidiu perdoar porque foi perdoado.</p>
          </div>

          <div class="verse">
            <strong>Mateus 18:23-35 (parábola do servo impiedoso)</strong><br>
            Um rei perdoa ao servo uma dívida de dez mil talentos (impagável). O mesmo servo encontra um companheiro que lhe deve cem denários (valor pequeno) e o lança na prisão. O rei, ao saber, entrega o servo impiedoso aos verdugos.
          </div>
          <div class="explanation">
            <p>A dívida que Deus nos perdoou é incomparável com qualquer ofensa que alguém nos tenha feito. Quem compreende a cruz perde o “direito” de reter ofensas. O perdão que recebemos deve fluir. Recusar perdoar é agir como o servo impiedoso e se colocar sob disciplina.</p>
          </div>

          <div class="verse">
            <strong>Marcos 11:25</strong><br>
            “E, quando estiverdes orando, se tendes alguma coisa contra alguém, perdoai-lhe, para que vosso Pai, que está nos céus, vos perdoe as vossas ofensas.”
          </div>
          <div class="explanation">
            <p>O perdão está ligado à oração eficaz e ao recebimento do perdão de Deus. Guardar ofensa bloqueia a comunhão com o Pai. Muitos oram, jejuam e buscam avivamento enquanto retêm amargura — e não entendem por que o céu parece fechado.</p>
          </div>

          <div class="verse">
            <strong>Mateus 5:23-24</strong><br>
            “Se, pois, trouxeres a tua oferta ao altar e aí te lembrares de que teu irmão tem alguma coisa contra ti, deixa ali diante do altar a tua oferta, e vai reconciliar-te primeiro com teu irmão, e depois vem e apresenta a tua oferta.”
          </div>
          <div class="explanation">
            <p>A reconciliação tem prioridade até sobre o culto. Deus valoriza o relacionamento restaurado mais do que a oferta isolada. Culto sem disposição de reconciliar é culto incompleto.</p>
          </div>

          <div class="verse">
            <strong>Mateus 6:14-15</strong><br>
            “Porque, se perdoardes aos homens as suas ofensas, também vosso Pai celestial vos perdoará a vós; se, porém, não perdoardes aos homens as suas ofensas, também vosso Pai vos não perdoará as vossas ofensas.”
          </div>
          <div class="explanation">
            <p>Jesus é direto. O perdão que oferecemos está ligado ao perdão que recebemos. Isso não anula a justificação pela fé; revela que um coração que genuinamente experimentou o perdão de Deus se torna um coração perdoador. A recusa contínua de perdoar expõe um problema espiritual grave.</p>
          </div>
        `
      },
      {
        title: "5. Não Dar Lugar ao Diabo",
        content: `
          <h2>5. Não Dar Lugar ao Diabo — Como Não Engolir a Isca</h2>

          <div class="verse">
            <strong>Efésios 4:26-27</strong><br>
            “Irai-vos e não pequeis; não se ponha o sol sobre a vossa ira. Não deis lugar ao diabo.”
          </div>
          <div class="explanation">
            <p>A ira pode ocorrer (há ira justa), mas não deve permanecer. “Não se ponha o sol sobre a vossa ira” — trate no mesmo dia. Guardar ira é <strong>dar lugar ao diabo</strong> (tópos = espaço, terreno, oportunidade). A ofensa prolongada é porta aberta. Satanás não precisa de convite elaborado; basta o terreno da ira não resolvida.</p>
          </div>

          <div class="verse">
            <strong>Efésios 4:31-32</strong><br>
            “Toda amargura, e cólera, e ira, e gritaria, e blasfêmias, e toda malícia sejam tiradas de entre vós. Antes, sede uns para com os outros benignos, misericordiosos, perdoando-vos uns aos outros, como também Deus vos perdoou em Cristo.”
          </div>
          <div class="explanation">
            <p>Lista do que deve ser <strong>removido</strong>: amargura, cólera, ira, gritaria, blasfêmia, malícia. Em seu lugar: benignidade, misericórdia e perdão — <strong>como Deus nos perdoou em Cristo</strong>. O padrão não é o merecimento da outra pessoa; o padrão é a cruz. Perdoamos porque fomos perdoados, não porque o outro “mereça”.</p>
          </div>

          <div class="verse">
            <strong>Colossenses 3:12-15</strong><br>
            “Revesti-vos, pois, como eleitos de Deus, santos e amados, de entranhas de misericórdia, de benignidade, humildade, mansidão, longanimidade, suportando-vos uns aos outros e perdoando-vos uns aos outros, se alguém tiver queixa contra outro; assim como Cristo vos perdoou, assim fazei vós também. E, sobre tudo isto, revesti-vos de amor, que é o vínculo da perfeição. E a paz de Deus, para a qual também fostes chamados em um corpo, domine em vossos corações; e sede agradecidos.”
          </div>
          <div class="explanation">
            <p>Suportar + perdoar. Queixas virão; a resposta cristã é perdoar como Cristo perdoou. Não é sentimento primeiro; é decisão de obediência que, com o tempo e a ajuda do Espírito, libera o coração. O amor é o vínculo; a paz de Deus deve “dominar” (brabeúō = arbitrar, governar) o coração. Quando a paz governa, a ofensa não encontra solo fértil.</p>
          </div>

          <div class="verse">
            <strong>Romanos 12:17-21</strong><br>
            “A ninguém torneis mal por mal […] Se for possível, quanto estiver em vós, tende paz com todos os homens. Não vos vingueis a vós mesmos, amados, mas dai lugar à ira [de Deus], porque está escrito: Minha é a vingança; eu recompensarei, diz o Senhor. Portanto, se o teu inimigo tiver fome, dá-lhe de comer; se tiver sede, dá-lhe de beber […] Não te deixes vencer do mal, mas vence o mal com o bem.”
          </div>
          <div class="explanation">
            <p>Não revidar. Não se vingar. Dar lugar à ira de Deus (Ele julga retamente). Vencer o mal com o bem. Isso é o oposto de engolir a isca. A isca grita por justiça própria e retaliação; o evangelho chama a confiar o julgamento a Deus e a responder com bem.</p>
          </div>

          <div class="verse">
            <strong>Tiago 1:19-20</strong><br>
            “Sabeis isto, meus amados irmãos; mas todo homem seja pronto para ouvir, tardio para falar, tardio para se irar. Porque a ira do homem não opera a justiça de Deus.”
          </div>
          <div class="explanation">
            <p>A ira humana precipitada não produz a justiça de Deus. Muitas ofensas crescem porque falamos cedo demais e ouvimos pouco. Ser tardio para se irar é proteção contra a isca.</p>
          </div>
        `
      },
      {
        title: "6. Frutos e Reconciliação",
        content: `
          <h2>6. Frutos da Ofensa vs. Frutos do Perdão</h2>

          <div class="verse">
            <strong>Gálatas 5:19-21</strong><br>
            “Porque as obras da carne são manifestas, as quais são: […] inimizades, porfias, emulações, iras, pelejas, dissensões, heresias, invejas […] os que tais coisas fazem não herdarão o Reino de Deus.”
          </div>
          <div class="explanation">
            <p>A ofensa alimentada produz exatamente essa lista: inimizade, contenda, ira, divisão. São obras da carne. Elas destroem o testemunho e a comunhão. Uma igreja cheia de ofensas não perdoadas pode ter doutrina correta e ainda assim estar operando na carne.</p>
          </div>

          <div class="verse">
            <strong>Gálatas 5:22-23</strong><br>
            “Mas o fruto do Espírito é: amor, gozo, paz, longanimidade, benignidade, bondade, fé, mansidão, temperança.”
          </div>
          <div class="explanation">
            <p>O oposto da ofensa retida é o fruto do Espírito. Amor e longanimidade (paciência com pessoas) não coexistem com amargura cultivada. Onde o Espírito governa, o perdão flui.</p>
          </div>

          <div class="verse">
            <strong>João 13:34-35</strong><br>
            “Um novo mandamento vos dou: Que vos ameis uns aos outros; como eu vos amei a vós, que também vós uns aos outros vos ameis. Nisto todos conhecerão que sois meus discípulos, se vos amardes uns aos outros.”
          </div>
          <div class="explanation">
            <p>O amor prático — inclusive o perdão — é a marca dos discípulos. Igreja ofendida e dividida perde o testemunho diante do mundo. Igreja que perdoa e se reconcilia brilha. Jesus liga o reconhecimento público do discipulado ao amor mútuo.</p>
          </div>

          <div class="verse">
            <strong>2 Coríntios 5:18-19</strong><br>
            “E tudo isto provém de Deus, que nos reconciliou consigo mesmo por Jesus Cristo e nos deu o ministério da reconciliação, isto é, Deus estava em Cristo reconciliando consigo o mundo, não lhes imputando os seus pecados, e pôs em nós a palavra da reconciliação.”
          </div>
          <div class="explanation">
            <p>Fomos reconciliados e recebemos o ministério da reconciliação. Guardar ofensa contradiz o próprio chamado. Quem foi reconciliado com Deus torna-se agente de reconciliação — primeiro na igreja, depois no mundo.</p>
          </div>

          <h3>Quando a reconciliação não é possível</h3>
          <p>Há casos em que a outra pessoa não quer reconciliação, ou em que o contato seria imprudente (abuso, perigo). Mesmo assim, o perdão do coração permanece possível e necessário. Você pode libertar a pessoa diante de Deus, entregar a causa ao Senhor e seguir em paz, sem amargura, mesmo sem restauração de relacionamento. O perdão é primeiro vertical e interno; a reconciliação horizontal depende de duas partes.</p>
        `
      },
      {
        title: "7. Passos Práticos de Libertação",
        content: `
          <h2>7. Passos Práticos para Não Engolir a Isca e se Libertar</h2>
          <p>Conhecimento sem obediência não liberta. Abaixo, um caminho bíblico e prático.</p>

          <h3>1. Reconheça e confesse</h3>
          <p>Pare de negar. Peça ao Espírito que mostre se há ofensa, amargura, ressentimento ou “muro”. Confesse a Deus especificamente: “Tenho guardado ofensa contra fulano; isso é pecado; peço perdão.” (1 João 1:9)</p>

          <h3>2. Decida perdoar</h3>
          <p>O perdão é, em primeiro lugar, ato de vontade baseado na cruz, não em sentimento. Declare: “Pela graça de Deus, escolho perdoar como Cristo me perdoou.” O sentimento pode demorar; a decisão pode ser imediata.</p>

          <h3>3. Entregue a causa a Deus</h3>
          <p>Como Jesus e Davi: “Entrego a Ti o julgamento. Minha mão não será contra ele/ela.” (1 Pedro 2:23; Romanos 12:19)</p>

          <h3>4. Busque reconciliação quando for sábio</h3>
          <p>Siga Mateus 18:15 — vá a sós, com mansidão, visando ganhar o irmão. Se não for possível ou seguro, mantenha o perdão do coração e a paz consigo mesmo diante de Deus.</p>

          <h3>5. Pare de alimentar a ofensa</h3>
          <p>Não fofoque. Não repasse a história para “desabafar” com quem não fará parte da solução. Cada vez que você reabre a ferida com palavras, a raiz se alimenta.</p>

          <h3>6. Quando a memória voltar</h3>
          <p>Não lute só com a mente. Declare de novo o perdão, agradeça a Deus pela cruz e peça ao Espírito que limpe a emoção. Com o tempo, a memória perde o veneno.</p>

          <h3>7. Peça ao Espírito o fruto</h3>
          <p>Perdão não é apenas ausência de ódio; é caminho para o amor. Peça benignidade, misericórdia e até a capacidade de abençoar quem o ofendeu (Lucas 6:27-28).</p>

          <div class="verse">
            <strong>Lucas 6:27-28, 35-36</strong><br>
            “Amai a vossos inimigos, fazei bem aos que vos odeiam, bendizei os que vos maldizem e orai pelos que vos caluniam. […] Amai a vossos inimigos, e fazei bem, e emprestai, sem esperardes receber nada […] Sede, pois, misericordiosos, como também vosso Pai é misericordioso.”
          </div>
          <div class="explanation">
            <p>O padrão de Jesus vai além do “não odiar”: amar, fazer o bem, abençoar e orar. Isso só é possível pelo Espírito. Quando você começa a orar genuinamente pelo bem de quem o ofendeu, a isca perde o poder.</p>
          </div>
        `
      },
      {
        title: "8. Aplicação e Apelo",
        content: `
          <h2>8. Aplicação, Esboço de Pregação e Apelo</h2>
          <div class="application">
            <h3>Esboço para Pregação (pronto para usar)</h3>
            <ol>
              <li><strong>A isca:</strong> Ofensa é armadilha (skandalon). É inevitável que venham, mas não é inevitável engolir (Mt 18:7; Lc 17:1).</li>
              <li><strong>O ardil:</strong> Falta de perdão dá vantagem a Satanás (2 Co 2:10-11).</li>
              <li><strong>A raiz:</strong> Ofensa não tratada vira amargura e contamina muitos (Hb 12:15).</li>
              <li><strong>Os muros:</strong> O irmão ofendido é como cidade forte (Pv 18:19). Trate cedo.</li>
              <li><strong>Exemplos:</strong> José perdoou; Davi não se vingou; Jesus entregou-se ao Pai; o servo impiedoso foi entregue aos verdugos.</li>
              <li><strong>O processo de Jesus:</strong> Ir a sós → testemunhas → igreja. Objetivo: ganhar o irmão (Mt 18:15-17).</li>
              <li><strong>O perdão sem limite:</strong> Setenta vezes sete; parábola do servo (Mt 18:21-35).</li>
              <li><strong>Não dar lugar ao diabo:</strong> Não deixe o sol se pôr sobre a ira (Ef 4:26-27). Remova amargura; revista-se de benignidade e perdão como Cristo (Ef 4:31-32; Cl 3:13).</li>
              <li><strong>O fruto:</strong> Amor que o mundo reconhece (Jo 13:34-35). Ministério da reconciliação (2 Co 5:18-19).</li>
              <li><strong>A decisão:</strong> Perdoar é ato de vontade baseado na cruz. O sentimento segue a obediência.</li>
            </ol>

            <h3>Perguntas de exame de consciência</h3>
            <ul>
              <li>Há alguém contra quem você guarda ofensa, ressentimento ou “distância fria”?</li>
              <li>Você tem falado da ofensa para outros em vez de ir à pessoa (quando isso seria possível e sábio)?</li>
              <li>Sua oração, alegria ou comunhão com Deus estão bloqueadas por falta de perdão?</li>
              <li>Você se vê principalmente como vítima, ou consegue também ver a própria necessidade de graça?</li>
              <li>Está disposto a perdoar como Cristo o perdoou — por decisão, mesmo sem sentimento ainda?</li>
              <li>Há alguma “raiz de amargura” que já começou a contaminar conversas, atitudes ou relacionamentos?</li>
            </ul>

            <h3>Passos práticos (para o ouvinte levar para casa)</h3>
            <ol>
              <li>Identifique a ofensa e confesse a Deus a amargura.</li>
              <li>Decida perdoar (ato de vontade, baseado na cruz).</li>
              <li>Entregue a causa a Deus; renuncie à vingança.</li>
              <li>Se possível e sábio, busque reconciliação conforme Mateus 18.</li>
              <li>Pare de alimentar a ofensa com palavras e revisitações mentais.</li>
              <li>Sempre que a memória voltar, declare de novo o perdão e ore pelo bem da pessoa.</li>
              <li>Peça ao Espírito que cure o coração e produza o fruto do amor.</li>
            </ol>

            <p><strong>Leitura recomendada:</strong> John Bevere, <em>A Isca de Satanás</em> — livro que desenvolve este tema com exemplos e aplicações. Use-o como complemento, sempre confrontando com a Escritura. O estudo acima é independente e fundamentado apenas na Bíblia.</p>

            <p><strong>Apelo:</strong> “Não engula a isca. A ofensa parece justa, mas é armadilha. Solte. Perdoe como você foi perdoado. Libertar o outro é libertar a si mesmo. Hoje, diante de Deus, escolha o perdão, arranque a raiz de amargura e feche a porta ao adversário. O mesmo Espírito que ressuscitou Jesus pode amolecer o seu coração e restaurar a sua alegria.”</p>
          </div>
          <p style="margin-top: 2rem; text-align: center; color: var(--text-muted); font-style: italic;">
            “Para que não sejamos vencidos por Satanás; porque não ignoramos os seus ardis.” — 2 Coríntios 2:11
          </p>
          <p style="text-align: center; color: var(--text-muted); font-style: italic;">
            “Segui a paz com todos e a santificação, sem a qual ninguém verá o Senhor.” — Hebreus 12:14
          </p>
        `
      }
    ]
  }
};
