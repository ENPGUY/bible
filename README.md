<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>오늘의 성경말씀</title>

  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }

    .container {
      background: white;
      padding: 30px;
      border-radius: 20px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.15);
      max-width: 500px;
      text-align: center;
    }

    h1 {
      color: #333;
    }

    #verse {
      font-size: 20px;
      line-height: 1.6;
      margin: 25px 0;
      color: #222;
    }

    #reference {
      font-weight: bold;
      color: #555;
      margin-bottom: 20px;
    }

    button {
      background: #4a6cf7;
      color: white;
      border: none;
      padding: 12px 20px;
      border-radius: 10px;
      font-size: 16px;
      cursor: pointer;
    }

    button:hover {
      background: #3451c9;
    }
  </style>
</head>
<body>

  <div class="container">
    <h1>오늘의 성경말씀</h1>

    <div id="verse">내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라</div>
    <div id="reference">빌립보서 4:13</div>

    <button onclick="showRandomVerse()">말씀 새로 보기</button>
  </div>

  <script>
    const verses = [
      {
        text: "내게 능력 주시는 자 안에서 내가 모든 것을 할 수 있느니라",
        reference: "빌립보서 4:13"
      },
      {
        text: "여호와는 나의 목자시니 내게 부족함이 없으리로다",
        reference: "시편 23:1"
      },
      {
        text: "수고하고 무거운 짐 진 자들아 다 내게로 오라 내가 너희를 쉬게 하리라",
        reference: "마태복음 11:28"
      },
      {
        text: "두려워하지 말라 내가 너와 함께 함이라",
        reference: "이사야 41:10"
      },
      {
        text: "너는 마음을 다하여 여호와를 신뢰하고 네 명철을 의지하지 말라",
        reference: "잠언 3:5"
      },
      {
        text: "사랑은 오래 참고 사랑은 온유하며",
        reference: "고린도전서 13:4"
      }
    ];

    function showRandomVerse() {
      const randomIndex = Math.floor(Math.random() * verses.length);
      const selectedVerse = verses[randomIndex];

      document.getElementById("verse").innerText = selectedVerse.text;
      document.getElementById("reference").innerText = selectedVerse.reference;
    }
  </script>

</body>
</html>
