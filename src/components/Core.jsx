import fimg from '../img/t1.png'
import simg from '../img/t1.png'
import timg from '../img/t1.png'

const Core = () => {
    return (
        <>
<div className="last">
<div className="core1">
<h4>CORE FEATURES</h4></div>
</div>
<div className="span01"><span>Constantly update with <br/>
    New Features.</span></div>
<div className="naz"> <div className="nazu">
        <div className="nazu3"><img src={fimg} alt=""/>
        <div className="nazu1"><p>Nazu</p></div>
    <div className="nazu2"> <span className="nspan">Great Temple And DreamIT Has good<br/>Customer Support. i can recommend it</span></div>
    </div></div>
    
    <div className="nazu">
        <div className="nazu3"><img src={simg} alt=""/>
        <div className="nazu1"><p>Nazu</p></div>
    <div className="nazu2"> <span className="nspan">Great Temple And DreamIT Has good<br/>Customer Support. i can recommend it</span></div>
    </div></div>
    
    <div className="nazu">
        <div className="nazu3"><img src={timg} alt=""/>
        <div className="nazu1"><p>Nazu</p></div>
    <div class="nazu2"> <span className="nspan">Great Temple And DreamIT Has good<br/>Customer Support. i can recommend it.</span></div>
    </div></div></div>

    </>


    )
}

export default Core