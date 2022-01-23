import UserInfo from "../UserInfo";
import "./index.css";
const BASE_CLASS = "ic-sideBar";
export default function SideBar() {
  return (
    <div className={`${BASE_CLASS}`}>
      <div className={`${BASE_CLASS}-content`}>
        <UserInfo
          userName="alverdfont"
          label="Albert Font Fernández"
          buttonTitle="Seguir"
          imagePath="https://cdnnmundo1.img.sputniknews.com/img/07e5/09/13/1116212032_0:0:1300:975_1920x0_80_0_0_a523efb8da64e8c4064a6df5702a4a88.png"
        />
        <div className={`${BASE_CLASS}-suggestions`}>
          <div className={`${BASE_CLASS}-suggestions-header`}>
            <span>Sugerencias para ti </span>
            <button>Ver todo</button>
          </div>
          <div className={`${BASE_CLASS}-sugesstionsUser`}>
            <UserInfo
              iconSize="small"
              userName="vancityreynolds"
              label="Ryan Reynolds"
              buttonTitle="Seguir"
              imagePath="https://cdnnmundo1.img.sputniknews.com/img/07e5/09/13/1116212032_0:0:1300:975_1920x0_80_0_0_a523efb8da64e8c4064a6df5702a4a88.png"
            />
          </div>
          <div className={`${BASE_CLASS}-sugesstionsUser`}>
            <UserInfo
              iconSize="small"
              userName="gal_gadot"
              label="Gal Gadot"
              buttonTitle="Seguir"
              imagePath="https://cdnnmundo1.img.sputniknews.com/img/07e5/09/13/1116212032_0:0:1300:975_1920x0_80_0_0_a523efb8da64e8c4064a6df5702a4a88.png"
            />
          </div>
          <div className={`${BASE_CLASS}-sugesstionsUser`}>
            <UserInfo
              iconSize="small"
              userName="therock"
              label="therock"
              buttonTitle="Seguir"
              imagePath="https://cdnnmundo1.img.sputniknews.com/img/07e5/09/13/1116212032_0:0:1300:975_1920x0_80_0_0_a523efb8da64e8c4064a6df5702a4a88.png"
            />
          </div>
          <div className={`${BASE_CLASS}-sugesstionsUser`}>
            <UserInfo
              iconSize="small"
              userName="gryffinofficial"
              label="Gryffin"
              buttonTitle="Seguir"
              imagePath="https://cdnnmundo1.img.sputniknews.com/img/07e5/09/13/1116212032_0:0:1300:975_1920x0_80_0_0_a523efb8da64e8c4064a6df5702a4a88.png"
            />
          </div>
          <div className={`${BASE_CLASS}-sugesstionsUser`}>
            <UserInfo
              iconSize="small"
              userName="illenium"
              label="ILLENIUM"
              buttonTitle="Seguir"
              imagePath="https://cdnnmundo1.img.sputniknews.com/img/07e5/09/13/1116212032_0:0:1300:975_1920x0_80_0_0_a523efb8da64e8c4064a6df5702a4a88.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
