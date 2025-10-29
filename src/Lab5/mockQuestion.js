// export interface Question {
//   question: string;
//   options: string[];
//   correctAnswer: number;
// }

const mockQuestions = [
  {
    question: "Phương thức nào dùng để thêm một phần tử vào cuối mảng?",
    options: [
      "A. push()",
      "B. pop()", 
      "C. shift()",
      "D. unshift()"
    ],
    correctAnswer: 0
  },
  {
    question: "Kiểu dữ liệu nào KHÔNG PHẢI là primitive trong JavaScript?",
    options: [
      "A. string",
      "B. number",
      "C. boolean", 
      "D. array"
    ],
    correctAnswer: 3
  },
  {
    question: "Câu lệnh nào tạo ra một object mới?",
    options: [
      "A. let obj = []",
      "B. let obj = {}", 
      "C. let obj = ()",
      "D. let obj = <>"
    ],
    correctAnswer: 1
  },
  {
    question: "Toán tử nào dùng để so sánh cả giá trị và kiểu dữ liệu?",
    options: [
      "A. ==",
      "B. ===", 
      "C. =",
      "D. !="
    ],
    correctAnswer: 1
  },
  {
    question: "Hàm setTimeout() dùng để làm gì?",
    options: [
      "A. Thực thi code ngay lập tức",
      "B. Thực thi code sau một khoảng thời gian", 
      "C. Dừng thực thi code",
      "D. Lặp lại code liên tục"
    ],
    correctAnswer: 1
  },
  {
    question: "Phương thức nào chuyển đổi JSON string thành JavaScript object?",
    options: [
      "A. JSON.parse()", 
      "B. JSON.stringify()",
      "C. JSON.convert()",
      "D. JSON.toObject()"
    ],
    correctAnswer: 0
  },
  {
    question: "Biến được khai báo với 'let' có phạm vi:",
    options: [
      "A. Global",
      "B. Function", 
      "C. Block", 
      "D. Module"
    ],
    correctAnswer: 2
  },
  {
    question: "Câu lệnh nào đúng để khai báo arrow function?",
    options: [
      "A. function() => {}",
      "B. () => {}", 
      "C. => () {}",
      "D. function => ()"
    ],
    correctAnswer: 1
  },
  {
    question: "Promise trong JavaScript có mấy trạng thái?",
    options: [
      "A. 2",
      "B. 3", 
      "C. 4",
      "D. 5"
    ],
    correctAnswer: 1
  },
  {
    question: "Phương thức nào lấy phần tử theo id trong DOM?",
    options: [
      "A. document.querySelector()",
      "B. document.getElementByClass()",
      "C. document.getElementById()", 
      "D. document.getElementsByTagName()"
    ],
    correctAnswer: 2
  }
];

export default mockQuestions;