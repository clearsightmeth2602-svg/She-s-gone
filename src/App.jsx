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
    letter: `私の故郷へ。
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

  const goTo = (s) => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setScreen(s);
  };

  const startChar = (char) => {
    setCurrentChar(char);
    setRevealed([]);
    setNewCard(null);
    window.scrollTo({ top: 0, behavior: "instant" });
    setScreen("game");
  };

  const revealCard = (id) => {
    setRevealed(prev => [...prev, id]);
    setNewCard(id);
    setTimeout(() => setNewCard(null), 2500);
  };

  const canReveal = (i) => {
    if (!currentChar) return false;
    if (revealed.includes(currentChar.evidence[i].id)) return false;
    if (i === 0) return true;
    return revealed.includes(currentChar.evidence[i - 1].id);
  };

  const s = {
    wrap: { minHeight: "100vh", background: "#0d0d12", fontFamily: "'DM Mono', monospace", color: "#f0ecf8" },
    title: { minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 24px", textAlign: "center" },
    titleMain: { fontFamily: "serif", fontSize: "clamp(32px,6vw,48px)", letterSpacing: "8px", marginBottom: "8px", fontWeight: "700", color: "#ffffff" },
    titleEn: { fontSize: "15px", color: "#b0a0c0", letterSpacing: "8px", marginBottom: "32px", fontWeight: "500" },
    titleSub: { fontFamily: "serif", fontSize: "15px", color: "#c8bcd8", lineHeight: "2.2", marginBottom: "40px", maxWidth: "640px" },
    grid: { display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "14px", maxWidth: "800px", width: "100%", marginBottom: "24px" },
    card: (c) => ({ background: "#110e18", border: `1px solid #3a2a4a`, borderTop: `2px solid ${c}`, padding: "20px 18px", cursor: "pointer", textAlign: "left" }),
    header: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px", paddingBottom: "18px", borderBottom: "1px solid #2a2030", gap: "16px", flexWrap: "wrap" },
    back: { background: "transparent", border: "1px solid #5a4a6a", color: "#d0c0e0", fontFamily: "inherit", fontSize: "13px", letterSpacing: "2px", padding: "8px 14px", cursor: "pointer", fontWeight: "500" },
    evCard: (rev, unlockable) => ({ border: `1px solid ${rev ? "#3a2a4a" : unlockable ? "#4a3a5a" : "#2a2030"}`, opacity: rev || unlockable ? 1 : 0.45, background: rev ? "#0e0b15" : "transparent", marginBottom: "10px", overflow: "hidden" }),
    evInner: { padding: "16px 18px" },
    evLocked: { padding: "14px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" },
    unlockBtn: { background: "#1a1425", border: "1px solid #6a5a7a", color: "#e0d0f0", fontFamily: "inherit", fontSize: "13px", letterSpacing: "2px", padding: "8px 16px", cursor: "pointer", fontWeight: "600" },
    panel: { display: "flex", flexDirection: "column", gap: "12px" },
    label: { fontSize: "12px", color: "#c0b0d0", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "10px", fontWeight: "600" },
    letter: { minHeight: "100vh", padding: "48px 20px", display: "flex", flexDirection: "column", alignItems: "center" },
    paper: { maxWidth: "680px", width: "100%", background: "#faf6f0", padding: "44px 48px", marginBottom: "40px" },
    paperText: { fontFamily: "serif", fontSize: "15px", color: "#1a1010", lineHeight: "2.4", whiteSpace: "pre-line", fontWeight: "500" },
    disc: { maxWidth: "680px", width: "100%", marginBottom: "40px" },
    q: { background: "#110e18", border: "1px solid #3a2a4a", padding: "14px 18px", fontFamily: "serif", fontSize: "14px", color: "#e0d8f0", lineHeight: "1.8", display: "flex", gap: "10px", marginBottom: "8px" },
    actions: { display: "flex", gap: "10px", maxWidth: "680px", width: "100%" },
    btn: (primary) => ({ flex: 1, padding: "12px", fontFamily: "inherit", fontSize: "13px", letterSpacing: "2px", cursor: "pointer", textTransform: "uppercase", border: "1px solid", borderColor: primary ? "#7a6a8a" : "#4a3a5a", background: primary ? "#1a1425" : "transparent", color: primary ? "#e8d8f8" : "#c8b8d8", fontWeight: "500" }),
  };

  return (
    <div style={s.wrap}>
      <style>{`
        @media (max-width: 768px) {
          .game-wrap { padding: 16px 12px !important; }
          .game-layout { grid-template-columns: 1fr !important; }
          .panel-top { order: -1; }
          .paper-box { padding: 28px 20px !important; }
        }
      `}</style>
      <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />

      {screen === "title" && (
        <div style={s.title}>
          <div style={{ fontSize: "12px", letterSpacing: "3px", color: "#b0a0c0", marginBottom: "32px", fontWeight: "500" }}>© Prime Design Factory</div>
          <div style={s.titleMain}>彼女は、いない。</div>
          <div style={s.titleEn}>SHE'S GONE</div>
          <div style={s.titleSub}>
            ある日、前触れもなく<em style={{color:"#ffffff",fontStyle:"normal",fontWeight:"700"}}>彼女たちは姿を消した</em>。<br />
            残されていたのは、それぞれの<em style={{color:"#ffffff",fontStyle:"normal",fontWeight:"700"}}>小さなメモ</em>だった。<br /><br />
            グループで証拠を集め、推理し、話し合う。<br />
            なぜ彼女たちは、この街を去ったのか。
          </div>
          <div style={s.grid}>
            {CHARACTERS.map(c => (
              <div key={c.id} style={s.card(c.color)} onClick={() => startChar(c)}>
                <img src={c.image} alt={c.name} style={{width:"100%",height:"120px",objectFit:"cover",objectPosition:"top",marginBottom:"10px"}} />
                <div style={{fontSize:"11px",letterSpacing:"3px",textTransform:"uppercase",color:c.color,marginBottom:"6px",fontWeight:"600"}}>{c.role}</div>
                <div style={{fontFamily:"serif",fontSize:"16px",marginBottom:"4px",color:"#ffffff",fontWeight:"700"}}>{c.name}</div>
                <div style={{fontSize:"12px",color:"#b0a0c0",marginBottom:"8px"}}>{c.age}</div>
                <div style={{fontFamily:"serif",fontSize:"13px",color:"#d0c4e0",lineHeight:"1.8"}}>{c.tagline}</div>
              </div>
            ))}
          </div>
          <div style={{fontSize:"12px",color:"#9088a0",letterSpacing:"2px"}}>※ 1ケース約30分。グループで話し合いながら進めてください。</div>
        </div>
      )}

      {screen === "game" && currentChar && (
        <div className="game-wrap" style={{minHeight:"100vh",padding:"28px 40px",maxWidth:"1300px",margin:"0 auto",boxSizing:"border-box"}}>
          <div style={s.header}>
            <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
              <button style={s.back} onClick={() => goTo("title")}>← キャラクター選択に戻る</button>
              <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
                <img src={currentChar.image} alt={currentChar.name} style={{width:"60px",height:"60px",objectFit:"cover",objectPosition:"top",borderRadius:"2px"}} />
                <div>
                  <div style={{fontSize:"11px",letterSpacing:"3px",textTransform:"uppercase",color:currentChar.color,marginBottom:"4px",fontWeight:"600"}}>{currentChar.role}</div>
                  <div style={{fontFamily:"serif",fontSize:"20px",marginBottom:"4px",color:"#ffffff",fontWeight:"700"}}>{currentChar.name}</div>
                  <div style={{fontFamily:"serif",fontSize:"13px",color:"#c8bcd8"}}>{currentChar.tagline}</div>
                </div>
              </div>
            </div>
            <div style={{textAlign:"right",flexShrink:0}}>
              <div style={{fontSize:"12px",color:"#c0b0d0",letterSpacing:"2px",marginBottom:"6px",fontWeight:"500"}}>証拠開示</div>
              <div style={{width:"100px",height:"2px",background:"#2a2030",marginLeft:"auto"}}>
                <div style={{height:"100%",width:`${(revealed.length/currentChar.evidence.length)*100}%`,background:currentChar.color,transition:"width 0.4s"}} />
              </div>
              <div style={{fontFamily:"serif",fontSize:"18px",textAlign:"right",marginTop:"6px",color:currentChar.color,fontWeight:"700"}}>{revealed.length}/{currentChar.evidence.length}</div>
            </div>
          </div>

          <div style={{background:"#0e0b15",border:"1px solid #2a2030",padding:"16px 18px",marginBottom:"20px"}}>
            <div style={s.label}>この人物について</div>
            <div style={{fontFamily:"serif",fontSize:"14px",color:"#d0c8e0",lineHeight:"2"}}>{currentChar.situation}</div>
          </div>

          <div className="game-layout" style={{display:"grid",gridTemplateColumns:"1fr minmax(200px,280px)",gap:"20px"}}>
            <div>
              {currentChar.evidence.map((ev, i) => {
                const isRevealed = revealed.includes(ev.id);
                const unlockable = canReveal(i);
                const isNew = newCard === ev.id;
                return (
                  <div key={ev.id} style={s.evCard(isRevealed, unlockable)}>
                    {isRevealed ? (
                      <div style={s.evInner}>
                        {isNew && <div style={{display:"inline-block",fontSize:"11px",letterSpacing:"2px",padding:"2px 8px",marginBottom:"10px",background:currentChar.color,color:currentChar.colorLight,fontWeight:"700"}}>NEW</div>}
                        <div style={{display:"flex",gap:"10px",alignItems:"flex-start",marginBottom:"8px"}}>
                          <span style={{fontSize:"16px",flexShrink:0}}>{ev.icon}</span>
                          <div>
                            <div style={{fontSize:"11px",color:"#b0a0c0",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"4px",fontWeight:"500"}}>証拠 {String(ev.id).padStart(2,"0")}</div>
                            <div style={{fontFamily:"serif",fontSize:"15px",color:"#ffffff",fontWeight:"700"}}>{ev.title}</div>
                          </div>
                        </div>
                        <div style={{fontFamily:"serif",fontSize:"14px",color:"#d8d0e8",lineHeight:"1.9",whiteSpace:"pre-line"}}>{ev.text}</div>
                      </div>
                    ) : (
                      <div style={s.evLocked}>
                        <div>
                          <div style={{fontSize:"12px",color:"#b0a0c0",letterSpacing:"3px",fontWeight:"500"}}>証拠 {String(ev.id).padStart(2,"0")}</div>
                          <div style={{fontSize:"12px",color:unlockable?"#d0c0e0":"#8a7a9a"}}>{unlockable ? "── 開示可能" : "── 鍵がかかっている"}</div>
                        </div>
                        {unlockable && <button style={s.unlockBtn} onClick={() => revealCard(ev.id)}>開封する</button>}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="panel-top" style={s.panel}>
              <button
                style={{width:"100%",border:"1px solid",fontFamily:"inherit",fontSize:"13px",letterSpacing:"3px",padding:"14px",cursor:revealed.length<3?"not-allowed":"pointer",textTransform:"uppercase",background:revealed.length>=3?currentChar.color+"33":"transparent",borderColor:revealed.length>=3?currentChar.color:"#3a2a4a",color:revealed.length>=3?"#ffffff":"#8a7a9a",opacity:revealed.length<3?0.4:1,fontWeight:"600"}}
                disabled={revealed.length < 3}
                onClick={() => goTo("letter")}
              >
                {revealed.length < 3 ? "証拠をもっと集めろ" : "手紙を開封する"}
              </button>
              <div>
                <div style={s.label}>グループ議論メモ</div>
                <textarea placeholder="気づいたこと、チームの意見を書き留める..." style={{width:"100%",background:"#0e0b15",border:"1px solid #2a2030",padding:"10px",fontFamily:"serif",fontSize:"13px",color:"#d0c8e0",minHeight:"80px",resize:"vertical",outline:"none",lineHeight:"1.8",boxSizing:"border-box"}} />
              </div>
            </div>
          </div>
        </div>
      )}

      {screen === "letter" && currentChar && (
        <div style={s.letter}>
          <div style={{fontSize:"12px",color:"#b0a0c0",letterSpacing:"5px",textTransform:"uppercase",marginBottom:"16px",fontWeight:"500"}}>彼女が残した、最後のメッセージ</div>
          <div style={{fontFamily:"serif",fontSize:"18px",color:currentChar.color,letterSpacing:"4px",marginBottom:"24px",display:"flex",alignItems:"center",gap:"16px",fontWeight:"700"}}>
            <img src={currentChar.image} alt={currentChar.name} style={{width:"60px",height:"60px",objectFit:"cover",objectPosition:"top",borderRadius:"2px"}} />
            {currentChar.name}
          </div>
          <div className="paper-box" style={s.paper}>
            <div style={s.paperText}>{currentChar.letter}</div>
          </div>
          <div style={s.disc}>
            <div style={{fontSize:"12px",color:"#c0b0d0",letterSpacing:"4px",textTransform:"uppercase",marginBottom:"14px",fontWeight:"600"}}>グループで話し合う</div>
            {DISCUSSION.map((q, i) => (
              <div key={i} style={s.q}>
                <span style={{color:"#c0b0d0",fontSize:"13px",flexShrink:0,marginTop:"2px",fontWeight:"700"}}>Q{i+1}</span>
                <span>{q}</span>
              </div>
            ))}
          </div>
          <div style={s.actions}>
            <button style={s.btn(false)} onClick={() => startChar(currentChar)}>もう一度体験する</button>
            <button style={s.btn(true)} onClick={() => goTo("title")}>別の人物を選ぶ</button>
          </div>
          <div style={{maxWidth:"680px",width:"100%",marginTop:"40px",padding:"24px 28px",borderTop:"1px solid #2a2030",textAlign:"center"}}>
            <div style={{fontFamily:"serif",fontSize:"14px",color:"#d0c8e0",lineHeight:"2.2"}}>
              ※人口流出9,921人という数字は、ただの統計ではありません。その一人ひとりに、去らなければならなかった『理由』と、守れなかった『日常』があります。
            </div>
            <div style={{fontSize:"11px",color:"#9088a0",marginTop:"10px",letterSpacing:"2px"}}>（2025年人口移動報告より出典）</div>
          </div>
        </div>
      )}
    </div>
  );
}
