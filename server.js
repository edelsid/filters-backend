const express = require ("express");
const cors = require ("cors");
const bodyParser = require ("body-parser");
const app = express();

app.use(cors());
app.use(
  bodyParser.json({
  type(req) {
    return true;
  },
  })
);

app.use(function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  next();
});

const reviews = [
  {
    id: 1,
    platform: "Google",
    rating: 4,
    date: "2023-11-15T10:00:00Z",
    text: "Отличный сервис!",
  },
  {
    id: 2,
    platform: "Яндекс",
    rating: 3,
    date: "2023-11-14T09:00:00Z",
    text: "Хорошо, но есть недочеты.",
  },
  {
    id: 3,
    platform: "2ГИС",
    rating: 5,
    date: "2023-11-13T08:00:00Z",
    text: "Прекрасно!",
  },
  {
    id: 4,
    platform: "2ГИС",
    rating: 3,
    date: "2023-11-12T09:23:00Z",
    text: "Могло быть хуже...",
  },
  {
    id: 5,
    platform: "Яндекс",
    rating: 3,
    date: "2023-12-12T07:22:00Z",
    text: "Ждал лучшего",
  },
  {
    id: 6,
    platform: "Google",
    rating: 4,
    date: "2023-11-12T11:12:00Z",
    text: "Очень даже неплохо!",
  },
  {
    id: 7,
    platform: "2ГИС",
    rating: 5,
    date: "2023-10-11T04:44:00Z",
    text: "Самый лучший сервис",
  },
  {
    id: 8,
    platform: "Яндекс",
    rating: 2,
    date: "2023-12-12T10:30:00Z",
    text: "Раньше было лучше",
  },
  {
    id: 9,
    platform: "Google",
    rating: 4,
    date: "2023-12-17T05:21:00Z",
    text: "Ожиданиям соответствует",
  },
  {
    id: 10,
    platform: "Google",
    rating: 5,
    date: "2023-12-14T12:22:00Z",
    text: "Лучше не нашел",
  },
  {
    id: 11,
    platform: "2ГИС",
    rating: 2,
    date: "2023-12-12T12:21:00Z",
    text: "Как так можно вообще",
  },
  {
    id: 12,
    platform: "Яндекс",
    rating: 5,
    date: "2023-11-21T02:44:00Z",
    text: "Буду советовать друзьям!",
  },
  {
    id: 13,
    platform: "2ГИС",
    rating: 5,
    date: "2023-11-05T04:52:00Z",
    text: "Лучше не знаю",
  },
  {
    id: 14,
    platform: "Google",
    rating: 3,
    date: "2023-12-10T12:04:00Z",
    text: "Поддержка никакая",
  },
  {
    id: 15,
    platform: "Google",
    rating: 2,
    date: "2023-12-02T09:12:00Z",
    text: "Поездка сорвалась из-за вас((",
  },
  {
    id: 16,
    platform: "Яндекс",
    rating: 5,
    date: "2023-12-04T09:45:00Z",
    text: "Отвечают быстро",
  },
];

app.get("/", (req, res) => {
  res.status(500).send("online");
})

app.get("/posts", (req, res) => {
  try {
    res.send(JSON.stringify(reviews));
  } catch (error) {
    throw new Error('something bad happened');
  };
});

const port = process.env.PORT || 7070;
app.listen(port, () =>
  console.log(`The server is running on http://localhost:${port}`)
);