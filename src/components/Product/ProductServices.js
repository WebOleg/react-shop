import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import PaymentIcon from '@mui/icons-material/Payment'
import ReplyIcon from '@mui/icons-material/Reply'
import { Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

const ProductServices = ({
    handleClickDelivery,
    isPopUpOpenDelivery,
    handleClickPayment,
    isPopUpOpenPayment,
    handleClickReturn,
    isPopUpOpenReturn,
}) => {
    return (
        <>
            <div className="services">
                {isPopUpOpenDelivery && (
                    <div className="bgc_div">
                        <div className="zoomphoto version_inf">
                            <div className="close">
                                <CloseIcon
                                    variant="outline"
                                    className="closeicon"
                                    onClick={() => handleClickDelivery()}
                                />
                            </div>
                            <h3 className="title">
                                Доставимо цей товар швидко
                            </h3>
                            <span>Видача із магазину:</span>
                            <p>
                                — Доставка безкоштовна.
                                <br /> — Термін доставки складає від 1 до 3
                                днів.
                            </p>
                            <span>Доставка Новою Поштою:</span>
                            <p>
                                — Термін доставки складає від 1 до 3 днів.
                                <br /> — Доставка можлива після оплати так і
                                накладеним платежем.
                                <br /> — Вартість доставки оплачується
                                отримувачем згідно з умовами Нової Пошти.
                            </p>
                        </div>
                    </div>
                )}
                <Button
                    onClick={() => handleClickDelivery()}
                    className="services_item"
                >
                    <LocalShippingIcon></LocalShippingIcon>
                    <span>
                        Доставимо цей товар <br />
                        Швидко
                    </span>
                </Button>
                <Button
                    onClick={() => handleClickPayment()}
                    className="services_item"
                >
                    <PaymentIcon></PaymentIcon>
                    <span>
                        Доступні <br />
                        усі види оплати
                    </span>
                </Button>
                {isPopUpOpenPayment && (
                    <div className="bgc_div">
                        <div className="zoomphoto version_inf">
                            <div className="close">
                                <CloseIcon
                                    variant="outline"
                                    className="closeicon"
                                    onClick={() => handleClickPayment()}
                                />
                            </div>
                            <h3 className="title">Доступні усі види оплати</h3>
                            <p>
                                <strong>Оплата готівкою</strong> — без комісії.
                            </p>
                            <p>
                                <strong>Оплата карткою у магазині</strong> — без
                                комісії.
                            </p>
                            <p>
                                <strong>
                                    Оплата переказом на картку (Mono, Приват24,
                                    тощо)
                                </strong>
                                — без комісії.
                            </p>
                            <p>
                                <strong>
                                    Оплата онлайн (Apple Pay, G-Pay)
                                </strong>
                                — без комісії.
                            </p>
                            <p>
                                <strong>
                                    Оплата по перерахунку (для ФОП, ТОВ чи інших
                                    форм)
                                </strong>
                                — без комісії.
                            </p>
                            <p>
                                <strong>
                                    *Вартість замовлення фіксується валютою та
                                    перераховується згідно з курсом в день
                                    розрахунку. Детальніше на Ябко:
                                </strong>
                            </p>
                        </div>
                    </div>
                )}
                <Button
                    onClick={() => handleClickReturn()}
                    className="services_item"
                >
                    <ReplyIcon></ReplyIcon>
                    <span>
                        Просте повернення <br />
                        протягом 14 днів
                    </span>
                </Button>
                {isPopUpOpenReturn && (
                    <div className="bgc_div">
                        <div className="zoomphoto version_inf">
                            <div className="close">
                                <CloseIcon
                                    variant="outline"
                                    className="closeicon"
                                    onClick={() => handleClickReturn()}
                                />
                            </div>
                            <h3 className="title">
                                Просте повернення протягом 14 днів
                            </h3>
                            <span>Нові смартфони Apple:</span>
                            <p>
                                Надається гарантія 1 рік від виробника та 31
                                день від магазину (із можливістю розширення до
                                1-2 років).
                            </p>
                            <span>Повернення:</span>
                            <p>
                                Повернення техніки можливе протягом 14 днів, за
                                умови збереження візуального та функціонального
                                стану.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default ProductServices
