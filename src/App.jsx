import { useState } from "react";

const CHARACTERS = [
  {
    id: "mika", name: "佐藤 美香", age: "34歳", role: "シングルマザー", icon: "👩", image: "https://i.imgur.com/K1A2zMY.png",
    color: "#8a4a6a", colorLight: "#f5e8f0",
    tagline: "子どもと二人で、精一杯生きていた。",
    situation: "離婚後、3歳の息子と二人暮らし。パートと育児を掛け持ちしながら、この街で生き直そうとしていた。",
    evidence: [
      { id: 1, icon: "📋", title: "保育所の抽選結果通知", text: "「落選」の二文字。\n\n3回目だった。\n申し込み用紙には、丁寧に理由が書いてあった。「定員超過のため」。\nその夜、息子が笑いかけてきた。" },
      { id: 2, icon: "💬", title: "母親へのLINE", text: "「また落ちた。でも大丈夫。なんとかなる。心配しないで。」\n\n既読がついたのは、翌朝だった。" },
      { id: 3, icon: "📒", title: "家計簿アプリのメモ欄", text: "「今月もギリギリ。緊急の保育、また頼めなかった。シフト、また減らされた。」" },
      { id: 4, icon: "🏢", title: "市の子育て支援窓口 対応記録", text: "担当者メモ：「各種制度を丁寧に説明。利用可能なサービスの案内をした。」\n\n美香さんのメモ欄：（空白）" },
      { id: 5, icon: "🔍", title: "スマホの検索履歴", text: "「シングルマザー 住みやすい 自治体」\n「子育て支援 手厚い 市区町村」\n「保育所 入りやすい 地域」" },
      { id: 6, icon: "📷", title: "最後の写真", text: "引越しのトラックの前で、息子と撮った写真。息子は笑っている。美香さんは、少し遠くを見ていた。" },
    ],
    letter: `息子へ。
いつかこれを読める年になったら、
あのころのことを話してあげたい。

あの街では、毎日必死だった。
保育所の抽選に落ちるたびに、
私が足りないんだと思った。
努力が足りない、工夫が足りない、
と自分を責め続けた。

窓口の人はいつも親切だった。
パンフレットをたくさんくれた。
「こういう制度もありますよ」って
笑顔で教えてくれた。

でも私が欲しかったのは、
制度の説明じゃなかった。

「大変でしたね」の一言と、
明日の保育の場所、それだけだった。

誰も悪くなかった。
だから、誰にも怒れなかった。
怒れないまま、疲れていった。

あなたが笑っていてくれたから、頑張れた。
あの街が嫌いだったわけじゃないよ。
ただ、あの街には、私たちの居場所が、なかった。

お母さんより`,
  },
  {
    id: "kenji", name: "田中 健二・澄子", age: "73歳・71歳", role: "高齢の夫婦", icon: "👴", image: "https://i.imgur.com/xph8VAg.jpeg",
    color: "#4a6a4a", colorLight: "#e8f0e8",
    tagline: "50年住んだ街を、二人で去った。",
    situation: "この街で出会い、子どもを育て、50年を過ごした夫婦。夫が足を悪くしてから、街が少しずつ遠くなっていった。",
    evidence: [
      { id: 1, icon: "🚌", title: "バス路線廃止のお知らせ", text: "「利用者減少のため、○○線を廃止いたします。」\n\n健二さんが通院に使っていた路線だった。" },
      { id: 2, icon: "✏️", title: "息子（雄介）へのメモ書き", text: "「タクシー代、今月また増えた。でも仕方ない。私の通院のことは言えない。」" },
      { id: 3, icon: "📓", title: "澄子さんの日記", text: "「健二さんの通院、今日もタクシーで行った。タクシーの運転手さんが親切で助かった。でも、お金のことを考えると・・・」" },
      { id: 4, icon: "💭", title: "近所の人との会話記録", text: "澄子さんが町内会で一度だけ言ったこと。「バスがなくなって、少し困っています。でも、皆さんも同じですよね。」" },
      { id: 5, icon: "📄", title: "息子が見つけたパンフレット", text: "息子が実家を片付けたとき、引き出しの奥にあった。「高齢者向け送迎サービスのご案内」。封が開いていなかった。" },
      { id: 6, icon: "📷", title: "最後の写真", text: "家の前で撮った写真。二人並んで、少し照れくさそうに笑っていた。" },
    ],
    letter: `雄介へ。
心配をかけてごめんなさい。

50年、この街で生きてきた。
あなたが生まれた病院も、
初めて自転車に乗れた公園も、
全部この街にある。

バスが廃線になった時、最初は「なんとかなる」と思っていた。
けれど、不自由な足では、気力も徐々になくなってきた。

私たちが動けなくなったんじゃなくて、
街が私たちを、置いていったのかもしれない。

悪い人は誰もいなかった。
ただ、私たちのことは視界に入っていないだけで。

この街のことを、悪く言いたくない。
50年分の思い出があるから。

澄子より`,
  },
  {
    id: "family", name: "木村 一家", age: "夫38歳・妻35歳・子6歳・3歳", role: "子育て世代の家族", icon: "👨‍👩‍👧‍👦", image: "https://i.imgur.com/UDQVAKI.png",
    color: "#4a5a8a", colorLight: "#e8ecf5",
    tagline: "この街で子どもを育てようとしていた。",
    situation: "転勤を機にこの街に移住。子どもたちの笑顔のために、ここで根を張るつもりだった。",
    evidence: [
      { id: 1, icon: "📷", title: "公園での写真", text: "家族四人で撮った写真。子どもたちが砂遊びをしている。妻が笑っている。夫が空を見ている。" },
      { id: 2, icon: "💬", title: "夫婦のトーク履歴", text: "妻：「上の子の小学校、学童が抽選なんだって。」\n夫：「また？」\n妻：「また。」" },
      { id: 3, icon: "📓", title: "妻のノート", text: "「この街のことは悪く言いたくはない。人も優しい。でも子育ての仕組みが、私たちに合っていない気がする。どこに言えばいいのかも分からない。」" },
      { id: 4, icon: "📋", title: "小学校の保護者アンケート", text: "「この地域の子育て環境で改善してほしいことはありますか？」\n\n（空白）\n\n※妻のメモ：「書いたけど、読まれる気がしなくて消した。」" },
      { id: 5, icon: "🔍", title: "検索履歴", text: "「子育て支援 充実 自治体 ランキング」\n「移住支援 子育て 手厚い」\n「小学校 学童 入りやすい」" },
      { id: 6, icon: "📷", title: "引越し前日", text: "子どもたちが公園で遊ぶ最後の写真。二人とも無邪気に笑っている。" },
    ],
    letter: `子どもたちへ。
あの街で過ごした2年間のこと、覚えていますか。

お父さんとお母さんは、あの街が好きだった。
でも、あの街では、子どもを育てることが、少し、苦しかった。

誰も意地悪じゃなかった。窓口の人も、先生も、近所の人も。
ただ、わたしたちのような家族がどんなことに困っているか、
あまり考えられていなかった。

相談しようとするたびに、別の窓口に案内された。
アンケートに書こうとしたけど、読まれない気がして、やめた。

あの街のことを、嫌いにならないでほしい。
悪い人は、誰もいなかったから。

お母さんより`,
  },
  {
    id: "yuki", name: "中村 雪", age: "28歳", role: "Uターンで戻った若者", icon: "🧑", image: "https://i.imgur.com/lDheERI.png",
    color: "#7a5a2a", colorLight: "#f5f0e0",
    tagline: "故郷に戻ってきた。でも、居場所がなかった。",
    situation: "都会で5年働いた後、故郷に戻ってきた。地元に貢献したかった。でも街は、彼女が帰ってくることを想定していなかった。",
    evidence: [
      { id: 1, icon: "💼", title: "求人検索の履歴", text: "地元で仕事を探した。\n希望に近い求人が、3件あった。\n応募した。2件は返事がなかった。1件は「経験不足」だった。" },
      { id: 2, icon: "💬", title: "都会の友人へのメッセージ", text: "「なんか、思ってたのと違う。\n地元、変わってないのに、私の居場所がない感じ。うまく言えないけど。」" },
      { id: 3, icon: "📄", title: "地域活性化の説明会 参加記録", text: "市が主催する「若者定住促進」の説明会。参加者：雪さん含む7名。\n\n雪さんのメモ：「話を聞く場所が、なかった。」" },
      { id: 4, icon: "📓", title: "日記", text: "「帰ってきたことを後悔したくない。でも、私がここにいていいのか、分からなくなってきた。」" },
      { id: 5, icon: "🔍", title: "検索履歴", text: "「地方移住 若者 成功 失敗」\n「Uターン 後悔」\n「地元 仕事 ない」" },
      { id: 6, icon: "📷", title: "最後の日", text: "子どもの頃から通っていた、川沿いの道の写真。\n\n誰も写っていなかった。" },
    ],
    letter: `故郷へ。
帰ってきたかった。本当に、帰りたかった。

でも街は、私が戻ってくることを、あまり考えていなかったみたいだった。

若者定住、と書いてあるポスターを何枚も見た。
でも働く場所を、なかなか見つけられなかった。
意見を言える場所も、なかった。必要とされている感じが、しなかった。

説明会に行った。みんな親切だった。
でも話を聞く場所は、なかった。
私が何ができるか、何を求めているか、誰も聞かなかった。

想定されていない場所にいると、少しずつ、自分が透明になっていく気がした。

いつかこの街が、帰ってきた誰かに「おかえり」と言える街になったとき、
また戻ってこようと思っている。

雪より`,
  },
];

