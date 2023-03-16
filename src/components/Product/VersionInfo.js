import React from 'react'
import CloseIcon from '@mui/icons-material/Close'

const VersionInfo = ({
    isPopUpOpenVersionInfo,
    handleClickCloseVersionInfo,
}) => {
    return (
        <>
            {isPopUpOpenVersionInfo && (
                <div className="bgc_div">
                    <div className="zoomphoto version_inf">
                        <div className="close">
                            <CloseIcon
                                variant="outline"
                                className="closeicon"
                                onClick={() => handleClickCloseVersionInfo()}
                            />
                        </div>
                        <h3 className="title">Global</h3>
                        <span>У чому різниця між версіями?</span>
                        <p>
                            • Пристрої Global — це смартфони, що розраховані на
                            міжнародний ринок. Та які підлягають безкоштовному
                            обслуговуванню протягом гарантійного терміну, що
                            вказаний в гарантійному талоні, тільки у мережі
                            Ябко.
                        </p>
                        <p>
                            • Версія e-Sim — це смартфони, що розраховані на
                            ринок США та не містять слотів для SIM-карт.
                            Пристрої e-Sim можна обслуговувати протягом усього
                            гарантійного терміну від Ябко у нашій мережі
                            магазинів. На дану техніку надається гарантія 1 рік
                            від виробника.
                        </p>
                        <p>
                            • Техніку UA можна обслуговувати протягом усього
                            гарантійного терміну безкоштовно у мережі Ябко та у
                            будь-яких авторизованих сервісних центрах в Україні.
                            На дану техніку надається гарантія 1 рік.
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}

export default VersionInfo
