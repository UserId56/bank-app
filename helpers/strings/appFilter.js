const stringsData = {
    title: {
        "/": "Умный подбор финансовых услуг",
        "/credit-card": "Кредитные карты",
        "/credit": "Кредиты",
        "/loans": "Займы",
        "/rko": "РКО",
        "/banks": "Банки"
    },
    subTitle: {
        "/": "",
        "/credit-card": "Подберите самую выгодную карту",
        "/credit": "Мы поможем выбрать самый выгодный кредит",
        "/loans": "Мы поможем выбрать самый выгодный займ",
        "/rko": "Подберём лучшее РКО для вашего дела",
        "/banks": "Рейтинг банков от AIOBank"
    }
}

export default function getStringsData(path) {
    // console.log('appfilter JS', path)
    return {
        title: stringsData.title[path],
        subTitle: stringsData.subTitle[path]
    }
}