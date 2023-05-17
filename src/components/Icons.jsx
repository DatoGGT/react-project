import icon from '../img/1.png'
import icon1 from '../img/2.png'
import icon2 from '../img/3.png'
import icon3 from '../img/4.png'
import icon4 from '../img/5.png'
import icon5 from '../img/6.png'
import icon6 from '../img/7.png'
import icon7 from '../img/8.png'

const Icons=()=>{
    return (
        <>
        <div class="core">
<h4>CORE FEATURES</h4></div>
<div class="span00"><span>Constantly update with <br/>
        New Features.</span></div>
<div class="icons2">
<section class="icons2">
    <figure>
        <div><img src={icon} alt=""/>
            <span>HTML</span></div>
        <div><img src={icon1} alt=""/><span>Css</span></div>
        <div><img src={icon2} alt=""/><span>Jquery</span></div>
        <div><img src={icon3} alt=""/><span>W3school</span></div>
        <div><img src={icon4} alt=""/><span>Translate</span></div>
        <div><img src={icon5} alt=""/><span>Repeat</span></div>
        <div><img src={icon6} alt=""/><span>Mail</span></div>
        <div><img src={icon7} alt=""/><span>Eye</span></div>
    </figure>
</section>
</div>
</>
    )
}
export default Icons