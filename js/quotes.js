const quotes = [
  {
    quote:
      "어디에도 없는 너를 당신, 하고 부를 때 내가 부르는 것은 너인지, 나인지, 그인지",
    auther: "윤해서",
  },
  {
    quote:
      "사람 a는 세상에 존재하는 모든 책을 다 읽어버리면 더 이상 읽을 책이 없을까 봐 책을 읽지 않았다.",
    auther: "문보영",
  },
  {
    quote: "고정된 것은 없다 나에게는 그것이 중요하다",
    auther: "백은선",
  },
  {
    quote:
      "붉고 찬란한 당신을 풀어지게 허공에다 놓아줄까 번지게 물속에다 놓아줄까",
    auther: "이병률",
  },
  {
    quote: "This, Too, Shall Pass Away",
    auther: "Lanta Wilson Smith",
  },
  {
    quote:
      "있지 요새 거울을 바라보면 얼굴이 있어야 할 자리에 차원이 휘날리고 있어",
    auther: "이상우",
  },
  {
    quote: "이름은 어떤 사물에 대한 가장 제한적인 정의이다.",
    auther: "이승우",
  },
  {
    quote: "꿈에서 깨지 않는 한 내일은 여기서부터 다시 시작된다",
    auther: "이소호",
  },
  {
    quote: "우린, 죽음으로부터 같은 거리에 있는 점들의 집합",
    auther: "함기석",
  },
  {
    quote: "모든 확신은 폭력의 일종이었으나",
    auther: "최영건",
  },
];

const quote = document.querySelector("#quote span:first-child");
const auther = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
auther.innerText = todaysQuote.auther;
