/**
 * Conteúdo dos Ebooks - Estudos Bíblicos para Pregação
 * Estilo pentecostal • Versículo a versículo
 */

const BOOKS = {
  salvacao: {
    title: "Salvação",
    subtitle: "João 3 · Romanos 3, 5 e 10 · Efésios 2",
    chapters: [
      {
        title: "Introdução",
        content: `
          <h1>Salvação</h1>
          <p class="subtitle">Estudo para Pregação — Versículo a Versículo</p>
          <div class="intro">
            <p>A salvação é a maior necessidade do ser humano e a maior oferta de Deus. Não é conquistada por obras, mas recebida pela graça mediante a fé em Jesus Cristo. Este estudo apresenta o plano completo de Deus para resgatar o homem perdido.</p>
            <p><strong>Textos-chave:</strong> João 3:16-18 · Romanos 3:23-24 · Romanos 5:8 · Romanos 10:9-10 · Efésios 2:8-9</p>
          </div>
        `
      },
      {
        title: "A Necessidade da Salvação",
        content: `
          <h2>A Necessidade da Salvação</h2>
          <div class="verse">
            <strong>Romanos 3:23</strong><br>
            “Porque todos pecaram e destituídos estão da glória de Deus.”
          </div>
          <div class="explanation">
            <p>Não há exceção. Todo ser humano nasce com a natureza pecaminosa e pratica o pecado. A distância entre o homem e Deus é absoluta. Sem salvação, todos estão condenados.</p>
          </div>
          <div class="verse">
            <strong>Romanos 6:23</strong><br>
            “Porque o salário do pecado é a morte, mas o dom gratuito de Deus é a vida eterna, por Cristo Jesus, nosso Senhor.”
          </div>
          <div class="explanation">
            <p>O pecado tem um preço: a morte espiritual e eterna. Mas Deus oferece um presente: a vida eterna. A salvação é um dom, não um salário merecido.</p>
          </div>
          <div class="verse">
            <strong>Efésios 2:1-3</strong><br>
            “Ele vos deu vida, estando vós mortos nos vossos delitos e pecados... e éramos por natureza filhos da ira, como também os demais.”
          </div>
          <div class="explanation">
            <p>Antes de Cristo estamos espiritualmente mortos. Não precisamos apenas de “melhoria moral”, precisamos de vida nova. Somos filhos da ira por natureza.</p>
          </div>
        `
      },
      {
        title: "O Amor e a Obra de Cristo",
        content: `
          <h2>O Amor e a Obra de Cristo</h2>
          <div class="verse">
            <strong>João 3:16</strong><br>
            “Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.”
          </div>
          <div class="explanation">
            <p>O motivo da salvação é o amor de Deus. Ele não esperou que o homem se tornasse digno; Ele enviou o Filho. A condição é uma só: crer.</p>
          </div>
          <div class="verse">
            <strong>Romanos 5:8</strong><br>
            “Mas Deus prova o seu amor para conosco em que Cristo morreu por nós, sendo nós ainda pecadores.”
          </div>
          <div class="explanation">
            <p>Cristo morreu por nós enquanto ainda éramos pecadores. Não há mérito nosso. A cruz demonstra o amor e a justiça de Deus ao mesmo tempo.</p>
          </div>
          <div class="verse">
            <strong>2 Coríntios 5:21</strong><br>
            “Àquele que não conheceu pecado, o fez pecado por nós, para que nele fôssemos feitos justiça de Deus.”
          </div>
          <div class="explanation">
            <p>A grande troca: Jesus tomou o nosso pecado; nós recebemos a justiça dEle. Esta é a base da justificação.</p>
          </div>
        `
      },
      {
        title: "Como Receber a Salvação",
        content: `
          <h2>Como Receber a Salvação</h2>
          <div class="verse">
            <strong>Romanos 10:9-10</strong><br>
            “Se com a tua boca confessares ao Senhor Jesus, e em teu coração creres que Deus o ressuscitou dentre os mortos, serás salvo. Porque com o coração se crê para a justiça, e com a boca se faz confissão para a salvação.”
          </div>
          <div class="explanation">
            <p>Há dois movimentos inseparáveis: crer no coração e confessar com a boca. A fé genuína produz confissão pública. A ressurreição de Jesus é o centro da fé cristã.</p>
          </div>
          <div class="verse">
            <strong>Efésios 2:8-9</strong><br>
            “Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus. Não vem das obras, para que ninguém se glorie.”
          </div>
          <div class="explanation">
            <p>Graça + Fé = Salvação. Obras não salvam; obras são resultado da salvação. Ninguém pode se vangloriar.</p>
          </div>
          <div class="verse">
            <strong>João 1:12</strong><br>
            “Mas, a todos quantos o receberam, deu-lhes o poder de serem feitos filhos de Deus, aos que creem no seu nome.”
          </div>
          <div class="explanation">
            <p>Receber Jesus é o ato decisivo. Quem O recebe torna-se filho de Deus. A salvação não é apenas perdão; é adoção.</p>
          </div>
        `
      },
      {
        title: "Aplicação e Apelo",
        content: `
          <h2>Aplicação e Apelo</h2>
          <div class="application">
            <h3>Pontos para a Pregação</h3>
            <ol>
              <li><strong>Diagnóstico:</strong> Todos estão perdidos e precisando de salvação.</li>
              <li><strong>Remédio:</strong> Só Jesus Cristo, pela Sua morte e ressurreição.</li>
              <li><strong>Condição:</strong> Arrependimento e fé (crer e confessar).</li>
              <li><strong>Resultado:</strong> Vida eterna, perdão, adoção, nova natureza.</li>
              <li><strong>Urgência:</strong> “Hoje, se ouvirdes a sua voz, não endureçais o vosso coração” (Hb 3:15).</li>
            </ol>
            <p><strong>Apelo:</strong> “Quem deseja receber Jesus como Senhor e Salvador hoje? Venha confessar com a boca e crer com o coração.”</p>
          </div>
          <p style="margin-top: 2rem; text-align: center; color: var(--text-muted); font-style: italic;">
            “Se o Filho vos libertar, verdadeiramente sereis livres.” — João 8:36
          </p>
        `
      }
    ]
  },

  arrependimento: {
    title: "Arrependimento",
    subtitle: "Atos 2 · 2 Coríntios 7 · Lucas 15",
    chapters: [
      {
        title: "Introdução",
        content: `
          <h1>Arrependimento</h1>
          <p class="subtitle">Estudo para Pregação — Versículo a Versículo</p>
          <div class="intro">
            <p>O arrependimento é o primeiro grito do evangelho. João Batista, Jesus e os apóstolos começavam pregando: “Arrependei-vos!”. Sem arrependimento genuíno não há salvação verdadeira nem avivamento.</p>
            <p><strong>Textos-chave:</strong> Atos 2:37-38 · 2 Coríntios 7:10 · Lucas 15:17-20 · Atos 3:19</p>
          </div>
        `
      },
      {
        title: "O Que É Arrependimento",
        content: `
          <h2>O Que É Arrependimento</h2>
          <div class="verse">
            <strong>2 Coríntios 7:10</strong><br>
            “Porque a tristeza segundo Deus opera arrependimento para a salvação, da qual ninguém se arrepende; mas a tristeza do mundo opera a morte.”
          </div>
          <div class="explanation">
            <p>Há dois tipos de tristeza: a do mundo (remorso, medo das consequências) e a segundo Deus (dor pelo pecado contra um Deus santo). Só a segunda produz verdadeiro arrependimento e salvação.</p>
          </div>
          <div class="verse">
            <strong>Lucas 15:17-20</strong><br>
            “E, caindo em si, disse: ... Levantarei e irei ter com meu pai... E, levantando-se, foi para seu pai.”
          </div>
          <div class="explanation">
            <p>O filho pródigo ilustra o arrependimento: 1) Caiu em si (reconhecimento); 2) Decidiu voltar (mudança de mente); 3) Levantou-se e foi (ação). Arrependimento não é só sentimento; é mudança de direção.</p>
          </div>
          <div class="verse">
            <strong>Atos 26:20</strong><br>
            “Que se arrependessem e se convertessem a Deus, praticando obras dignas de arrependimento.”
          </div>
          <div class="explanation">
            <p>O verdadeiro arrependimento produz frutos. Não basta dizer “me arrependo”; a vida precisa mudar.</p>
          </div>
        `
      },
      {
        title: "Arrependimento e Salvação",
        content: `
          <h2>Arrependimento e Salvação</h2>
          <div class="verse">
            <strong>Atos 2:37-38</strong><br>
            “E, ouvindo eles isto, compungiram-se em seu coração e perguntaram a Pedro e aos demais apóstolos: Que faremos, varões irmãos? E disse-lhes Pedro: Arrependei-vos, e cada um de vós seja batizado em nome de Jesus Cristo para perdão dos pecados, e recebereis o dom do Espírito Santo.”
          </div>
          <div class="explanation">
            <p>No dia de Pentecostes o arrependimento foi a primeira resposta exigida. Compungiram-se (foram feridos no coração). Depois veio o batismo e a promessa do Espírito.</p>
          </div>
          <div class="verse">
            <strong>Atos 3:19</strong><br>
            “Arrependei-vos, pois, e convertei-vos, para que sejam apagados os vossos pecados, e venham, assim, os tempos do refrigério pela presença do Senhor.”
          </div>
          <div class="explanation">
            <p>Arrependimento + conversão = pecados apagados + refrigério (avivamento). O arrependimento abre a porta para a presença de Deus.</p>
          </div>
          <div class="verse">
            <strong>Lucas 13:3</strong><br>
            “Não, eu vos digo; antes, se não vos arrependerdes, todos de igual modo perecereis.”
          </div>
          <div class="explanation">
            <p>Jesus foi claro: sem arrependimento, há perecimento. Não é opcional.</p>
          </div>
        `
      },
      {
        title: "Aplicação e Apelo",
        content: `
          <h2>Aplicação e Apelo</h2>
          <div class="application">
            <h3>Como pregar arrependimento</h3>
            <ul>
              <li>Mostre o pecado como ofensa a um Deus santo, não apenas erro humano.</li>
              <li>Chame à mudança de mente e de direção, não apenas a emoção.</li>
              <li>Destaque que o arrependimento é dom de Deus (At 11:18; 2 Tm 2:25).</li>
              <li>Faça o apelo: “Há alguém que precisa cair em si hoje e voltar para o Pai?”</li>
            </ul>
            <p><strong>Apelo forte:</strong> “Deixe o chiqueiro do pecado. Levante-se e vá para o Pai. Ele está esperando com os braços abertos.”</p>
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
    subtitle: "João 14-16 · Atos 1-2 · 1 Coríntios 12",
    chapters: [
      {
        title: "Introdução",
        content: `
          <h1>O Espírito Santo</h1>
          <p class="subtitle">Estudo para Pregação — Versículo a Versículo</p>
          <div class="intro">
            <p>O Espírito Santo não é uma força ou energia; é a Terceira Pessoa da Trindade. Ele habita no crente, capacita, guia, consola e dá poder. Sem o Espírito não há vida cristã genuína nem igreja viva.</p>
            <p><strong>Textos-chave:</strong> João 14:16-17 · Atos 1:8 · Atos 2:1-4 · 1 Coríntios 12:7-11</p>
          </div>
        `
      },
      {
        title: "A Pessoa do Espírito",
        content: `
          <h2>A Pessoa do Espírito Santo</h2>
          <div class="verse">
            <strong>João 14:16-17</strong><br>
            “E eu rogarei ao Pai, e ele vos dará outro Consolador, para que fique convosco para sempre, o Espírito da verdade, que o mundo não pode receber, porque não o vê nem o conhece; mas vós o conheceis, porque habita convosco e estará em vós.”
          </div>
          <div class="explanation">
            <p>“Outro Consolador” (állos paráklētos) = outro da mesma espécie. O Espírito é tão Pessoa quanto Jesus. Ele habita no crente permanentemente.</p>
          </div>
          <div class="verse">
            <strong>João 16:7-8</strong><br>
            “Mas eu vos digo a verdade: convém-vos que eu vá, porque, se eu não for, o Consolador não virá a vós; mas, se eu for, enviar-vo-lo-ei. E, quando ele vier, convencerá o mundo do pecado, da justiça e do juízo.”
          </div>
          <div class="explanation">
            <p>Uma das principais obras do Espírito é convencer (repreender, trazer à luz) o pecado, a justiça de Cristo e o juízo sobre Satanás.</p>
          </div>
        `
      },
      {
        title: "O Batismo no Espírito Santo",
        content: `
          <h2>O Batismo no Espírito Santo</h2>
          <div class="verse">
            <strong>Atos 1:4-5, 8</strong><br>
            “E, estando com eles, determinou-lhes que não se ausentassem de Jerusalém, mas que esperassem a promessa do Pai... Porque, na verdade, João batizou com água, mas vós sereis batizados com o Espírito Santo, não muito depois destes dias... Mas recebereis a virtude do Espírito Santo, que há de vir sobre vós; e ser-me-eis testemunhas...”
          </div>
          <div class="explanation">
            <p>Jesus ordenou esperar o batismo no Espírito. O propósito principal é poder para ser testemunha. Não é apenas para experiência pessoal, mas para missão.</p>
          </div>
          <div class="verse">
            <strong>Atos 2:1-4</strong><br>
            “E, cumprindo-se o dia de Pentecostes... todos foram cheios do Espírito Santo e começaram a falar em outras línguas, conforme o Espírito Santo lhes concedia que falassem.”
          </div>
          <div class="explanation">
            <p>No Pentecostes o Espírito desceu com sinais: vento, fogo e línguas. A evidência inicial histórica foi o falar em outras línguas. O mesmo padrão se repete em Atos 10 e 19.</p>
          </div>
          <div class="verse">
            <strong>Atos 2:38-39</strong><br>
            “Arrependei-vos, e cada um de vós seja batizado... e recebereis o dom do Espírito Santo. Porque a promessa vos diz respeito a vós, a vossos filhos e a todos os que estão longe...”
          </div>
          <div class="explanation">
            <p>A promessa do Espírito é para todas as gerações e para todos os que o Senhor chamar. Não terminou no primeiro século.</p>
          </div>
        `
      },
      {
        title: "A Obra Contínua do Espírito",
        content: `
          <h2>A Obra Contínua do Espírito</h2>
          <div class="verse">
            <strong>Gálatas 5:22-23</strong><br>
            “Mas o fruto do Espírito é: amor, gozo, paz, longanimidade, benignidade, bondade, fé, mansidão, temperança.”
          </div>
          <div class="explanation">
            <p>O caráter de Cristo é produzido pelo Espírito. Dons sem fruto são perigosos; fruto sem dons é incompleto. Ambos são necessários.</p>
          </div>
          <div class="verse">
            <strong>Efésios 5:18</strong><br>
            “E não vos embriagueis com vinho, em que há contenda, mas enchei-vos do Espírito.”
          </div>
          <div class="explanation">
            <p>O comando é contínuo: “sede enchidos”. Não basta uma experiência passada; precisamos ser cheios diariamente.</p>
          </div>
          <div class="application">
            <h3>Aplicação</h3>
            <ul>
              <li>Você já recebeu o Espírito Santo? (Atos 19:2)</li>
              <li>Você busca ser cheio diariamente?</li>
              <li>O fruto do Espírito é visível na sua vida?</li>
            </ul>
          </div>
        `
      }
    ]
  },

  poder: {
    title: "Poder do Alto",
    subtitle: "Atos 1:8 · Lucas 24:49 · Marcos 16",
    chapters: [
      {
        title: "Introdução",
        content: `
          <h1>Poder do Alto</h1>
          <p class="subtitle">Estudo para Pregação — Versículo a Versículo</p>
          <div class="intro">
            <p>A igreja primitiva não saiu com estratégias humanas; saiu com poder do Espírito Santo. Jesus ordenou: “Ficai em Jerusalém até que do alto sejais revestidos de poder”. Sem poder, a igreja é apenas uma organização religiosa.</p>
            <p><strong>Textos-chave:</strong> Atos 1:8 · Lucas 24:49 · Marcos 16:17-18 · 1 Coríntios 2:4-5</p>
          </div>
        `
      },
      {
        title: "A Promessa do Poder",
        content: `
          <h2>A Promessa do Poder</h2>
          <div class="verse">
            <strong>Lucas 24:49</strong><br>
            “E eis que sobre vós envio a promessa de meu Pai; ficai, porém, na cidade de Jerusalém, até que do alto sejais revestidos de poder.”
          </div>
          <div class="explanation">
            <p>“Revestidos de poder” = enduō (vestir-se). É como colocar uma capa de poder. Não é força humana; é capacitação divina vinda “do alto”.</p>
          </div>
          <div class="verse">
            <strong>Atos 1:8</strong><br>
            “Mas recebereis a virtude (poder) do Espírito Santo, que há de vir sobre vós; e ser-me-eis testemunhas tanto em Jerusalém como em toda a Judeia e Samaria e até aos confins da terra.”
          </div>
          <div class="explanation">
            <p>Poder (dýnamis) = capacidade dinâmica, poder milagroso. O propósito: ser testemunhas. O poder não é para exibição, mas para evangelização com sinais.</p>
          </div>
        `
      },
      {
        title: "Sinais que Acompanham",
        content: `
          <h2>Sinais que Acompanham os que Creem</h2>
          <div class="verse">
            <strong>Marcos 16:17-18</strong><br>
            “E estes sinais seguirão aos que crerem: em meu nome expulsarão os demônios; falarão novas línguas; pegarão nas serpentes; e, se beberem alguma coisa mortífera, não lhes fará dano algum; e porão as mãos sobre os enfermos e os curarão.”
          </div>
          <div class="explanation">
            <p>Jesus prometeu sinais sobrenaturais. Expulsão de demônios, línguas, proteção e curas. Estes sinais autenticam a mensagem e demonstram o Reino de Deus.</p>
          </div>
          <div class="verse">
            <strong>1 Coríntios 2:4-5</strong><br>
            “A minha palavra e a minha pregação não consistiram em palavras persuasivas de sabedoria humana, mas em demonstração do Espírito e de poder, para que a vossa fé não se apoiasse em sabedoria dos homens, mas no poder de Deus.”
          </div>
          <div class="explanation">
            <p>Paulo não confiava apenas em retórica. A fé dos ouvintes precisava se apoiar no poder de Deus, não em argumentos humanos.</p>
          </div>
        `
      },
      {
        title: "Como Receber e Andar no Poder",
        content: `
          <h2>Como Receber e Andar no Poder</h2>
          <div class="application">
            <h3>Passos práticos</h3>
            <ol>
              <li><strong>Fome e sede</strong> — “Bem-aventurados os que têm fome e sede de justiça” (Mt 5:6).</li>
              <li><strong>Obediência</strong> — Eles ficaram em Jerusalém como Jesus mandou.</li>
              <li><strong>Oração e espera</strong> — “Todos perseveravam unânimes em oração” (At 1:14).</li>
              <li><strong>Fé</strong> — Crer que a promessa é para hoje (At 2:39).</li>
              <li><strong>Uso</strong> — O poder se manifesta quando saímos para testemunhar.</li>
            </ol>
            <p><strong>Apelo:</strong> “Você está andando apenas com talento humano ou está revestido de poder do alto? Busque o batismo no Espírito Santo e o enchimento diário.”</p>
          </div>
        `
      }
    ]
  },

  avivamento: {
    title: "Avivamento",
    subtitle: "2 Crônicas 7:14 · Joel 2 · Atos 2",
    chapters: [
      {
        title: "Introdução",
        content: `
          <h1>Avivamento</h1>
          <p class="subtitle">Estudo para Pregação — Versículo a Versículo</p>
          <div class="intro">
            <p>Avivamento não é reunião com muita emoção. É a visita soberana de Deus que traz arrependimento profundo, renovação da igreja e salvação de pecadores. Começa no povo de Deus e se espalha.</p>
            <p><strong>Textos-chave:</strong> 2 Crônicas 7:14 · Joel 2:28-32 · Atos 2 · Habacuque 3:2</p>
          </div>
        `
      },
      {
        title: "A Condição para o Avivamento",
        content: `
          <h2>A Condição para o Avivamento</h2>
          <div class="verse">
            <strong>2 Crônicas 7:14</strong><br>
            “E se o meu povo, que se chama pelo meu nome, se humilhar, e orar, e buscar a minha face, e se converter dos seus maus caminhos, então, eu ouvirei dos céus, e perdoarei os seus pecados, e sararei a sua terra.”
          </div>
          <div class="explanation">
            <p>Quatro condições: 1) Humilhar-se; 2) Orar; 3) Buscar a face de Deus; 4) Converter-se dos maus caminhos. Quando o povo de Deus faz isso, Ele promete ouvir, perdoar e sarar.</p>
          </div>
          <div class="verse">
            <strong>Habacuque 3:2</strong><br>
            “Ouvi, SENHOR, a tua palavra e temi; aviva, ó SENHOR, a tua obra no meio dos anos...”
          </div>
          <div class="explanation">
            <p>O grito de todo avivamento verdadeiro: “Aviva a tua obra!”. Não pedimos que Deus abençoe os nossos planos; pedimos que Ele faça a obra dEle.</p>
          </div>
        `
      },
      {
        title: "O Avivamento de Pentecostes",
        content: `
          <h2>O Avivamento de Pentecostes</h2>
          <div class="verse">
            <strong>Joel 2:28-29</strong><br>
            “E há de ser que, depois, derramarei o meu Espírito sobre toda a carne, e vossos filhos e vossas filhas profetizarão, os vossos velhos terão sonhos, os vossos jovens terão visões. E também sobre os servos e sobre as servas, naqueles dias, derramarei o meu Espírito.”
          </div>
          <div class="explanation">
            <p>Pedro citou esta profecia no dia de Pentecostes (At 2:16-21). O derramamento do Espírito é a marca do avivamento. É para todos: filhos, filhas, velhos, jovens, servos e servas.</p>
          </div>
          <div class="verse">
            <strong>Atos 2:41-47</strong><br>
            “De sorte que foram batizados os que de bom grado receberam a sua palavra; e, naquele dia, agregaram-se quase três mil almas... E perseveravam na doutrina dos apóstolos, e na comunhão, e no partir do pão, e nas orações... E todos os dias acrescentava o Senhor à igreja aqueles que se haviam de salvar.”
          </div>
          <div class="explanation">
            <p>Resultados do avivamento: conversões em massa, perseverança na Palavra, comunhão, oração, milagres, generosidade e crescimento diário.</p>
          </div>
        `
      },
      {
        title: "Como Buscar Avivamento Hoje",
        content: `
          <h2>Como Buscar Avivamento Hoje</h2>
          <div class="application">
            <h3>Caminhos para o avivamento</h3>
            <ol>
              <li>Humilhação e confissão de pecados da igreja.</li>
              <li>Oração fervorosa e unânime (At 1:14; 4:31).</li>
              <li>Pregação da Palavra pura e do arrependimento.</li>
              <li>Fome pelo Espírito Santo e pelos dons.</li>
              <li>Unidade e amor fraternal.</li>
              <li>Ousadia para testemunhar.</li>
            </ol>
            <p><strong>Apelo:</strong> “Igreja, vamos nos humilhar, orar e buscar a face de Deus até que Ele venha e sara a nossa terra!”</p>
          </div>
        `
      }
    ]
  },

  arrebatamento: {
    title: "Arrebatamento e Sinais",
    subtitle: "1 Tessalonicenses 4 · Mateus 24 · 1 Coríntios 15",
    chapters: [
      {
        title: "Introdução",
        content: `
          <h1>Arrebatamento e Sinais dos Tempos</h1>
          <p class="subtitle">Estudo para Pregação — Versículo a Versículo</p>
          <div class="intro">
            <p>Jesus voltará. A igreja será arrebatada. Os sinais dos tempos estão se cumprindo. Este estudo prepara a igreja para viver em santidade e expectativa da vinda do Senhor.</p>
            <p><strong>Textos-chave:</strong> 1 Tessalonicenses 4:13-18 · 1 Coríntios 15:51-52 · Mateus 24 · Tito 2:13</p>
          </div>
        `
      },
      {
        title: "O Arrebatamento",
        content: `
          <h2>O Arrebatamento da Igreja</h2>
          <div class="verse">
            <strong>1 Tessalonicenses 4:16-17</strong><br>
            “Porque o mesmo Senhor descerá do céu com alarido, e com voz de arcanjo, e com a trombeta de Deus; e os que morreram em Cristo ressuscitarão primeiro; depois, nós, os que ficarmos vivos, seremos arrebatados juntamente com eles nas nuvens, a encontrar o Senhor nos ares, e assim estaremos para sempre com o Senhor.”
          </div>
          <div class="explanation">
            <p>Ordem dos eventos: 1) O Senhor desce; 2) Os mortos em Cristo ressuscitam; 3) Os vivos são transformados e arrebatados; 4) Todos se encontram com o Senhor nos ares. É um evento súbito e glorioso.</p>
          </div>
          <div class="verse">
            <strong>1 Coríntios 15:51-52</strong><br>
            “Eis aqui vos digo um mistério: Nem todos dormiremos, mas todos seremos transformados, num momento, num abrir e fechar de olhos, ante a última trombeta...”
          </div>
          <div class="explanation">
            <p>“Num momento” (en atomō) = indivisível, instantâneo. A transformação será mais rápida que um piscar de olhos. Corpos mortais se tornarão imortais.</p>
          </div>
        `
      },
      {
        title: "Sinais dos Tempos",
        content: `
          <h2>Sinais dos Tempos (Mateus 24)</h2>
          <div class="verse">
            <strong>Mateus 24:6-8</strong><br>
            “E ouvireis de guerras e de rumores de guerras... Porque se levantará nação contra nação, e reino contra reino, e haverá fomes, e pestes, e terremotos, em vários lugares. Mas todas estas coisas são o princípio das dores.”
          </div>
          <div class="explanation">
            <p>Guerras, fomes, pestes e terremotos são “princípio das dores” (como dores de parto). Aumentam em frequência e intensidade.</p>
          </div>
          <div class="verse">
            <strong>Mateus 24:11-12</strong><br>
            “E surgirão muitos falsos profetas e enganarão a muitos. E, por se multiplicar a iniquidade, o amor de muitos se esfriará.”
          </div>
          <div class="explanation">
            <p>Falsos profetas e o esfriamento do amor. A iniquidade multiplicada esfria o amor até dos crentes. Precisamos vigiar.</p>
          </div>
          <div class="verse">
            <strong>Mateus 24:14</strong><br>
            “E este evangelho do Reino será pregado em todo o mundo, em testemunho a todas as nações, e então virá o fim.”
          </div>
          <div class="explanation">
            <p>O evangelho sendo pregado a todas as nações é um sinal positivo e um chamado à missão.</p>
          </div>
          <div class="verse">
            <strong>Mateus 24:36, 42</strong><br>
            “Mas daquele dia e hora ninguém sabe... Vigiai, pois, porque não sabeis a que hora há de vir o vosso Senhor.”
          </div>
          <div class="explanation">
            <p>Ninguém sabe o dia nem a hora. A postura correta é vigiar e estar preparado a qualquer momento.</p>
          </div>
        `
      },
      {
        title: "Como Viver na Expectativa",
        content: `
          <h2>Como Viver na Expectativa</h2>
          <div class="verse">
            <strong>Tito 2:11-13</strong><br>
            “Porque a graça de Deus se há manifestado, trazendo salvação a todos os homens, ensinando-nos que, renunciando à impiedade e às concupiscências mundanas, vivamos neste presente século sóbria, justa e piamente, aguardando a bem-aventurada esperança e o aparecimento da glória do grande Deus e nosso Senhor Jesus Cristo.”
          </div>
          <div class="explanation">
            <p>A esperança da volta de Jesus nos ensina a viver em santidade agora: sóbrios, justos e piedosos.</p>
          </div>
          <div class="application">
            <h3>Aplicação e Apelo</h3>
            <ul>
              <li>Você está pronto para o arrebatamento?</li>
              <li>Sua vida reflete a expectativa da volta de Jesus?</li>
              <li>Você está anunciando o evangelho enquanto há tempo?</li>
            </ul>
            <p><strong>Apelo:</strong> “Maranata! Ora vem, Senhor Jesus! Se Ele viesse hoje, você estaria preparado?”</p>
          </div>
        `
      }
    ]
  },

  dons: {
    title: "Dons Espirituais",
    subtitle: "1 Coríntios 12 · Romanos 12 · Efésios 4",
    chapters: [
      {
        title: "Introdução",
        content: `
          <h1>Dons Espirituais</h1>
          <p class="subtitle">Estudo para Pregação — Versículo a Versículo</p>
          <div class="intro">
            <p>Os dons espirituais são capacitações sobrenaturais dadas pelo Espírito Santo a cada crente para o bem comum da igreja e a edificação do corpo de Cristo. O foco não é o prestígio individual, mas a unidade e o serviço.</p>
            <p><strong>Textos principais:</strong> 1 Coríntios 12:1-11 · Romanos 12:6-8 · Efésios 4:11</p>
          </div>
        `
      },
      {
        title: "1 Coríntios 12:1-7",
        content: `
          <h2>1 Coríntios 12:1-7</h2>
          <div class="verse">
            <strong>Versículo 1</strong><br>
            “Irmãos, quanto aos dons espirituais, não quero que vocês sejam ignorantes.”
          </div>
          <div class="explanation">
            <p>Paulo começa deixando claro que o conhecimento correto sobre os dons é essencial. A ignorância leva a abusos, orgulho ou desprezo.</p>
          </div>
          <div class="verse">
            <strong>Versículo 3</strong><br>
            “Ninguém que fala pelo Espírito de Deus diz: ‘Jesus seja amaldiçoado’; e ninguém pode dizer: ‘Jesus é Senhor’, a não ser pelo Espírito Santo.”
          </div>
          <div class="explanation">
            <p>O teste fundamental: o Espírito sempre glorifica Jesus. Qualquer manifestação que diminua a soberania de Cristo não vem de Deus.</p>
          </div>
          <div class="verse">
            <strong>Versículos 4-7</strong><br>
            “Há diferentes tipos de dons, mas o Espírito é o mesmo... A cada um, porém, é dada a manifestação do Espírito, visando ao bem comum.”
          </div>
          <div class="explanation">
            <p>Diversidade de dons, mas unidade na Trindade. Todo cristão recebe pelo menos uma manifestação do Espírito para o proveito de todos.</p>
          </div>
        `
      },
      {
        title: "Os Dons Listados",
        content: `
          <h2>Os Dons (1 Coríntios 12:8-11)</h2>
          <div class="verse">
            <strong>Versículos 8-10</strong><br>
            Palavra de sabedoria, palavra de conhecimento, fé, dons de curar, operação de milagres, profecia, discernimento de espíritos, variedade de línguas e interpretação de línguas.
          </div>
          <div class="explanation">
            <p><strong>Palavra de sabedoria / conhecimento:</strong> revelação prática da vontade de Deus.</p>
            <p><strong>Fé:</strong> confiança especial para o impossível.</p>
            <p><strong>Curas e milagres:</strong> manifestações sobrenaturais de poder.</p>
            <p><strong>Profecia:</strong> proclamação que edifica, exorta e consola.</p>
            <p><strong>Discernimento:</strong> distinguir a origem espiritual.</p>
            <p><strong>Línguas e interpretação:</strong> falar e entender mensagens sobrenaturais.</p>
          </div>
          <div class="verse">
            <strong>Versículo 11</strong><br>
            “Todas essas coisas são realizadas pelo mesmo e único Espírito, e ele as distribui individualmente, a cada um, como quer.”
          </div>
          <div class="explanation">
            <p>O Espírito distribui soberanamente. Buscamos com zelo (1 Co 14:1), mas usamos com humildade o que recebemos.</p>
          </div>
        `
      },
      {
        title: "Aplicação",
        content: `
          <h2>Aplicação Prática</h2>
          <div class="application">
            <h3>Para a Pregação</h3>
            <ul>
              <li>Os dons existem para edificar, não dividir.</li>
              <li>Todo crente recebeu pelo menos um dom — descubra e use-o.</li>
              <li>Busque com zelo os dons, mas acima de tudo o amor (1 Co 13).</li>
              <li>Romanos 12 acrescenta dons práticos: servir, ensinar, encorajar, contribuir, liderar, misericórdia.</li>
              <li>Efésios 4:11 fala dos dons ministeriais para equipar os santos.</li>
            </ul>
          </div>
          <p style="margin-top: 2rem; text-align: center; color: var(--text-muted); font-style: italic;">
            “A cada um é dada a manifestação do Espírito, visando ao bem comum.” — 1 Co 12:7
          </p>
        `
      }
    ]
  },

  batalha: {
    title: "Libertação & Batalha Espiritual",
    subtitle: "Efésios 6 · 2 Coríntios 10",
    chapters: [
      {
        title: "Introdução",
        content: `
          <h1>Libertação &amp; Batalha Espiritual</h1>
          <p class="subtitle">Estudo para Pregação — Versículo a Versículo</p>
          <div class="intro">
            <p>A libertação é a obra de Cristo que nos tira do domínio das trevas. A batalha espiritual é a realidade contínua de resistir ao diabo. Jesus já venceu; nós lutamos <em>a partir</em> da vitória.</p>
            <p><strong>Textos principais:</strong> Efésios 6:10-18 · 2 Coríntios 10:3-5</p>
          </div>
        `
      },
      {
        title: "Efésios 6:10-13",
        content: `
          <h2>Efésios 6:10-13</h2>
          <div class="verse">
            <strong>Versículo 10</strong><br>
            “Finalmente, fortaleçam-se no Senhor e no seu forte poder.”
          </div>
          <div class="explanation">
            <p>A força não vem de nós. A batalha começa com dependência total do poder de Deus.</p>
          </div>
          <div class="verse">
            <strong>Versículo 11-12</strong><br>
            “Vistam toda a armadura de Deus... Pois a nossa luta não é contra seres humanos, mas contra os poderes e autoridades, contra as forças espirituais do mal nas regiões celestiais.”
          </div>
          <div class="explanation">
            <p>O inimigo real não são pessoas, mas forças espirituais. A armadura completa é necessária contra as ciladas do diabo.</p>
          </div>
        `
      },
      {
        title: "A Armadura de Deus",
        content: `
          <h2>A Armadura de Deus (Ef 6:14-17)</h2>
          <div class="verse">
            <strong>Cinto da Verdade · Couraça da Justiça · Calçados do Evangelho · Escudo da Fé · Capacete da Salvação · Espada do Espírito</strong>
          </div>
          <div class="explanation">
            <p><strong>Cinto da verdade:</strong> integridade e fidelidade à Palavra.</p>
            <p><strong>Couraça da justiça:</strong> justiça de Cristo + vida santa.</p>
            <p><strong>Calçados da paz:</strong> prontidão para anunciar o evangelho.</p>
            <p><strong>Escudo da fé:</strong> apaga os dardos inflamados (dúvidas, acusações).</p>
            <p><strong>Capacete da salvação:</strong> proteção da mente.</p>
            <p><strong>Espada do Espírito:</strong> a Palavra — única arma ofensiva.</p>
          </div>
          <div class="verse">
            <strong>Efésios 6:18</strong><br>
            “Orem no Espírito em todas as ocasiões...”
          </div>
          <div class="explanation">
            <p>A oração é o ambiente em que a armadura funciona. Sem oração, tudo fica teórico.</p>
          </div>
        `
      },
      {
        title: "Fortalezas e Aplicação",
        content: `
          <h2>2 Coríntios 10:3-5 e Aplicação</h2>
          <div class="verse">
            <strong>2 Coríntios 10:4-5</strong><br>
            “As armas com as quais lutamos não são humanas; ao contrário, são poderosas em Deus para destruir fortalezas. Destruímos argumentos e toda pretensão que se levanta contra o conhecimento de Deus e levamos cativo todo pensamento à obediência de Cristo.”
          </div>
          <div class="explanation">
            <p>A batalha acontece principalmente na mente. Fortalezas são sistemas de pensamento e mentiras. Levamos todo pensamento cativo a Cristo.</p>
          </div>
          <div class="application">
            <h3>Aplicação Prática</h3>
            <ol>
              <li>Identifique áreas de opressão.</li>
              <li>Confesse e renuncie ao pecado.</li>
              <li>Vista diariamente a armadura pela fé e oração.</li>
              <li>Use a Palavra contra as mentiras.</li>
              <li>Busque comunhão e oração com outros crentes.</li>
            </ol>
          </div>
        `
      }
    ]
  }
};
