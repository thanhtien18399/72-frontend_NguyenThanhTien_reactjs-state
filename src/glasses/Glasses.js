import React, { Component } from 'react'
import Model from "../assets/glassesImage/model.jpg";
import Styles from "./style.module.css";
import clsx from 'clsx';
import Glasse from "../assets/dataGlasses.json"
export class Glasses extends Component {

    renderImg = () => {
        const html = Glasse.map((item) => {
            return (
                <img key={item.id} onClick={() => this.changeGlasse(item.id)} className={clsx(Styles.itemImg)} src={require(`../assets${item.url}`)} />
            )
        })
        return html;
    }
    state = {
        name: "GUCCI G8850U",
        img: "/glassesImage/v1.png",
        price: "30",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    };

    findId = (id) => {
        for (const i in Glasse) {
            if (Glasse[i].id === id) {
                this.setState({
                    name: Glasse[i].name,
                    img: Glasse[i].url,
                    price: Glasse[i].price,
                    desc: Glasse[i].desc,
                }, () => {
                    console.log(this.state);
                });
            }
        }
    }
    changeGlasse = (id) => {
        this.findId(id);
        document.getElementsByClassName(`${clsx(Styles.content)}`)[0].style.display="block";
    }
    closeImg=()=>{
            document.getElementsByClassName(`${clsx(Styles.content)}`)[0].style.display="none";
        
    }
    render() {
        return (
            <div className={clsx(Styles.bg)}>
                <div className={clsx(Styles.header)}>
                    <h1>TRY GLASSES APP ONLINE</h1>
                </div>
                <div className={clsx(Styles.body)}>
                    <div className='row justify-content-center '>
                        <div className='col-3 me-5 ' >
                            <div className={clsx(Styles.img)}>
                                <img className='w-100' src={Model} alt="j" ></img>
                                <img className={clsx(Styles.glasse)} src={require('../assets/glassesImage/v7.png')} alt="k" />
                                <div className={clsx(Styles.text)}>
                                    <h5>FENDI F8750</h5>
                                    <span>80$</span>
                                    <p>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-3 ms-5'>
                            <div className={clsx(Styles.img)}>
                                <img onClick={()=>{this.closeImg()}} className='w-100' src={Model} alt="j" />
                                <div id='i' className={clsx(Styles.content)}>
                                    <img  className={clsx(Styles.glasse)} src={require(`../assets${this.state.img}`)} alt="k" />
                                    <div className={clsx(Styles.text)}>
                                        <h5>{this.state.name}</h5>
                                        <span>{this.state.price}$</span>
                                        <p>{this.state.desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(Styles.listImg)}>
                        {this.renderImg()};
                    </div>
                </div>
            </div>

        )
    }
}

export default Glasses