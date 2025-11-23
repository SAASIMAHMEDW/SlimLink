export type UrlTracker = {
  url: string;
  code: string;
  lastClicked: number;
  totalClicked: number;
  createdAt: number;
};

export const URLDATA: UrlTracker[] = [
  {
    url: "https://www.example.com/very-long-url-path/article/12345",
    code: "aB3xY9",
    lastClicked: 1732312800000,
    totalClicked: 157,
    createdAt: 1730808000000,
  },
  {
    url: "https://github.com/username/awesome-react-project",
    code: "gH7kL2",
    lastClicked: 1732299600000,
    totalClicked: 89,
    createdAt: 1731081600000,
  },
  {
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    code: "rT4mN8",
    lastClicked: 1732305200000,
    totalClicked: 342,
    createdAt: 1729728000000,
  },
  {
    url: "https://medium.com/article/understanding-typescript-generics",
    code: "pQ9sW1",
    lastClicked: 1732290000000,
    totalClicked: 23,
    createdAt: 1732161600000,
  },
  {
    url: "https://stackoverflow.com/questions/12345/react-state-management",
    code: "vF5nB6",
    lastClicked: 1732276400000,
    totalClicked: 501,
    createdAt: 1728691200000,
  },
  {
    url: "https://docs.react.dev/learn/hooks",
    code: "zK2dJ4",
    lastClicked: 1732319400000,
    totalClicked: 12,
    createdAt: 1732248000000,
  },
];
