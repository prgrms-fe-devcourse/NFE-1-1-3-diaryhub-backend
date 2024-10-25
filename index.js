const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const diaryRoutes = require('./routes/diary');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const path = require('path');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const { MONGO_URI, JWT_SECRET } = process.env;

app.use(cors());
app.use(express.json());

// 정적 파일 경로 설정 (이미지 제공)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB 연결
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB 연결 성공'))
    .catch(err => console.error('MongoDB 연결 실패:', err));

// JWT 인증 미들웨어
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ message: '토큰이 필요합니다.' });

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: '유효하지 않은 토큰입니다.' });
    }
};

// 라우트 설정
app.use('/auth', authRoutes);
app.use('/diaries', authMiddleware, diaryRoutes);

// 서버 시작
app.listen(PORT, () => console.log(`서버가 ${PORT}번 포트에서 실행 중입니다.`));
