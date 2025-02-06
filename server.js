const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// CORS 설정 (리액트 프론트엔드에서 API를 호출할 수 있도록 허용)
app.use(cors());

// app.use(cors({
//     origin: "http://localhost:3000", // 특정 도메인만 허용 가능
//     methods: ["GET", "POST"] // 허용할 HTTP 메서드 설정
// }));


// 간단한 API 엔드포인트
app.get("/api/message", (req, res) => {
    res.json({ message: "Hello from API!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