const DISCUSSION = [
  "この人物に似た住民が、あなたの街にもいますか？",
  "彼らはなぜ、行政に声を届けられなかったのでしょう？",
  "どのタイミングで、行政が介入できた可能性がありましたか？",
  "「悪い人は誰もいなかった」という言葉を、どう受け止めますか？",
  "あなたの担当業務と、この離脱はどこかで繋がっていますか？",
];

export default function ShesGoneBoard() {
  const [screen, setScreen] = useState("title");
  const [currentChar, setCurrentChar] = useState(null);
  const [revealed, setRevealed] = useState([]);
  const [newCard, setNewCard] = useState(null);

  const startChar = (char) => { setCurrentChar(char); setRevealed([]); setNewCard(null); setScreen("game"); };
  const revealCard = (id) => { setRevealed(prev => [...prev, id]); setNewCard(id); setTimeout(() => setNewCard(null), 2500); };
  const canReveal = (i) => {
    if (!currentChar) return false;
    if (revealed.includes(currentChar.evidence[i].id)) return false;
    if (i === 0) return true;
    return revealed.includes(currentChar.evidence[i - 1].id);
  };

  const s = {
    wrap: { minHeight: "100vh", background: "#0d0d12", fontFamily: "'DM Mono', monospace", color: "#e8e0d0" },
    title: { minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 24px", textAlign: "center" },
    eyebrow: { fontSize: "9px", letterSpacing: "5px", color: "#5a4a6a", textTransform: "uppercase", marginBottom: "32px" },
    titleMain: { fontFamily: "serif", fontSize: "clamp(32px,6vw,48px)", letterSpacing: "8px", marginBottom: "8px" },
    titleEn: { fontSize: "11px", color: "#5a4a6a", letterSpacing: "8px", marginBottom: "32px" },
    titleSub: { fontFamily: "serif", fontSize: "13px", color: "#7a6a8a", lineHeight: "2.2", marginBottom: "40px", maxWidth: "480px" },
    grid: { display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "14px", maxWidth: "560px", width: "100%", marginBottom: "24px" },
    card: (c) => ({ background: "#110e18", border: `1px solid #2a2030`, borderTop: `2px solid ${c}`, padding: "20px 18px", cursor: "pointer", textAlign: "left" }),
    game: { minHeight: "100vh", padding: "28px 20px", maxWidth: "920px", margin: "0 auto" },
    header: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px", paddingBottom: "18px", borderBottom: "1px solid #2a2030", gap: "16px" },
    back: { background: "transparent", border: "1px solid #2a2030", color: "#5a4a6a", fontFamily: "inherit", fontSize: "8px", letterSpacing: "2px", padding: "6px 12px", cursor: "pointer" },
    layout: { display: "grid", gridTemplateColumns: "clamp(200px, 100%, 1fr) clamp(200px, 280px, 280px)", gap: "20px", flexWrap: "wrap" },
    evCard: (revealed, unlockable) => ({ border: `1px solid ${revealed ? "#2a2030" : unlockable ? "#3a2a4a" : "#1a1520"}`, opacity: revealed || unlockable ? 1 : 0.35, background: revealed ? "#0e0b15" : "transparent", marginBottom: "10px", overflow: "hidden" }),
    evInner: { padding: "16px 18px" },
    evLocked: { padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" },
    unlockBtn: { background: "#1a1425", border: "1px solid #4a3a5a", color: "#8a6aaa", fontFamily: "inherit", fontSize: "8px", letterSpacing: "2px", padding: "6px 12px", cursor: "pointer" },
    panel: { display: "flex", flexDirection: "column", gap: "12px" },
    panelCard: { background: "#0e0b15", border: "1px solid #2a2030", padding: "18px" },
    label: { fontSize: "7px", color: "#4a3a5a", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "10px" },
    letter: { minHeight: "100vh", padding: "48px 20px", display: "flex", flexDirection: "column", alignItems: "center" },
    paper: { maxWidth: "520px", width: "100%", background: "#faf6f0", padding: "44px 48px", marginBottom: "40px" },
    paperText: { fontFamily: "serif", fontSize: "13px", color: "#2a2020", lineHeight: "2.4", whiteSpace: "pre-line" },
    disc: { maxWidth: "520px", width: "100%", marginBottom: "40px" },
    q: { background: "#110e18", border: "1px solid #2a2030", padding: "12px 16px", fontFamily: "serif", fontSize: "12px", color: "#7a6a8a", lineHeight: "1.8", display: "flex", gap: "10px", marginBottom: "8px" },
    actions: { display: "flex", gap: "10px", maxWidth: "520px", width: "100%" },
    btn: (primary) => ({ flex: 1, padding: "11px", fontFamily: "inherit", fontSize: "9px", letterSpacing: "2px", cursor: "pointer", textTransform: "uppercase", border: "1px solid", borderColor: primary ? "#4a3a5a" : "#2a2030", background: primary ? "#1a1425" : "transparent", color: primary ? "#c8b8d8" : "#5a4a6a" }),
  };

  return (
    <div style={s.wrap}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Mono&display=swap" rel="stylesheet" />

      {screen === "title" && (
        <div style={s.title}>
          <div style={s.eyebrow}>Dr. Canvas — She's Gone / Board Game Edition</div>
          <div style={s.titleMain}>彼女は、いない。</div>
          <div style={s.titleEn}>SHE'S GONE</div>
          <div style={s.titleSub}>
            ある日、前触れもなく<em style={{color:"#c8b8d8",fontStyle:"normal"}}>彼女たちは姿を消した</em>。<br />
            残されていたのは、それぞれの<em style={{color:"#c8b8d8",fontStyle:"normal"}}>小さなメモ</em>だった。<br /><br />
            グループで証拠を集め、推理し、話し合う。<br />
            なぜ彼女たちは、この街を去ったのか。
          </div>
          <div style={s.grid}>
            {CHARACTERS.map(c => (
              <div key={c.id} style={s.card(c.color)} onClick={() => startChar(c)}>
                <img src={c.image} alt={c.name} style={{width:"100%",height:"120px",objectFit:"cover",objectPosition:"top",marginBottom:"10px"}} />
                <div style={{fontSize:"8px",letterSpacing:"3px",textTransform:"uppercase",color:c.color,marginBottom:"6px"}}>{c.role}</div>
                <div style={{fontFamily:"serif",fontSize:"16px",marginBottom:"4px"}}>{c.name}</div>
                <div style={{fontSize:"9px",color:"#5a4a6a",marginBottom:"8px"}}>{c.age}</div>
                <div style={{fontFamily:"serif",fontSize:"10px",color:"#8a7a9a",lineHeight:"1.8"}}>{c.tagline}</div>
              </div>
            ))}
          </div>
          <div style={{fontSize:"9px",color:"#3a2a4a",letterSpacing:"2px"}}>※ 1ケース約30分。グループで話し合いながら進めてください。</div>
        </div>
      )}

      {screen === "game" && currentChar && (
        <div style={s.game}>
          <div style={s.header}>
            <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
              <button style={s.back} onClick={() => setScreen("title")}>← キャラクター選択に戻る</button>
              <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
                <img src={currentChar.image} alt={currentChar.name} style={{width:"60px",height:"60px",objectFit:"cover",objectPosition:"top",borderRadius:"2px"}} />
                <div>
                  <div style={{fontSize:"7px",letterSpacing:"3px",textTransform:"uppercase",color:currentChar.color,marginBottom:"4px"}}>{currentChar.role}</div>
                  <div style={{fontFamily:"serif",fontSize:"20px",marginBottom:"4px"}}>{currentChar.name}</div>
                  <div style={{fontFamily:"serif",fontSize:"10px",color:"#8a7a9a"}}>{currentChar.tagline}</div>
                </div>
              </div>
            </div>
            <div style={{textAlign:"right",flexShrink:0}}>
              <div style={{fontSize:"7px",color:"#4a3a5a",letterSpacing:"2px",marginBottom:"6px"}}>証拠開示</div>
              <div style={{width:"100px",height:"1px",background:"#2a2030",marginLeft:"auto"}}>
                <div style={{height:"100%",width:`${(revealed.length/currentChar.evidence.length)*100}%`,background:currentChar.color,transition:"width 0.4s"}} />
              </div>
              <div style={{fontFamily:"serif",fontSize:"16px",textAlign:"right",marginTop:"6px",color:currentChar.color}}>{revealed.length}/{currentChar.evidence.length}</div>
            </div>
          </div>

          <div style={{background:"#0e0b15",border:"1px solid #2a2030",padding:"16px 18px",marginBottom:"20px"}}>
            <div style={s.label}>この人物について</div>
            <div style={{fontFamily:"serif",fontSize:"11px",color:"#6a5a7a",lineHeight:"2"}}>{currentChar.situation}</div>
          </div>

          <div style={s.layout}>
            <div>
              {currentChar.evidence.map((ev, i) => {
                const isRevealed = revealed.includes(ev.id);
                const unlockable = canReveal(i);
                const isNew = newCard === ev.id;
                return (
                  <div key={ev.id} style={s.evCard(isRevealed, unlockable)}>
                    {isRevealed ? (
                      <div style={s.evInner}>
                        {isNew && <div style={{display:"inline-block",fontSize:"7px",letterSpacing:"2px",padding:"2px 8px",marginBottom:"10px",background:currentChar.color,color:currentChar.colorLight}}>NEW</div>}
                        <div style={{display:"flex",gap:"10px",alignItems:"flex-start",marginBottom:"8px"}}>
                          <span style={{fontSize:"16px",flexShrink:0}}>{ev.icon}</span>
                          <div>
                            <div style={{fontSize:"7px",color:"#5a4a6a",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"4px"}}>証拠 {String(ev.id).padStart(2,"0")}</div>
                            <div style={{fontFamily:"serif",fontSize:"12px",color:"#c8b8d8"}}>{ev.title}</div>
                          </div>
                        </div>
                        <div style={{fontFamily:"serif",fontSize:"11px",color:"#7a6a8a",lineHeight:"1.9",whiteSpace:"pre-line"}}>{ev.text}</div>
                      </div>
                    ) : (
                      <div style={s.evLocked}>
                        <div>
                          <div style={{fontSize:"8px",color:"#3a2a4a",letterSpacing:"3px"}}>証拠 {String(ev.id).padStart(2,"0")}</div>
                          <div style={{fontSize:"8px",color:"#4a3040"}}>{unlockable ? "── 開示可能" : "── 鍵がかかっている"}</div>
                        </div>
                        {unlockable && <button style={s.unlockBtn} onClick={() => revealCard(ev.id)}>開封する</button>}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div style={s.panel}>
              <button
                style={{width:"100%",border:"1px solid",fontFamily:"inherit",fontSize:"9px",letterSpacing:"3px",padding:"12px",cursor:revealed.length<3?"not-allowed":"pointer",textTransform:"uppercase",background:revealed.length>=3?currentChar.color+"22":"transparent",borderColor:revealed.length>=3?currentChar.color:"#2a2030",color:revealed.length>=3?currentChar.colorLight:"#3a2a4a",opacity:revealed.length<3?0.3:1}}
                disabled={revealed.length < 3}
                onClick={() => setScreen("letter")}
              >
                {revealed.length < 3 ? "証拠をもっと集めろ" : "手紙を開封する"}
              </button>
              <div>
                <div style={s.label}>グループ議論メモ</div>
                <textarea placeholder="気づいたこと、チームの意見を書き留める..." style={{width:"100%",background:"#0e0b15",border:"1px solid #2a2030",padding:"10px",fontFamily:"serif",fontSize:"11px",color:"#7a6a8a",minHeight:"80px",resize:"vertical",outline:"none",lineHeight:"1.8"}} />
              </div>
            </div>
          </div>
        </div>
      )}

      {screen === "letter" && currentChar && (
        <div style={s.letter}>
          <div style={{fontSize:"8px",color:"#5a4a6a",letterSpacing:"5px",textTransform:"uppercase",marginBottom:"16px"}}>彼女が残した、最後のメッセージ</div>
          <div style={{fontFamily:"serif",fontSize:"18px",color:currentChar.color,letterSpacing:"4px",marginBottom:"24px",display:"flex",alignItems:"center",gap:"16px"}}>
            <img src={currentChar.image} alt={currentChar.name} style={{width:"60px",height:"60px",objectFit:"cover",objectPosition:"top",borderRadius:"2px"}} />
            {currentChar.name}
          </div>
          <div style={s.paper}>
            <div style={s.paperText}>{currentChar.letter}</div>
          </div>
          <div style={s.disc}>
            <div style={{fontSize:"8px",color:"#5a4a6a",letterSpacing:"4px",textTransform:"uppercase",marginBottom:"14px"}}>グループで話し合う</div>
            {DISCUSSION.map((q, i) => (
              <div key={i} style={s.q}>
                <span style={{color:"#4a3a5a",fontSize:"9px",flexShrink:0,marginTop:"2px"}}>Q{i+1}</span>
                <span>{q}</span>
              </div>
            ))}
          </div>
          <div style={s.actions}>
            <button style={s.btn(false)} onClick={() => startChar(currentChar)}>もう一度体験する</button>
            <button style={s.btn(true)} onClick={() => setScreen("title")}>別の人物を選ぶ</button>
          </div>
        </div>
      )}
    </div>
  );
}
