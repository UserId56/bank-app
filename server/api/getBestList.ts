export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log("getBestList");
  //Нужна проверка на тип, если указан не верно нужно обрабатывать ошибку
  //Ниже проверять на тип и запрашивать учитывая тип с БД
  // Здесь стоит подумать. Не нужно возвращать id элементов из бд. В нашей(где работаешь) компании такого нет. Да это будет отдельный метод, но он будет возвращаться элементы с учетом выборки, как у нас, выборка, где ты указываешь, че ты хочешь вернуть из полей у тех полей у которых ref
  function getLogobyId(id: string) {
    // Здесь нужно заменить на реальную работу с БД
    return "https://example.com/logo/" + id + ".png";
  }
  return JSON.stringify({
    card: [
      {
        id: 1,
        balance: 4,
        cashback: 15,
        logo: "/images/logo1.png",
      },
      {
        id: 2,
        balance: 4,
        cashback: 1,
        logo: "/images/logo2.png",
      },
      {
        id: 3,
        balance: 5,
        cashback: 15,
        logo: "/images/logo3.png",
      },
      {
        id: 4,
        balance: 5,
        cashback: 10,
        logo: "/images/logo4.png",
      },
      {
        id: 5,
        balance: 4,
        cashback: 1.5,
        logo: "/images/logo5.png",
      },
      {
        id: 6,
        balance: 6,
        cashback: 10,
        logo: "/images/logo6.png",
      },
    ],
    credit: [
      {
        id: 1,
        balance: 1.5,
        cashback: 50000,
        logo: "/images/logo2.png",
      },
      {
        id: 2,
        balance: 4,
        cashback: 30000,
        logo: "/images/logo3.png",
      },
      {
        id: 3,
        balance: 5,
        cashback: 150000,
        logo: "/images/logo4.png",
      },
      {
        id: 4,
        balance: 5,
        cashback: 10000,
        logo: "/images/logo5.png",
      },
      {
        id: 5,
        balance: 4,
        cashback: 25000,
        logo: "/images/logo6.png",
      },
      {
        id: 6,
        balance: 6,
        cashback: 3000000,
        logo: "/images/logo1.png",
      },
    ],
    loan: [
      {
        id: 1,
        balance: 1.5,
        cashback: 5,
        logo: "/images/logo3.png",
      },
      {
        id: 2,
        balance: 0,
        cashback: 14,
        logo: "/images/logo4.png",
      },
      {
        id: 3,
        balance: 5,
        cashback: 15,
        logo: "/images/logo5.png",
      },
      {
        id: 4,
        balance: 5,
        cashback: 30,
        logo: "/images/logo6.png",
      },
      {
        id: 5,
        balance: 4,
        cashback: 60,
        logo: "/images/logo1.png",
      },
      {
        id: 6,
        balance: 6,
        cashback: 90,
        logo: "/images/logo2.png",
      },
    ],
    RKO: [
      {
        id: 1,
        balance: 1.5,
        cashback: 0,
        logo: "/images/logo4.png",
      },
      {
        id: 2,
        balance: 0,
        cashback: 750,
        logo: "/images/logo5.png",
      },
      {
        id: 3,
        balance: 5,
        cashback: 200,
        logo: "/images/logo6.png",
      },
      {
        id: 4,
        balance: 1,
        cashback: 590,
        logo: "/images/logo1.png",
      },
      {
        id: 5,
        balance: 4,
        cashback: 0,
        logo: "/images/logo2.png",
      },
      {
        id: 6,
        balance: 6,
        cashback: 0,
        logo: "/images/logo3.png",
      },
    ],
  });
});
