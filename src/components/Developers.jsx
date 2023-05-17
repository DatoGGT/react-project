import buqu from '../img/buqu.png'
import guka from '../img/guka.png'
import gio from '../img/gio.jpg'
import me from '../img/me.jpg'

const Developers = () => {
    return (
        <div className="chven">
        <figure>
        <div><img src={buqu} alt=""/>
        <p className="bu1">Buquqa Barnabishvili</p>
    <span className="bu2">Naxalovkeli React Developeri</span></div>
        <div><img src={guka} alt=""/><p className="bu1">Guka Natanadze</p>
        <span  className="bu2">Muxianeli React Developeri</span></div>
        <div><img src={gio} alt=""/><p className="bu1">Giorgi Goqadze</p><span  class="bu2">Voroncoveli React Developeri</span>
        </div>
    <div> <img src={me} alt=""/><p className="bu1">Davit Gogotishvili</p><span  class="bu2">Gldaneli React Developeri</span></div>
    </figure>
    </div>

    )
}
export default Developers