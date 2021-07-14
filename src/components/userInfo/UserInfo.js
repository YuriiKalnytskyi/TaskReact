import './UserInfo.css'

export default function UserInfo (){
    return(
        <a href={'https://github.com/YuriiKalnytskyi'} className={'a'}>
            <div className="user_container">
                <div className="img_container">
                    <img className="img"
                         src="https://toptos.com.ua/content/images/19/475x480l50nn0/originalnyy-popkholder-dlya-smartfona-bart-simpson-69089514555202.png"
                         alt="test"/>
                </div>
                <div>Yuri Kalnytskyi</div>
            </div>

        </a>
    )

}